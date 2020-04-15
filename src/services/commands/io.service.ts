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
  async flushJoy() {
    return this.gamepadService.flushJoy();
  }

  async getJoy() {
    return this.gamepadService.getJoy();
  }

  async joyDown() {
    return this.gamepadService.joyDown();
  }

  async joyHat() {
    return this.gamepadService.joyHat();
  }

  async joyHit() {
    return this.gamepadService.joyHit();
  }

  async joyPitch() {
    return this.gamepadService.joyPitch();
  }

  async joyRoll() {
    return this.gamepadService.joyRoll();
  }

  async joyType() {
    return this.gamepadService.joyType();
  }

  async joyU() {
    return this.gamepadService.joyU();
  }

  async joyUDir() {
    return this.gamepadService.joyUDir();
  }

  async joyV() {
    return this.gamepadService.joyV();
  }

  async joyVDir() {
    return this.gamepadService.joyVDir();
  }

  async joyWait() {
    return this.gamepadService.joyWait();
  }

  async joyX() {
    return this.gamepadService.joyX();
  }

  async joyXDir() {
    return this.gamepadService.joyXDir();
  }

  async joyY() {
    return this.gamepadService.joyY();
  }

  async joyYaw() {
    return this.gamepadService.joyYaw();
  }

  async joyYDir() {
    return this.gamepadService.joyYDir();
  }

  async joyZ() {
    return this.gamepadService.joyZ();
  }

  async joyZDir() {
    return this.gamepadService.joyZDir();
  }

  async waitJoy() {
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

  async getMouse() {
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

  async mouseWait() {
    return this.mouseService.mouseWait();
  }

  async mouseX() {
    return this.mouseService.mouseX();
  }

  async mouseXSpeed() {
    return this.mouseService.mouseXSpeed();
  }

  async mouseY() {
    return this.mouseService.mouseY();
  }

  async mouseYSpeed() {
    return this.mouseService.mouseYSpeed();
  }

  async mouseZ() {
    return this.mouseService.mouseZ();
  }

  async mouseZSpeed() {
    return this.mouseService.mouseZSpeed();
  }

  async moveMouse() {
    return this.mouseService.moveMouse();
  }

  async showPointer() {
    return this.mouseService.showPointer();
  }

  async waitMouse() {
    return this.mouseService.waitMouse();
  }
}
