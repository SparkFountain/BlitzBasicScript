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
import {CommandsGraphics2dText} from '../services/commands/graphics2d/text';
import {BlitzBasicScriptButtonModule} from '../components/button/button.module';
import {BlitzBasicScriptCanvasModule} from '../components/canvas/canvas.module';
import {BlitzBasicScriptComboBoxModule} from '../components/combo-box/canvas.module';
import {BlitzBasicScriptHtmlModule} from '../components/html/html.module';
import {BlitzBasicScriptListBoxModule} from '../components/list-box/list-box.module';
import {BlitzBasicScriptMenuModule} from '../components/menu/menu.module';
import {BlitzBasicScriptPanelModule} from '../components/panel/panel.module';
import {BlitzBasicScriptProgressBarModule} from '../components/progress-bar/progress-bar.module';
import {LanguageService} from '../services/language/language.service';
import {Lexer} from '../services/lexer/lexer.service';
import {Parser} from '../services/parser/parser.service';
import {CommandsGraphics3dControls} from '../services/commands/graphics3d/controls';

@NgModule({
    declarations: [
        BlitzBasicScriptComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,

        BlitzBasicScriptButtonModule,
        BlitzBasicScriptCanvasModule,
        BlitzBasicScriptComboBoxModule,
        BlitzBasicScriptHtmlModule,
        BlitzBasicScriptListBoxModule,
        BlitzBasicScriptMenuModule,
        BlitzBasicScriptPanelModule,
        BlitzBasicScriptProgressBarModule

    ],
    exports: [
        BlitzBasicScriptComponent
    ],
    providers: [
        DebugEnvironment,

        GeneralService,
        LanguageService,
        Lexer,
        Parser,

        GameStateService,
        BabylonJSService,
        Graphics2dService,
        GuiService,

        CommandsBasicsDiverse,
        CommandsBasicsMaths,
        CommandsBasicsStrings,
        CommandsBasicsTimeRandom,

        CommandsGraphics2dDisplay,
        CommandsGraphics2dGraphics,
        CommandsGraphics2dImages,
        CommandsGraphics2dPixel,
        CommandsGraphics2dText,

        CommandsGraphics3dCamera,
        CommandsGraphics3dCoordinates,
        CommandsGraphics3dControls,
        CommandsGraphics3dLightShadow,
        CommandsGraphics3dMeshes,
        CommandsSoundMusicSamples
    ]
})

export class BlitzBasicScriptModule {
}
