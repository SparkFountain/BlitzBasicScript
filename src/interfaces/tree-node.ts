import {ParserEntryPoint} from '../enums/parserEntryPoint';

export interface TreeNode {
  value: ParserEntryPoint;
  children: TreeNode[] | null;
}