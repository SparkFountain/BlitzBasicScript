import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BlitzBasicScriptComponent} from './blitz-basic-script.component';
import {CommandsBasicsDiverse} from '../services/commands/basics/diverse';
import {CommandsBasicsMaths} from '../services/commands/basics/maths';
import {CommandsBasicsStrings} from '../services/commands/basics/strings';
import {CommandsBasicsTimeRandom} from '../services/commands/basics/time-random';
import {GeneralService} from '../services/general/general.service';
import {GameStateService} from '../services/game-state/game-state.service';
import {BabylonJSService} from '../services/babylon-js/babylon-js.service';
import {CommandsGraphics2dDisplay} from '../services/commands/graphics2d/display';
import {CommandsGraphics2dGraphics} from '../services/commands/graphics2d/graphics';
import {CommandsGraphics3dCamera} from '../services/commands/graphics3d/camera';
import {CommandsGraphics3dMeshes} from '../services/commands/graphics3d/meshes';
import {CommandsGraphics3dCoordinates} from '../services/commands/graphics3d/coordinates';
import {Graphics2dService} from '../services/2d/graphics2d.service';
import {GuiService} from '../services/gui/gui.service';
import {CommonModule} from '@angular/common';
import {CommandsGraphics2dPixel} from '../services/commands/graphics2d/pixel';
import {CommandsGraphics2dImages} from '../services/commands/graphics2d/images';
import {DebugEnvironment} from '../services/environment/debug.environment';
import {CommandsGraphics3dLightShadow} from '../services/commands/graphics3d/light-shadow';
import {CommandsSoundMusicSamples} from '../services/commands/sound/music-samples';

@NgModule({
    declarations: [
        BlitzBasicScriptComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule
    ],
    exports: [
        BlitzBasicScriptComponent
    ],
    providers: [
        DebugEnvironment,

        GeneralService,

        CommandsBasicsDiverse,
        CommandsBasicsMaths,
        CommandsBasicsStrings,
        CommandsBasicsTimeRandom,

        CommandsGraphics2dDisplay,
        CommandsGraphics2dGraphics,
        CommandsGraphics2dImages,
        CommandsGraphics2dPixel,

        CommandsGraphics3dCamera,
        CommandsGraphics3dCoordinates,
        CommandsGraphics3dLightShadow,
        CommandsGraphics3dMeshes,

        CommandsSoundMusicSamples,

    GameStateService,
    BabylonJSService,
    Graphics2dService,
    GuiService
  ]
})

export class BlitzBasicScriptModule {
}
