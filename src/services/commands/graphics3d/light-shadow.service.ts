import {Injectable} from '@angular/core';
import {Observable, Subscriber} from 'rxjs';
import {BabylonJSService} from '../../babylon-js/babylon-js.service';
import {LightType} from '../../../enums/light/light-type';
import { Light } from 'babylonjs';

@Injectable()
export class CommandsGraphics3dLightShadowService {
    constructor(private babylonjs: BabylonJSService) {

    }

    ambientLight(red: number, green: number, blue: number): Observable<void> {
        return this.babylonjs.ambientLight(red, green, blue);
    }

    createLight(type?: LightType, parent?: any): Observable<any> {
        return new Observable((observer: Subscriber<any>) => {
            this.babylonjs.createLight(type).subscribe((light: any) => {
                if (parent) {
                    light.parent = parent;
                }

                observer.next(light);
                observer.complete();
            });
        });
    }

    lightColor(light: Light, red: number, green: number, blue: number): Observable<void> {
        return this.babylonjs.lightColor(light, red, green, blue);
    }

    lightConeAngles() {
    }

    lightMesh() {
    }

    lightRange(light: Light, range: number): Observable<void> {
        return this.babylonjs.lightRange(light, range);
    }

    createShadowMap() {
    }

    deleteShadowMap() {
    }

    castShadow() {
    }

    receiveShadows() {
    }

    shadowDarkness() {
    }
}
