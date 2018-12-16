import {ModuleWithProviders, NgModule} from '@angular/core';
import { BlitzbasicscriptComponent } from './blitzbasicscript.component';
import {Lexer} from '../services/lexer/lexer';
import {CodeGenerator} from '../services/code-generator/code-generator';
import {Parser} from '../services/parser/parser';
import {HttpClientModule} from '@angular/common/http';

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
      providers: [ Lexer, Parser, CodeGenerator ]
    };
  }
}
