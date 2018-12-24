import {Injectable} from '@angular/core';
import {AbstractSyntaxTree} from '../../interfaces/abstract-syntax-tree';
import {BbscriptCode} from '../../interfaces/bbscript-code';
import {Observable} from 'rxjs';
import {CommandService} from '../commands/command.service';

@Injectable({
  providedIn: 'root'
})
export class CodeGenerator {
  constructor(private commandService: CommandService) {

  }

  createTargetCode(abstractSyntaxTree: AbstractSyntaxTree): BbscriptCode {
    return null;
  }

  getFakeTargetCode(): BbscriptCode {
    return {
      globals: [],
      statements: [
        new Observable((observer) => {
          console.info('First Statement Works');
          observer.next();
          observer.complete();
        }),

        this.commandService.basics.diverse.appTitle('Carribico')
      ],
      functions: [],
      types: []
    };
  }
}
