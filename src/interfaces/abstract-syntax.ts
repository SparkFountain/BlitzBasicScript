import { CodeBlock } from './code/block';

export interface AbstractSyntax {
  globals: object;
  codeBlocks: CodeBlock[];
  mainLoop: any[];
  functions: any[];
  types: object;
  // TODO: data blocks
}
