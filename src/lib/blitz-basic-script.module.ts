import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BlitzBasicScriptComponent} from './blitz-basic-script.component';
import {CommandService} from '../services/commands/command.service';
import {CommandsBasicsDiverse} from '../services/commands/basics/diverse';
import {CommandsBasicsMaths} from '../services/commands/basics/maths';
import {CommandsBasicsStrings} from '../services/commands/basics/strings';
import {CommandsBasicsTimeRandom} from '../services/commands/basics/time-random';

@NgModule({
  declarations: [
    BlitzBasicScriptComponent
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    BlitzBasicScriptComponent
  ],
  providers: [
    CommandService,
    CommandsBasicsDiverse,
    CommandsBasicsMaths,
    CommandsBasicsStrings,
    CommandsBasicsTimeRandom
  ]
})

export class BlitzBasicScriptModule {
}
