import { Injectable } from '@angular/core';

@Injectable()
export class CommandsBasicsMathsService {
  constructor() {}

  async abs(number: number): Promise<number> {
    return Math.abs(number);
  }

  async acos(number: number): Promise<number> {
    return Math.acos(number);
  }

  async asin(value: number): Promise<number> {
    return Math.asin(value);
  }

  async atan(value: number): Promise<number> {
    return Math.atan(value);
  }

  async atan2(y: number, x: number): Promise<number> {
    return Math.atan2(y, x);
  }

  async bin(value: number): Promise<string> {
    return value.toString(2);
  }

  async ceil(value: number): Promise<number> {
    return Math.ceil(value);
  }

  async cos(value: number): Promise<number> {
    return Math.cos(value);
  }

  async exp(value: number): Promise<number> {
    return Math.exp(value);
  }

  async float(value: string): Promise<number> {
    return parseFloat(value);
  }

  async floor(value: number): Promise<number> {
    return Math.floor(value);
  }

  async hex(value: string): Promise<string> {
    return parseInt(value).toString(16);
  }

  async int(value: string): Promise<number> {
    return parseInt(value);
  }

  async log(value: number): Promise<number> {
    return Math.log(value);
  }

  async log10(value: number): Promise<number> {
    return Math.log(value) / Math.LN10;
  }

  async pi(): Promise<number> {
    return Math.PI;
  }

  async sar(number: number, bits: number): Promise<number> {
    return number >> bits;
  }

  async sgn(value: number): Promise<number> {
    return Math.sign(value);
  }

  async shl(number: number, bits: number): Promise<number> {
    return number << bits;
  }

  async shr(number: number, bits: number): Promise<number> {
    return number >>> bits;
  }

  async sin(value: number): Promise<number> {
    return Math.sin(value);
  }

  async sqr(value: number): Promise<number> {
    return Math.sqrt(value);
  }

  async tan(value: number): Promise<number> {
    return Math.tan(value);
  }
}
