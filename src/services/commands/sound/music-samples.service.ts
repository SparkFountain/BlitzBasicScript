import {GameSound} from '../../../interfaces/game/sound';
import {Observable, Subscriber} from 'rxjs';
import {DebugEnvironment} from '../../environment/debug.environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


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
                    let bufferSourceNode: AudioBufferSourceNode = audioCtx.createBufferSource();
                    let volumeGain: GainNode = audioCtx.createGain();
                    let pannerNode: StereoPannerNode = audioCtx.createStereoPanner();

                    audioCtx.decodeAudioData(soundAsBlob).then((buffer: AudioBuffer) => {
                            //TODO test if this also works if the state is not initialized with "suspend"
                            audioCtx.resume().then(() => {
                                bufferSourceNode.buffer = buffer;

                                volumeGain.gain.value = 0.1;
                                volumeGain.connect(audioCtx.destination);

                                pannerNode.pan.value = 0;
                                pannerNode.connect(volumeGain);

                                bufferSourceNode.connect(pannerNode);

                                observer.next({
                                    context: audioCtx,
                                    source: bufferSourceNode,
                                    volumeGain: volumeGain,
                                    stereoPanner: pannerNode
                                });
                                observer.complete();
                            });
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
            //TODO check how many channels exist and copy all of them successively

            let newBufferNode = sound.context.createBufferSource();
            newBufferNode.buffer = sound.context.createBuffer(2, sound.source.buffer.length, frequency);
            let leftChannel = sound.source.buffer.getChannelData(0);
            let rightChannel = sound.source.buffer.getChannelData(1);
            newBufferNode.buffer.copyToChannel(leftChannel, 0);
            newBufferNode.buffer.copyToChannel(rightChannel, 1);

            sound.source = newBufferNode;
            sound.source.connect(sound.stereoPanner);

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
