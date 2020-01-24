# Conception
The parser takes an array of lexer tokens and checks whether there is a rule in the BBScript grammar
that satisfies the lexer input.

Each line of code of a BBScript program is represented as an array of lexer tokens. Thus, the whole code can
be represented as an array of many lexer token arrays (equivalent to the number of statements).

# States
The parser begins doing its job in the "default" state. Depending on the token arrays, the state can change
over time. A state change can occur at most once per token array.

## Default
The default state is the starting point for the parser. In this state, all general statements are allowed
as well as variable, array, function, type, or label declarations.

This is the full grammar of the default context:
* START          -> STATEMENT | CONST_DECL | VAR_DECL | ARRAY_DECL | FUNCTION_DECL | TYPE_DECL | LABEL_DECL
* STATEMENT      -> ASSIGN | COND | LOOP | FN_CALL | CMD_CALL | Delete id | End | Include STR_VAL | Stop | Data VALS | Restore id | Read DECLS
* COND           -> If BOOL_EXPR OPT_ASSIGN | If BOOL_EXPR Then OPT_ASSIGN
* LOOP           -> For ASSIGN To NUM_EXPR | For ASSIGN To NUM_EXPR Step NUM_EXPR | For id = Each id | While BOOL_EXPR | Repeat | MainLoop
* ASSIGNS        -> ASSIGN | ASSIGN, ASSIGNS | €
* OPT_ASSIGN     -> ASSIGN | €
* ASSIGN         -> id = EXPR | id = Before id | id = After id | id = First id | id = Last id | id = New id | id = Object.id(NUM_EXPR) | id = Handle(id)
* EXPR           -> BOOL_EXPR | NUM_EXPR | STR_EXPR | Null
* BOOL_EXPR      -> BOOL_VAL | Not BOOL_EXPR | BOOL_EXPR And BOOL_EXPR | BOOL_EXPR Or BOOL_EXPR | BOOL_EXPR Xor BOOL_EXPR
* BOOL_VAL       -> True | False
* NUM_EXPR       -> NUM_VAL | NUM_EXPR + NUM_EXPR | NUM_EXPR - NUM_EXPR | NUM_EXPR * NUM_EXPR | NUM_EXPR / NUM_EXPR | NUM_EXPR Mod NUM_EXPR | NUM_EXPR Sar NUM_EXPR | NUM_EXPR Shl NUM_EXPR | NUM_EXPR Shr NUM_EXPR
* NUM_VAL        -> ^(([0-9]*)|(([0-9]*)\.([0-9]*)))$ | Pi
* STR_EXPR       -> STR_VAL | STR_VAL + EXPR
* STR_VAL        -> "[.*]"
* FN_CALL        -> id(VALS)
* CONST_DECL     -> Const ASSIGNS
* VAR_DECL       -> Global DECL_OR_ASGN
* LOCAL_VAR_DECL -> Local DECL_OR_ASGN
* DECLS          -> id | id, DECLS
* DECL_OR_ASGN   -> id | id, DECL_OR_ASGN | ASSIGN | ASSIGN, DECL_OR_ASGN
* ARRAY_DECL     -> Dim id
* FUNCTION_DECL  -> Function id(ASSIGNS)
* TYPE_DECL      -> Type id
* LABEL_DECL     -> .id
* VALS           -> VAL | VAL, VALS
* VAL            -> BOOL_VAL | NUM_VAL | STR_VAL

## Condition
The parser enters the Condition context if the keyword "If" or "ElseIf" / "Else If" is matched.
EXCEPTION: If a statement follows directly to the If (Then) structure, the context is not changed.

The context is popped from the stack if either "EndIf" or "End If" is matched.

This is the start point of the condition context:
* START         -> STATEMENT | LOCAL_VAR_DECL | LABEL_DECL | Else If | ElseIf | Else | EndIf | End If  //TODO specify LOCAL_VAR_DECL

## Selection
The parser enters the Selection context if the keyword "Select" is matched.

This is the start point of the selection context:
* START         -> Case id | Default

## Selection Body
The parser enters the Selection Body context automatically after one of the key words "Case" or "Default" is matched.

This is the start point of the selection context:
* START         -> STATEMENT | LOCAL_VAR_DECL | LABEL_DECL | End | End Select

## For
The parser enters the For context if the keyword "For" is matched in combination with "To" or "Each".
The context is popped from the stack if the keyword "Next" is matched.

This is the start point of the for context:
* START         -> STATEMENT | LOCAL_VAR_DECL | LABEL_DECL | Exit | Next

## While
The parser enters the While context if the keyword "While" is matched.
The context is popped from the stack if the keyword "Wend" is matched.

This is the start point of the for context:
* START         -> STATEMENT | LOCAL_VAR_DECL | LABEL_DECL | Exit | Wend

## Repeat
The parser enters the Repeat context if the keyword "Repeat" is matched.
The context is popped from the stack if either "Until" or "Forever" is matched.

This is the start point of the for context:
* START         -> STATEMENT | LOCAL_VAR_DECL | LABEL_DECL | Exit | Until BOOL_EXPR | Forever

## Main Loop
The parser enters the Main Loop context if the keyword "MainLoop" is matched.
The context is popped from the stack if "End MainLoop" is matched.

This is the start point of the for context:
* START         -> STATEMENT | LOCAL_VAR_DECL | LABEL_DECL | End MainLoop

## Function Body
The parser enters the Function Body context if the keyword "Function" is matched.
The context is popped from the stack if "End Function" is matched.

This is the start point of the for context:
* START         -> STATEMENT | LOCAL_VAR_DECL | LABEL_DECL | RETURN | End Function
* RETURN        -> Return | Return EXPR | Return id

## Type Body
The parser enters the Type Body context if the keyword "Type" is matched.
The context is popped from the stack if "End Type" is matched.

This is the start point of the for context:
* START         -> Field id | End Type
