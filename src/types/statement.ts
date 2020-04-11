import { CommandStatement } from '../classes/command';
import { ConstStatement } from '../interfaces/code/statements/const';
import { ExpressionStatement } from '../interfaces/code/statements/expression';

export type Statement = CommandStatement | ConstStatement | ExpressionStatement;
