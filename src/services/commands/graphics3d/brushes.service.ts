import {Injectable} from '@angular/core';

@Injectable()
export class CommandsGraphics3dBrushesService {
    constructor() {

    }

    brushAlpha(brush: any, alpha: number): void {
    }

    brushBlend(brush: any, mode: number): void {
    }

    brushColor(brush: any, red: number, green: number, blue: number): void {
    }

    brushFx(brush: any, effects: number): void {
    }

    brushShininess(brush: any, shininess: number): void {
    }

    brushTexture(brush: any, texture: any, frame: number, index: number): void {
    }

    createBrush(red?: number, green?: number, blue?: number): any {
        //a brush is an invisible object with texture / color information
        //which can be applied to any entity / vertex / surface
    }

    freeBrush(brush: any): void {
        brush.dispose();
    }

    getBrushTexture(brush: any, index: number): any {
    }

    getEntityBrush(entity: any): any {
    }

    getSurfaceBrush(surface: any): any {
    }

    loadBrush(filePath: string, modes?: number, scaleU?: number, scaleV?: number) {
    }

    paintEntity(entity: any, brush: any): void {
    }

    paintMesh(mesh: any, brush: any): void {
    }

    paintSurface(surface: any, brush: any): void {
    }
}
