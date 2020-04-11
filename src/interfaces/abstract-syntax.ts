export interface AbstractSyntax {
  globals: object;
  statements: any[];
  mainLoop: any[];
  functions: any[];
  types: object;
  // TODO: data blocks
}
