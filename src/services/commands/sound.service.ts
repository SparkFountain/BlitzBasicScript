import { Injectable } from '@angular/core';
import { CommandsSound3DService } from './sound/3d.service';
import { CommandsSoundChannelsService } from './sound/channels.service';
import { CommandsSoundMusicSamplesService } from './sound/music-samples.service';
import { GameSound } from 'bbscript/src/interfaces/game/sound';

@Injectable()
export class CommandsSoundService {
  constructor(
    private sound3dService: CommandsSound3DService,
    private channelService: CommandsSoundChannelsService,
    private musicSamplesService: CommandsSoundMusicSamplesService
  ) {}

  // 3D SOUND
  async createListener(): Promise<any> {
    return this.sound3dService.createListener();
  }

  async emitSound(): Promise<any> {
    return this.sound3dService.emitSound();
  }

  async load3DSound(): Promise<any> {
    return this.sound3dService.load3DSound();
  }

  // CHANNELS
  async channelPan(): Promise<any> {
    return this.channelService.channelPan();
  }

  async channelPitch(): Promise<any> {
    return this.channelService.channelPitch();
  }

  async channelPlaying(): Promise<any> {
    return this.channelService.channelPlaying();
  }

  async channelVolume(): Promise<any> {
    return this.channelService.channelVolume();
  }

  async pauseChannel(): Promise<any> {
    return this.channelService.pauseChannel();
  }

  async resumeChannel(): Promise<any> {
    return this.channelService.resumeChannel();
  }

  async stopChannel(): Promise<any> {
    return this.channelService.stopChannel();
  }

  // MUSIC SAMPLES
  async playCDTrack(): Promise<any> {
    return this.musicSamplesService.playCDTrack();
  }

  //TODO Midi will not be natively supported, use MIDI.js or similar library
  async playMusic(filePath: string, mode?: number): Promise<GameSound> {
    return this.musicSamplesService.playMusic(filePath, mode);
  }

  async freeSound(sound: GameSound): Promise<void> {
    return this.musicSamplesService.freeSound(sound);
  }

  async loadSound(filePath: string): Promise<GameSound> {
    return this.musicSamplesService.loadSound(filePath);
  }

  async loopSound(sound: GameSound): Promise<void> {
    return this.musicSamplesService.loopSound(sound);
  }

  async playSound(sound: GameSound): Promise<void> {
    return this.musicSamplesService.playSound(sound);
  }

  async soundPan(sound: GameSound, pan: number): Promise<void> {
    return this.musicSamplesService.soundPan(sound, pan);
  }

  async soundPitch(sound: GameSound, frequency: number): Promise<void> {
    return this.musicSamplesService.soundPitch(sound, frequency);
  }

  async soundVolume(sound: GameSound, volume: number): Promise<void> {
    return this.musicSamplesService.soundVolume(sound, volume);
  }
}
