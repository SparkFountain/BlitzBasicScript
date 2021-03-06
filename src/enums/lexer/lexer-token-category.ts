export enum LexerTokenCategory {
  CASE = 'Case',
  DEFAULT = 'Default',
  ELSE = 'Else',
  ELSEIF = 'ElseIf',
  ENDIF = 'EndIf',
  IF = 'If',
  SELECT = 'Select',
  THEN = 'Then',
  AFTER = 'After',
  BEFORE = 'Before',
  DELETE = 'Delete',
  FIRST = 'First',
  INSERT = 'Insert',
  LAST = 'Last',
  NEW = 'New',
  NULL = 'Null',
  OBJECT = 'Object',
  TYPE = 'Type',
  FIELD = 'Field',
  END = 'End',
  INCLUDE = 'Include',
  STOP = 'Stop',
  DATA = 'Data',
  DIM = 'Dim',
  GLOBAL = 'Global',
  LOCAL = 'Local',
  EACH = 'Each',
  CONST = 'Const',
  MAINLOOP = 'MainLoop',
  RETURN = 'Return',
  EXIT = 'Exit',
  FOR = 'For',
  FOREVER = 'Forever',
  NEXT = 'Next',
  REPEAT = 'Repeat',
  STEP = 'Step',
  TO = 'To',
  UNTIL = 'Until',
  WEND = 'Wend',
  WHILE = 'While',
  MOD = 'Mod',
  NOT = 'Not',
  AND = 'And',
  OR = 'Or',
  XOR = 'Xor',
  FUNCTION = 'Function',
  RESTORE = 'Restore',
  READ = 'Read',
  HANDLE = 'Handle',
  SAR = 'Sar',
  SHL = 'Shl',
  SHR = 'Shr',

  GOTO = 'GoTo',
  GOSUB = 'GoSub',

  INDIVIDUAL = 'INDIVIDUAL',
  VARIABLE = 'VARIABLE',
  KEYWORD = 'KEYWORD',
  COMMAND = 'COMMAND',
  COMMA = 'COMMA',
  DOUBLE_QUOTE = 'DOUBLE_QUOTE',
  COMMENT_MARKER = 'COMMENT_MARKER',
  COMMENT = 'COMMENT',
  COMPARISON = 'COMPARISON',
  ASSIGNMENT = 'ASSIGNMENT',
  BRACKET_OPEN = 'BRACKET_OPEN',
  BRACKET_CLOSE = 'BRACKET_CLOSE',
  LABEL_DOT = 'DOT',
  LABEL = 'LABEL',
  TYPE_FIELD_DOT = 'TYPE_FIELD_DOT',
  BACKSLASH = 'BACKSLASH',
  EMPTY = 'EMPTY',
  ALGEBRAIC = 'ALGEBRAIC',
  BITWISE_INVERT = 'BITWISE_INVERT',
  COLON = 'COLON',
  INTEGER = 'INTEGER',
  FLOAT = 'FLOAT',
  STRING = 'STRING',
  BOOLEAN = 'BOOLEAN',
  UNIDENTIFIED = 'UNIDENTIFIED',
  INVALID = 'INVALID'
}
