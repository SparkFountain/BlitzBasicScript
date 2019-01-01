import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {assertNumber} from '@angular/core/src/render3/assert';

@Injectable()
export class GameStateService {
  private global: object;
  private dim: object;
  private function: object;
  private type: object;

  private screen: {
    width: number,
    height: number,
    origin: {
      x: number,
      y: number
    },
    color: {
      red: number,
      green: number,
      blue: number
    },
    clsColor: {
      red: number,
      green: number,
      blue: number
    }
  };

  private images: {
    autoMidHandle: boolean
  };

  constructor() {
    this.global = {};
    this.dim = {};
    this.function = {};
    this.type = {};

    this.screen = {
      width: 400,
      height: 300,
      origin: {
        x: 0,
        y: 0
      },
      color: {
        red: 1,
        green: 1,
        blue: 1
      },
      clsColor: {
        red: 0,
        green: 0,
        blue: 0
      }
    };

    this.images = {
      autoMidHandle: false
    };
  }

  public get(property: string): any {
    if (!this.hasOwnProperty(property)) {
      console.error('Game State has no property ' + property + ':', this);
      return null;
    } else {
      return this[property];
    }
  }

  public set(property: string, value: any): void {
    this[property] = value;
  }

  setGlobal(variableName: string, value: any): any {
    this.global[variableName] = value;
  }

  getGlobal(variableName: string): any {
    //console.info('Get Global ' + variableName + ':', this.global[variableName]);
    return this.global[variableName];
  }

  getGlobalAsync(variableName: string): Observable<any> {
    return of(this.global[variableName]);
  }

  setDim(dimName: string, value: any): any {
    this.dim[dimName] = value;
  }

  getDim(dimName: string): any {
    return this.dim[dimName];
  }

  setFunction(functionName: string, value: any): any {
    this.function[functionName] = value;
  }

  getFunction(functionName: string): any {
    return this.function[functionName];
  }
}
