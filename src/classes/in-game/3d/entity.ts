export class BbScriptEntity {
  name: string;
  class: any;
  parent: BbScriptEntity;
  instance: any;

  constructor(name: string, className: any, parent: BbScriptEntity, instance: any) {
    this.name = name;
    this.class = className;
    this.parent = parent;
    this.instance = instance;
  }
}
