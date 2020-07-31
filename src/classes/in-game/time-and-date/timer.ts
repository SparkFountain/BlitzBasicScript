export class BbScriptTimer {
  instance: NodeJS.Timeout;

  constructor(frequency: number) {
    this.instance = setInterval(() => {}, 1000 / frequency);
  }
}
