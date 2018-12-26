import {Injectable} from '@angular/core';

@Injectable()
export class GameStateService {
  private global: object;
  private dim: object;
  private function: object;
  private type: object;

  constructor() {
    this.global = {};
    this.dim  = {};
    this.function = {};
    this.type = {};
  }

  setGlobal(variableName: string, value: any): any {
    this.global[variableName] = value;
  }

  getGlobal(variableName: string): any {
    return this.global[variableName];
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
