import {NgModule} from '@angular/core';
import {BlitzBasicScriptCanvasComponent} from './canvas.component';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
        BlitzBasicScriptCanvasComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        BlitzBasicScriptCanvasComponent
    ],
    providers: []
})

export class BlitzBasicScriptCanvasModule {
}
