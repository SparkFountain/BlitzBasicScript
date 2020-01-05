import { Injectable } from "@angular/core";
import { CommandsBasicsDiverse } from './basics/diverse.service';
import { Observable, of } from 'rxjs';
import { CommandsBasicsMathsService } from './basics/maths.service';

@Injectable()
export class CommandsBasicsService {
  constructor(private maths: CommandsBasicsMathsService
    ) {

  }

  sqr(value: number): Observable<number> {
    return this.maths.sqr(value);
  }
}
