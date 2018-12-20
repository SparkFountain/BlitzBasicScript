import {ModuleWithProviders, NgModule} from '@angular/core';
import { BlitzBasicScriptComponent } from './blitzbasicscript.component';
import {Lexer} from '../services/lexer/lexer.service';
import {CodeGenerator} from '../services/code-generator/code-generator.service';
import {Parser} from '../services/parser/parser.service';
import {HttpClientModule} from '@angular/common/http';
import {CommandService} from '../services/commands/command.service';

@NgModule({
  declarations: [
    BlitzBasicScriptComponent
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    BlitzBasicScriptComponent
  ]
})

export class BlitzBasicScriptModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BlitzBasicScriptModule,
      providers: [ Lexer, Parser, CodeGenerator, CommandService ]
    };
  }
}
