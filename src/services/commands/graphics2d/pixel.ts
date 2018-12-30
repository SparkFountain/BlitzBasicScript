import {Injectable} from '@angular/core';
import {Observable, Subscriber} from 'rxjs';
import {Graphics2dService} from '../../2d/graphics2d.service';

@Injectable()
export class CommandsGraphics2dPixel {
  constructor(private graphics2d: Graphics2dService) {

  }

  colorBlue() {

  }

  colorGreen() {

  }

  colorRed() {

  }

  plot(x: number, y: number): Observable<void> {
    return this.graphics2d.plot(x, y);
  }
}
