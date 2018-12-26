import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BlitzBasicScriptComponent} from './blitz-basic-script.component';
import {CommandService} from '../services/commands/command.service';
import {CommandsBasicsDiverse} from '../services/commands/basics/diverse';
import {CommandsBasicsMaths} from '../services/commands/basics/maths';
import {CommandsBasicsStrings} from '../services/commands/basics/strings';
import {CommandsBasicsTimeRandom} from '../services/commands/basics/time-random';
import {GeneralService} from '../services/general/general.service';
import {GameStateService} from '../services/game-state/game-state.service';
import {BabylonJSService} from '../services/babylon-js/babylon-js.service';
import {CommandsGraphics2dDisplay} from '../services/commands/graphics2d/display';
import {CommandsGraphics2dGraphics} from '../services/commands/graphics2d/graphics';

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
    GeneralService,

    CommandService,
    CommandsBasicsDiverse,
    CommandsBasicsMaths,
    CommandsBasicsStrings,
    CommandsBasicsTimeRandom,

    CommandsGraphics2dDisplay,
    CommandsGraphics2dGraphics,

    GameStateService,
    BabylonJSService
  ]
})

export class BlitzBasicScriptModule {
}
