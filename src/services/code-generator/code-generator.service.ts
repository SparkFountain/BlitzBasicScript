import {Injectable} from '@angular/core';
import {AbstractSyntaxTree} from '../../interfaces/parser/abstract-syntax-tree';
import {BbscriptCode} from '../../interfaces/bbscript-code';
import {Observable} from 'rxjs';
import {CommandService} from '../commands/command.service';
import {types} from 'util';
import {GeneralService} from '../general/general.service';
import {CommandsGraphics2dDisplay} from '../commands/graphics2d/display';
import {CommandsGraphics2dGraphics} from '../commands/graphics2d/graphics';
import {CommandsBasicsDiverse} from '../commands/basics/diverse';
import {NumericalExpression} from '../../interfaces/code/expressions/numerical-expression';

@Injectable({
  providedIn: 'root'
})
export class CodeGenerator {
  constructor(
    private generalService: GeneralService,
    private commandService: CommandService,
    private commandsGraphics2dDisplay: CommandsGraphics2dDisplay,
    private commandsGraphics2dGraphics: CommandsGraphics2dGraphics,
    private commandsBasicsDiverse: CommandsBasicsDiverse
  ) {

  }

  createTargetCode(abstractSyntaxTree: AbstractSyntaxTree): BbscriptCode {
    return null;
  }

  getFakeTargetCode(): BbscriptCode {
    return {
      globals: [],
      statements: [
        this.commandsGraphics2dDisplay.graphics(800, 600),
        //this.commandsGraphics2dGraphics.cameraClsColor(255,0,0),  //TODO wrong implementation, fix
        this.generalService.assign({
          variable: 'i',
          type: 'global',
          expression: {
            terms: [42],
            operations: []
          } as NumericalExpression
        })

        /*this.generalService.forToNext({
          assignment: {
            variable: 'i',
            expression: 10
          },
          limit: 10,
          increment: 1,
          statements: []
        }),

        this.commandService.basics.diverse.appTitle('Carribico')*/
      ],
      functions: [],
      types: []
    };
  }
}
