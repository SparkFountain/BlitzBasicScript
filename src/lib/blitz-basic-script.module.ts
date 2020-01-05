import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BlitzBasicScriptComponent} from './blitz-basic-script.component';
import {CommandsBasicsDiverse} from '../services/commands/basics/diverse.service';
import {CommandsBasicsMathsService} from '../services/commands/basics/maths.service';
import {CommandsBasicsStrings} from '../services/commands/basics/strings.service';
import {CommandsBasicsTimeRandom} from '../services/commands/basics/time-random.service';
import {GeneralService} from '../services/general/general.service';
import {GameStateService} from '../services/game-state/game-state.service';
import {BabylonJSService} from '../services/babylon-js/babylon-js.service';
import {CommandsGraphics2dDisplay} from '../services/commands/graphics2d/display.service';
import {CommandsGraphics2dGraphics} from '../services/commands/graphics2d/graphics.service';
import {CommandsGraphics3dCamera} from '../services/commands/graphics3d/camera.service';
import {CommandsGraphics3dMeshes} from '../services/commands/graphics3d/meshes.service';
import {CommandsGraphics3dCoordinates} from '../services/commands/graphics3d/coordinates.service';
import {Graphics2dService} from '../services/2d/graphics2d.service';
import {GuiService} from '../services/gui/gui.service';
import {CommonModule} from '@angular/common';
import {CommandsGraphics2dPixel} from '../services/commands/graphics2d/pixel.service';
import {CommandsGraphics2dImages} from '../services/commands/graphics2d/images.service';
import {DebugEnvironment} from '../services/environment/debug.environment';
import {CommandsGraphics3dLightShadow} from '../services/commands/graphics3d/light-shadow.service';
import {CommandsSoundMusicSamples} from '../services/commands/sound/music-samples.service';
import {CommandsGraphics2dText} from '../services/commands/graphics2d/text.service';
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
import {CommandsGraphics3dControls} from '../services/commands/graphics3d/controls.service';
import {CommandsDataBankService} from '../services/commands/data/bank.service';
import {CommandsGraphics2dMovies} from '../services/commands/graphics2d/movies.service';
import {CommandsGraphics3dAnimations} from '../services/commands/graphics3d/animations.service';
import {CommandsGraphics3dBrushes} from '../services/commands/graphics3d/brushes.service';
import {CommandsGraphics3dCollisions} from '../services/commands/graphics3d/collisions.service';
import {CommandsGraphics3dDiverse} from '../services/commands/graphics3d/diverse.service';
import {CommandsGraphics3dPicking} from '../services/commands/graphics3d/picking.service';
import {CommandsGraphics3dScene} from '../services/commands/graphics3d/scene.service';
import {CommandsGraphics3dScenery} from '../services/commands/graphics3d/scenery.service';
import {CommandsGraphics3dScreen} from '../services/commands/graphics3d/screen.service';
import {CommandsGraphics3dSprites} from '../services/commands/graphics3d/sprites.service';
import {CommandsGraphics3dStatus} from '../services/commands/graphics3d/status.service';
import {CommandsGuiProgressBar} from '../services/commands/gui/progress-bar.service';
import {CommandsGuiRequest} from '../services/commands/gui/request.service';
import {CommandsGuiSlider} from '../services/commands/gui/slider.service';
import {CommandsGuiTextArea} from '../services/commands/gui/text-area.service';
import {CommandsGuiTextField} from '../services/commands/gui/text-field.service';
import {CommandsGuiToolbar} from '../services/commands/gui/toolbar.service';
import {CommandsGuiTreeView} from '../services/commands/gui/tree-view.service';
import {CommandsGuiWindow} from '../services/commands/gui/window.service';
import {CommandsIOGamepad} from '../services/commands/io/gamepad.service';
import {CommandsIOKeyboard} from '../services/commands/io/keyboard.service';
import {CommandsIOMouse} from '../services/commands/io/mouse.service';
import {CommandsSound3D} from '../services/commands/sound/3d.service';
import {CommandsSoundChannels} from '../services/commands/sound/channels.service';
import { CommandsDataFileSystemService } from '../services/commands/data/file-system.service';
import { CommandsGraphics3dSurfaces } from '../services/commands/graphics3d/surfaces.service';
import { CommandsGraphics3dTerrain } from '../services/commands/graphics3d/terrain.service';
import { CommandsGraphics3dTextures } from '../services/commands/graphics3d/textures.service';
import { CommandsGuiButton } from '../services/commands/gui/button.service';
import { CommandsGuiCanvas } from '../services/commands/gui/canvas.service';
import { CommandsGuiDesktop } from '../services/commands/gui/desktop.service';
import { CommandsGuiDiverse } from '../services/commands/gui/diverse.service';
import { CommandsGuiEvent } from '../services/commands/gui/event.service';
import { CommandsGuiGadget } from '../services/commands/gui/gadget.service';
import { CommandsGuiHTML } from '../services/commands/gui/html.service';
import { CommandsGuiIconStrip } from '../services/commands/gui/icon-strip.service';
import { CommandsGuiListTabber } from '../services/commands/gui/list-tabber.service';
import { CommandsGuiMenu } from '../services/commands/gui/menu.service';
import { CommandsGuiPanel } from '../services/commands/gui/panel.service';

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

        // BASICS
        CommandsBasicsDiverse,
        CommandsBasicsMathsService,
        CommandsBasicsStrings,
        CommandsBasicsTimeRandom,

        // DATA
        CommandsDataBankService,
        CommandsDataFileSystemService,

        // GRAPHICS 2D
        CommandsGraphics2dDisplay,
        CommandsGraphics2dGraphics,
        CommandsGraphics2dImages,
        CommandsGraphics2dMovies,
        CommandsGraphics2dPixel,
        CommandsGraphics2dText,

        // GRAPHICS 3D
        CommandsGraphics3dAnimations,
        CommandsGraphics3dBrushes,
        CommandsGraphics3dCamera,
        CommandsGraphics3dCollisions,
        CommandsGraphics3dControls,
        CommandsGraphics3dCoordinates,
        CommandsGraphics3dDiverse,
        CommandsGraphics3dLightShadow,
        CommandsGraphics3dMeshes,
        CommandsGraphics3dPicking,
        CommandsGraphics3dScene,
        CommandsGraphics3dScenery,
        CommandsGraphics3dScreen,
        CommandsGraphics3dSprites,
        CommandsGraphics3dStatus,
        CommandsGraphics3dSurfaces,
        CommandsGraphics3dTerrain,
        CommandsGraphics3dTextures,

        // GUI
        CommandsGuiButton,
        CommandsGuiCanvas,
        CommandsGuiDesktop,
        CommandsGuiDiverse,
        CommandsGuiEvent,
        CommandsGuiGadget,
        CommandsGuiHTML,
        CommandsGuiIconStrip,
        CommandsGuiListTabber,
        CommandsGuiMenu,
        CommandsGuiPanel,
        CommandsGuiProgressBar,
        CommandsGuiRequest,
        CommandsGuiSlider,
        CommandsGuiTextArea,
        CommandsGuiTextField,
        CommandsGuiToolbar,
        CommandsGuiTreeView,
        CommandsGuiWindow,

        // IO
        CommandsIOGamepad,
        CommandsIOKeyboard,
        CommandsIOMouse,

        // SOUND
        CommandsSound3D,
        CommandsSoundChannels,
        CommandsSoundMusicSamples
    ]
})

export class BlitzBasicScriptModule {
}
