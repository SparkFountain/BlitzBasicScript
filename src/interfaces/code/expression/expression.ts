import { BbsNumericType } from '../types/numeric'
import { BbsStringType } from '../types/string'
import { BbsBooleanType } from '../types/boolean';

export type BbsExpression = BbsNumericType | BbsNumericExpression | BbsStringType | BbsStringExpression | BbsBooleanType | BbsBooleanExpression;
