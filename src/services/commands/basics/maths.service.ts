import { Injectable } from '@angular/core';

@Injectable()
export class CommandsBasicsMathsService {
  constructor() {}

  abs(number: number): Promise<number> {
    return Promise.resolve(Math.abs(number));
  }

  acos(number: number): Promise<number> {
    return Promise.resolve(Math.acos(number));
  }

  asin(value: number): Promise<number> {
    return Promise.resolve(Math.asin(value));
  }

  atan(value: number): Promise<number> {
    return Promise.resolve(Math.atan(value));
  }

  atan2(y: number, x: number): Promise<number> {
    return Promise.resolve(Math.atan2(y, x));
  }

  bin(value: number): Promise<string> {
    return Promise.resolve(value.toString(2));
  }

  ceil(value: number): Promise<number> {
    return Promise.resolve(Math.ceil(value));
  }

  cos(value: number): Promise<number> {
    return Promise.resolve(Math.cos(value));
  }

  exp(value: number): Promise<number> {
    return Promise.resolve(Math.exp(value));
  }

  float(value: string): Promise<number> {
    return Promise.resolve(parseFloat(value));
  }

  floor(value: number): Promise<number> {
    return Promise.resolve(Math.floor(value));
  }

  hex(value: string): Promise<string> {
    return Promise.resolve(parseInt(value).toString(16));
  }

  int(value: string): Promise<number> {
    return Promise.resolve(parseInt(value));
  }

  log(value: number): Promise<number> {
    return Promise.resolve(Math.log(value));
  }

  log10(value: number): Promise<number> {
    return Promise.resolve(Math.log(value) / Math.LN10);
  }

  pi(): Promise<number> {
    return Promise.resolve(Math.PI);
  }

  sar(number: number, bits: number): Promise<number> {
    return Promise.resolve(number >> bits);
  }

  sgn(value: number): Promise<number> {
    return Promise.resolve(Math.sign(value));
  }

  shl(number: number, bits: number): Promise<number> {
    return Promise.resolve(number << bits);
  }

  shr(number: number, bits: number): Promise<number> {
    return Promise.resolve(number >>> bits);
  }

  sin(value: number): Promise<number> {
    return Promise.resolve(Math.sin(value));
  }

  sqr(value: number): Promise<number> {
    return Promise.resolve(Math.sqrt(value));
  }

  tan(value: number): Promise<number> {
    return Promise.resolve(Math.tan(value));
  }
}
