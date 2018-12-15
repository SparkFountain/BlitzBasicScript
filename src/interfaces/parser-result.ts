export interface ParserResult {
  js: string;
  errors: object[];
  warnings: object[];
  infos: object[];
  functions: {};
  types: {};
  mainloop: string;
}