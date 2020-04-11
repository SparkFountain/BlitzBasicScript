import { Injectable } from '@angular/core';
import { GameMovie } from '../../../interfaces/game/movie';
import { of, Subscriber } from 'rxjs';

@Injectable()
export class CommandsGraphics2dMoviesService {
  constructor() {}

  closeMovie(movie: GameMovie): Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
      movie.name = null;
      movie.video = null;
      movie = null;

      resolve();
    });
  }

  drawMovie(movie: GameMovie, x: number, y: number, width: number, height: number): Promise<boolean> {
    return new Promise<boolean>((resolve: Function, reject: Function) => {
      //TODO play video

      if (movie.video.ended) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  }

  movieHeight(movie: GameMovie): Promise<number> {
    return Promise.resolve(movie.video.height);
  }

  moviePlaying(movie: GameMovie): Promise<boolean> {
    return movie.video.ended ? Promise.resolve(false) : Promise.resolve(true);
  }

  movieWidth(movie: GameMovie): Promise<number> {
    return Promise.resolve(movie.video.width);
  }

  openMovie(filePath: string): Promise<GameMovie> {
    return Promise.resolve({
      name: '',
      video: null,
    });
  }
}
