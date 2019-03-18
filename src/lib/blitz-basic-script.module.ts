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
import {CommandsDataBank} from '../services/commands/data/bank';
import {CommandsDataFileSystem} from '../services/commands/data/file-system';
import {CommandsGraphics2dMovies} from '../services/commands/graphics2d/movies';
import {CommandsGraphics3dAnimations} from '../services/commands/graphics3d/animations';
import {CommandsGraphics3dBrushes} from '../services/commands/graphics3d/brushes';
import {CommandsGraphics3dCollisions} from '../services/commands/graphics3d/collisions';
import {CommandsGraphics3dDiverse} from '../services/commands/graphics3d/diverse';
import {CommandsGraphics3dPicking} from '../services/commands/graphics3d/picking';
import {CommandsGraphics3dScene} from '../services/commands/graphics3d/scene';
import {CommandsGraphics3dScenery} from '../services/commands/graphics3d/scenery';
import {CommandsGraphics3dScreen} from '../services/commands/graphics3d/screen';
import {CommandsGraphics3dSprites} from '../services/commands/graphics3d/sprites';
import {CommandsGraphics3dStatus} from '../services/commands/graphics3d/status';
import {CommandsGraphics3dSurfaces} from '../services/commands/graphics3d/surfaces';
import {CommandsGraphics3dTerrain} from '../services/commands/graphics3d/terrain';
import {CommandsGraphics3dTextures} from '../services/commands/graphics3d/textures';
import {CommandsGuiButton} from '../services/commands/gui/button';
import {CommandsGuiCanvas} from '../services/commands/gui/canvas';
import {CommandsGuiDesktop} from '../services/commands/gui/desktop';
import {CommandsGuiDiverse} from '../services/commands/gui/diverse';
import {CommandsGuiEvent} from '../services/commands/gui/event';
import {CommandsGuiGadget} from '../services/commands/gui/gadget';
import {CommandsGuiHTML} from '../services/commands/gui/html';
import {CommandsGuiIconStrip} from '../services/commands/gui/icon-strip';
import {CommandsGuiListTabber} from '../services/commands/gui/list-tabber';
import {CommandsGuiMenu} from '../services/commands/gui/menu';
import {CommandsGuiPanel} from '../services/commands/gui/panel';
import {CommandsGuiProgressBar} from '../services/commands/gui/progress-bar';
import {CommandsGuiRequest} from '../services/commands/gui/request';
import {CommandsGuiSlider} from '../services/commands/gui/slider';
import {CommandsGuiTextArea} from '../services/commands/gui/text-area';
import {CommandsGuiTextField} from '../services/commands/gui/text-field';
import {CommandsGuiToolbar} from '../services/commands/gui/toolbar';
import {CommandsGuiTreeView} from '../services/commands/gui/tree-view';
import {CommandsGuiWindow} from '../services/commands/gui/window';
import {CommandsIOGamepad} from '../services/commands/io/gamepad';
import {CommandsIOKeyboard} from '../services/commands/io/keyboard';
import {CommandsIOMouse} from '../services/commands/io/mouse';
import {CommandsSound3D} from '../services/commands/sound/3d';
import {CommandsSoundChannels} from '../services/commands/sound/channels';

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
        CommandsBasicsMaths,
        CommandsBasicsStrings,
        CommandsBasicsTimeRandom,

        // DATA
        CommandsDataBank,
        CommandsDataFileSystem,

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
