import {Injectable} from '@angular/core';
import {GameSound} from '../../../interfaces/game/sound';
import {Observable, Subscriber} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {DebugEnvironment} from '../../environment/debug.environment';

@Injectable()
export class CommandsSoundMusicSamples {
  constructor(private http: HttpClient,
              private environment: DebugEnvironment) {

  }

  playCDTrack() {
  }

  //TODO Midi will not be natively supported, use MIDI.js or similar library
  playMusic(filePath: string, mode?: number): Observable<GameSound> {
    return new Observable<GameSound>((observer: Subscriber<GameSound>) => {
      this.loadSound(filePath).subscribe((sound: GameSound) => {
        if (mode !== undefined) {
          switch (mode) {
            case 0:
              //play one time
              break;
            case 1:
              //play loop
              break;
            case 3:
            //set loop without playing
          }
        } else {
          observer.next(sound);
          observer.complete();
        }
      });
    });
  }

  freeSound(sound: GameSound): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      sound = null;

      observer.next();
      observer.complete();
    });
  }

  loadSound(filePath: string): Observable<GameSound> {
    return new Observable<GameSound>((observer: Subscriber<GameSound>) => {
      //info: the responseType conversion to JSON is a workaround, see https://github.com/angular/angular/issues/18586
      this.http.get<ArrayBuffer>(this.environment.getServer() + filePath, {responseType: 'arraybuffer' as 'json'})
        .subscribe((soundAsBlob: ArrayBuffer) => {
          let audioCtx: AudioContext = new AudioContext();
          let src = audioCtx.createBufferSource();
          let volumeGain: GainNode = audioCtx.createGain();
          let biquadFilter: BiquadFilterNode = audioCtx.createBiquadFilter();
          let pannerNode: StereoPannerNode = audioCtx.createStereoPanner();

          audioCtx.decodeAudioData(soundAsBlob).then((buffer) => {
              src.buffer = buffer;

              volumeGain.gain.value = 0.1;
              volumeGain.connect(audioCtx.destination);

              //biquadFilter.connect(volumeGain);

              pannerNode.pan.value = 0;
              pannerNode.connect(volumeGain);

              src.connect(pannerNode);
              //src.connect(pannerNode);
              //src.connect(audioCtx.destination);

              observer.next({
                context: audioCtx,
                source: src,
                volumeGain: volumeGain,
                biquadFilter: biquadFilter,
                stereoPanner: pannerNode
              });
              observer.complete();
            },
            (e) => {
              console.info('Error with decoding audio data' + e.err);
            });
        });
    });
  }

  loopSound(sound: GameSound): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      sound.source.loop = true;

      observer.next();
      observer.complete();
    });
  }

  playSound(sound: GameSound): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      sound.source.start(0);

      observer.next();
      observer.complete();
    });
  }

  soundPan(sound: GameSound, pan: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      sound.stereoPanner.pan.value = pan;

      observer.next();
      observer.complete();
    });
  }

  soundPitch(sound: GameSound, frequency: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      /*let srcBuffer = sound.source.buffer;

      let c = new OfflineAudioContext(1, srcBuffer.duration, 48000);
      let b = c.createBuffer(1, srcBuffer.duration, 44100);
      b.copyToChannel(srcBuffer, 0);
      sound.source = c.createBufferSource();
      sound.source.buffer = b;
      sound.source.connect(sound.context.destination);*/

      observer.next();
      observer.complete();
    });
  }

  soundVolume(sound: GameSound, volume: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      sound.volumeGain.gain.value = volume;

      observer.next();
      observer.complete();
    });
  }
}
