import { Injectable } from '@angular/core';
import { CommandsIOGamepadService } from './io/gamepad.service';
import { CommandsIOKeyboardService } from './io/keyboard.service';
import { CommandsIOMouseService } from './io/mouse.service';

@Injectable()
export class CommandsIOService {
  constructor(
    private gamepadService: CommandsIOGamepadService,
    private keyboardService: CommandsIOKeyboardService,
    private mouseService: CommandsIOMouseService
  ) {}

  // GAMEPAD
  async flushJoy(): Promise<any> {
    return this.gamepadService.flushJoy();
  }

  async getJoy(): Promise<any> {
    return this.gamepadService.getJoy();
  }

  async joyDown(): Promise<any> {
    return this.gamepadService.joyDown();
  }

  async joyHat(): Promise<any> {
    return this.gamepadService.joyHat();
  }

  async joyHit(): Promise<any> {
    return this.gamepadService.joyHit();
  }

  async joyPitch(): Promise<any> {
    return this.gamepadService.joyPitch();
  }

  async joyRoll(): Promise<any> {
    return this.gamepadService.joyRoll();
  }

  async joyType(): Promise<any> {
    return this.gamepadService.joyType();
  }

  async joyU(): Promise<any> {
    return this.gamepadService.joyU();
  }

  async joyUDir(): Promise<any> {
    return this.gamepadService.joyUDir();
  }

  async joyV(): Promise<any> {
    return this.gamepadService.joyV();
  }

  async joyVDir(): Promise<any> {
    return this.gamepadService.joyVDir();
  }

  async joyWait(): Promise<any> {
    return this.gamepadService.joyWait();
  }

  async joyX(): Promise<any> {
    return this.gamepadService.joyX();
  }

  async joyXDir(): Promise<any> {
    return this.gamepadService.joyXDir();
  }

  async joyY(): Promise<any> {
    return this.gamepadService.joyY();
  }

  async joyYaw(): Promise<any> {
    return this.gamepadService.joyYaw();
  }

  async joyYDir(): Promise<any> {
    return this.gamepadService.joyYDir();
  }

  async joyZ(): Promise<any> {
    return this.gamepadService.joyZ();
  }

  async joyZDir(): Promise<any> {
    return this.gamepadService.joyZDir();
  }

  async waitJoy(): Promise<any> {
    return this.gamepadService.waitJoy();
  }

  // KEYBOARD
  async flushKeys(): Promise<void> {
    return this.keyboardService.flushKeys();
  }

  async getKey(): Promise<number> {
    return this.keyboardService.getKey();
  }

  async input(message?: string): Promise<string> {
    return this.keyboardService.input(message);
  }

  async keyDown(code: number): Promise<boolean> {
    return this.keyboardService.keyDown(code);
  }

  async keyHit(code: number): Promise<number> {
    return this.keyboardService.keyHit(code);
  }

  async keyWait(): Promise<number> {
    return this.keyboardService.keyWait();
  }

  async waitKey(): Promise<number> {
    return this.keyboardService.waitKey();
  }

  // MOUSE
  async flushMouse(): Promise<void> {
    return this.mouseService.flushMouse();
  }

  async getMouse(): Promise<any> {
    return this.mouseService.getMouse();
  }

  async hidePointer(): Promise<void> {
    return this.mouseService.hidePointer();
  }

  async mouseDown(code: number): Promise<boolean> {
    return this.mouseService.mouseDown(code);
  }

  async mouseHit(code: number): Promise<number> {
    return this.mouseService.mouseHit(code);
  }

  async mouseWait(): Promise<any> {
    return this.mouseService.mouseWait();
  }

  async mouseX(): Promise<any> {
    return this.mouseService.mouseX();
  }

  async mouseXSpeed(): Promise<any> {
    return this.mouseService.mouseXSpeed();
  }

  async mouseY(): Promise<any> {
    return this.mouseService.mouseY();
  }

  async mouseYSpeed(): Promise<any> {
    return this.mouseService.mouseYSpeed();
  }

  async mouseZ(): Promise<any> {
    return this.mouseService.mouseZ();
  }

  async mouseZSpeed(): Promise<any> {
    return this.mouseService.mouseZSpeed();
  }

  async moveMouse(): Promise<any> {
    return this.mouseService.moveMouse();
  }

  async showPointer(): Promise<any> {
    return this.mouseService.showPointer();
  }

  async waitMouse(): Promise<any> {
    return this.mouseService.waitMouse();
  }
}
