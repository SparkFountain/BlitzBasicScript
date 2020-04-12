import { Injectable } from '@angular/core';
import { GameMovie } from '../../../interfaces/game/movie';
import { of, Subscriber } from 'rxjs';

@Injectable()
export class CommandsGraphics2dMoviesService {
  constructor() {}

  async closeMovie(movie: GameMovie): Promise<void> {
    movie.name = null;
    movie.video = null;
    movie = null;
  }

  async drawMovie(movie: GameMovie, x: number, y: number, width: number, height: number): Promise<boolean> {
    if (movie.video.ended) {
      return false;
    } else {
      return true;
    }
  }

  async movieHeight(movie: GameMovie): Promise<number> {
    return movie.video.height;
  }

  async moviePlaying(movie: GameMovie): Promise<boolean> {
    return movie.video.ended ? false : true;
  }

  async movieWidth(movie: GameMovie): Promise<number> {
    return Promise.resolve(movie.video.width);
  }

  async openMovie(filePath: string): Promise<GameMovie> {
    return {
      name: '',
      video: null
    };
  }
}
