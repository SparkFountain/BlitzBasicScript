import {Injectable} from '@angular/core';
import {Observable, Subscriber} from 'rxjs';

@Injectable()
export class CommandsGraphics3dCollisions {
    constructor() {

    }

    clearCollisions(): Observable<void> {
        return new Observable<void>((observer: Subscriber<void>) => {
            observer.next();
            observer.complete();
        });
    }

    collisionEntity(entity: any, index: number): any {
    }

    collisionNX(entity: any, index: number): number {
        return 0;
    }

    collisionNY(entity: any, index: number): number {
        return 0;
    }

    collisionNZ(entity: any, index: number): number {
        return 0;
    }

    collisions(sourceEntity: any, targetEntity: any, method: number, reaction: number): void {
    }

    collisionSurface(entity: any, index: number): any {
    }

    collisionTime(entity: any, index: number): number {
        return 0;
    }

    collisionTriangle() {
    }

    collisionX() {
    }

    collisionY() {
    }

    collisionZ() {
    }

    countCollisions() {
    }

    entityBox() {
    }

    entityCollided() {
    }

    entityRadius() {
    }

    entityType() {
    }

    getEntityType() {
    }

    meshesIntersect() {
    }

    resetEntity() {
    }
}
