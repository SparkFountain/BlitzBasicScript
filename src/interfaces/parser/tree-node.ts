import {ParserEntryPoint} from '../../enums/parser/parserEntryPoint';

export interface TreeNode {
    value: ParserEntryPoint;
    children: TreeNode[] | null;
}
