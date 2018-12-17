import {ModuleWithProviders, NgModule} from '@angular/core';
import { BlitzbasicscriptComponent } from './blitzbasicscript.component';
import {Lexer} from '../services/lexer/lexer.service';
import {CodeGenerator} from '../services/code-generator/code-generator.service';
import {Parser} from '../services/parser/parser.service';
import {HttpClientModule} from '@angular/common/http';
import {CommandService} from '../services/commands/command.service';

@NgModule({
  declarations: [
    BlitzbasicscriptComponent
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    BlitzbasicscriptComponent
  ]
})

export class BlitzbasicscriptModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BlitzbasicscriptModule,
      providers: [ Lexer, Parser, CodeGenerator, CommandService ]
    };
  }
}
