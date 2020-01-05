import {Injectable} from '@angular/core';
import {GameMovie} from '../../../interfaces/game/movie';
import {Observable, of, Subscriber} from 'rxjs';

@Injectable()
export class CommandsGraphics2dMovies {
    constructor() {

    }

    closeMovie(movie: GameMovie): Observable<void> {
        return new Observable<void>((observer: Subscriber<void>) => {
            movie.name = null;
            movie.video = null;
            movie = null;

            observer.next();
            observer.complete();
        });
    }

    drawMovie(movie: GameMovie, x: number, y: number, width: number, height: number): Observable<boolean> {
        return new Observable<boolean>((observer: Subscriber<boolean>) => {
            //TODO play video

            if(movie.video.ended) {
                observer.next(false);
            } else {
                observer.next(true);
            }
            observer.complete();
        });
    }

    movieHeight(movie: GameMovie): Observable<number> {
        return of(movie.video.height);
    }

    moviePlaying(movie: GameMovie): Observable<boolean> {
        return movie.video.ended ? of(false) : of(true);
    }

    movieWidth(movie: GameMovie): Observable<number> {
        return of(movie.video.width);
    }

    openMovie(filePath: string): Observable<GameMovie> {
        return of({
            name: '',
            video: null
        });
    }
}
