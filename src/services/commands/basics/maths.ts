import {Observable} from 'rxjs';

export class CommandsBasicsMaths {
  constructor() {

  }

  // Global x = Abs(-42)

  abs(number: number): number {
    return Math.abs(number);
  }

  acos(number): number {
    return Math.acos(number);
  }

  asin(value): number {
    return Math.asin(value);
  }

  atan(value): number {
    return Math.atan(value);
  }

  atan2(y, x): number {
    return Math.atan2(y, x);
  }

  bin(value): string {
    return parseInt(value).toString(2);
  }

  ceil(value): number {
    return Math.ceil(value);
  }

  cos(value): number {
    return Math.cos(value);
  }

  exp(value): number {
    return Math.exp(value);
  }

  float(value): number {
    return parseFloat(value);
  }

  floor(value): number {
    return Math.floor(value);
  }

  hex(value): string {
    return parseInt(value).toString(16);
  }

  int(value): number {
    return parseInt(value);
  }

  log(value): number {
    return Math.log(value);
  }

  log10(value): number {
    return Math.log(value) / Math.LN10;
  }

  pi(): number {
    return Math.PI;
  }

  sar(number, bits): number {
    return number >> bits;
  }

  sgn(value): number {
    return Math.sign(value);
  }

  shl(number, bits): number {
    return number << bits;
  }

  shr(number, bits): number {
    return number >>> bits;
  }

  sin(value): number {
    return Math.sin(value);
  }

  sqr(value): number {
    return Math.sqrt(value);
  }

  tan(value): number {
    return Math.tan(value);
  }
}
