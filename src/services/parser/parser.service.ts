//TODO refactor package access structure (like BBScript.game.xyz)
import {ParserResult} from '../../interfaces/parser-result';
import {LexerToken} from '../../interfaces/lexer-token';
import {ParserStackElement} from '../../enums/parserStackElement';
import {LexerTokenCategory} from '../../enums/lexerTokenCategory';
import {ParserEntryPoint} from '../../enums/parserEntryPoint';
import {Injectable} from '@angular/core';
import {AbstractSyntaxTree} from '../../interfaces/abstract-syntax-tree';

@Injectable({
  providedIn: 'root'
})
export class Parser {
  static MESSAGE = {
    'ERROR': {
      'DEPRECATED_KEYWORD': {
        EN: 'Deprecated key word',
        DE: 'Veraltetes Schlüsselwort'
      },
      'DEPRECATED_COMMAND': {
        EN: 'Deprecated command',
        DE: 'Veralteter Befehl'
      },
      'INVALID_TOKEN': {
        EN: 'Invalid token',
        DE: 'Ungültiges Token'
      },
      'INVALID_START_TOKEN': {
        EN: 'Invalid start token',
        DE: 'Ungültiges Anfangstoken'
      },
      'ILLEGAL_CONTEXT': {
        EN: 'Illegal token context',
        DE: 'Ungültiger Kontext für dieses Token'
      },
      'VAR_NAME_EXPECTED': {
        EN: 'Expecting a variable name',
        DE: 'Variablenname erwartet'
      },
      'TOO_MANY_PARAMETERS': {
        EN: 'Too many parameters',
        DE: 'Zu viele Parameter angegeben'
      },
      'NOT_ENOUGH_PARAMETERS': {
        EN: 'Not enough parameters',
        DE: 'Zu wenige Parameter angegeben'
      },
      'COMMA_MUST_BE_FOLLOWED_BY_EXPRESSION': {
        EN: 'Comma must be followed by another expression',
        DE: 'Nach dem Komma muss eine weitere Anweisung folgen'
      },
      'MISSING_OPENING_BRACKET': {
        EN: 'Missing opening bracket',
        DE: 'Öffnende Klammer fehlt'
      },
      'NO_MORE_TOKENS_ALLOWED': {
        EN: 'No more tokens allowed after last key word',
        DE: 'Keine weiteren Tokens nach dem letzten Schlüsselwort erlaubt'
      },
      'NO_CONDITION_BLOCK_OPENED': {
        EN: 'No condition block opened',
        DE: 'Kein Bedingungsblock definiert'
      },
      'DUPLICATE_DECLARATION': {
        EN: 'Duplicate Declaration (prohibited)',
        DE: 'Mehrfache Deklaration (verboten)'
      },
      TODO: {
        EN: 'This error message is not implemented yet.',
        DE: 'Diese Fehlermeldung wurde noch nicht implementiert.'
      }
    },
    'INFO': {},
    'WARNING': {}
  };

  static ASSIGNMENT = '';  //TODO remove because not needed?
  individuals: object;
  stack: ParserStackElement[];
  result: ParserResult;
  state;  //TODO remove because not needed?

  constructor() {
    this.resetParser();
  }

  /**
   * Resets (or initializes) the parser object, as well as helper variables.
   */
  resetParser(): void {
    //stores individual values
    this.individuals = {};
    //stores code sections (e. g. conditions, selections, loops)
    this.stack = [];
    //the result of a parser run
    this.result = {
      js: '',
      errors: [],
      warnings: [],
      infos: [],
      functions: {},
      types: {},
      mainloop: ''
    };
    this.state = '?';
  }

  //TODO refactor or remove
  exists(individual: object): boolean {
    return false;
    //return individuals.hasOwnProperty(individual);
  }

  /**
   * Retrieves all global variables, constants, dim-arrays, function and type names
   * from a given lexer code.
   * @param lexerCode An array of lexer token arrays, preprocessed by the lexer
   */
  getIndividuals(lexerCode: Array<LexerToken[]>): any {
    let result = {
      global: [],
      const: [],
      dim: [],
      fn: [],
      type: []
    };

    lexerCode.forEach((lexerTokens: LexerToken[]) => {
      for (let i = 0; i < lexerTokens.length; i++) {
        if (lexerTokens[i].which === LexerTokenCategory.INDIVIDUAL) {
          if (i > 0 && lexerTokens[i - 1].which === LexerTokenCategory.KEYWORD) {
            //console.info('Previous token is a key word:', lexerTokens[i-1]);
            let keywordValue = lexerTokens[i - 1].value.toLowerCase();
            switch (keywordValue) {
              case 'global':
                if (result.global.indexOf(keywordValue) === -1) {
                  result.global.push(lexerTokens[i].value);
                }
                break;
              case 'const':
                if (result.const.indexOf(keywordValue) === -1) {
                  result.const.push(lexerTokens[i].value);
                }
                break;
              case 'dim':
                if (result.dim.indexOf(keywordValue) === -1) {
                  result.dim.push(lexerTokens[i].value);
                }
                break;
              case 'function':
                if (result.fn.indexOf(keywordValue) === -1) {
                  result.fn.push(lexerTokens[i].value);
                }
                break;
              case 'type':
                if (result.type.indexOf(keywordValue) === -1) {
                  result.type.push(lexerTokens[i].value);
                }
                break;
            }
          }
        }
      }
    });

    return result;
  }

  /**
   * Retrieves all local variables from a given lexer code.
   * If a function name is passed, only local variables of this function will be retrieved.
   * Otherwise, all local variables of all code functions will be retrieved.
   * @param lexerCode
   * @param fn
   */
  getLocals(lexerCode: Array<LexerToken[]>, fn?: string): any {
    if (fn) {

    }
  }

  /** RULES **/
  // [Num]: int | float | Pi
  // [Str]: string
  // [Bool]: True | False
  // [Expr]: [NumExpr] | [StrExpr] | [BoolExpr]
  // [NumExpr]: [Num] + [Num] | [Num] - [Num] | [Num] * [Num] | [Num] / [Num] | [Num] ^ [Num]
  // [StrExpr]: [Str] | [Str] + [Str] | [Str] + [Num] | [Str] + [Bool]
  // [BoolExpr]: [Bool] | [And] | [Or] | [Xor] | [Not]
  // [Ind]: $individual
  // [Ind+]: [Ind] | [Ind], [Ind+]
  // [Assign]: [Ind] = [Expr]
  // [Param]: [Ind] | [Assign]
  // Global [Ind]+
  // Local [Ind]+
  // Case [Ind]+ | Case [Expr]+
  // Default
  // Else | Else If [Cond] | Else If [Cond] Then
  // ElseIf [Cond] | ElseIf [Cond] Then
  // EndIf
  // If [Cond] | If [Cond] Then
  // Select [Ind]
  // [After]: After [ObjIndex]? [Ind]
  // [Before]: Before [ObjIndex]? [Ind]
  // Delete [Ind]
  // [First]: First [Ind]
  // [Last]: Last [Ind]
  // Insert [Ind] [Before | After]? [Ind]
  // [New]: New [Ind]
  // Null
  // TODO Object.[Type]
  // Type [Ind]
  // Field [Ind]
  // End | End Type | End Function | End If | End Select
  // Include [StrExpr]
  // Stop
  // Data [Expr]+
  // Dim [Ind]+
  // For [Assign] To [NumExpr] [Step [NumExpr]]? | For [Ind] = Each [Ind]
  // Const [Ind]+
  // MainLoop
  // Return [Expr]?
  // Exit
  // Forever
  // Next
  // Repeat
  // Until [Cond]
  // Wend
  // While [Cond]
  // [Mod]: [NumExpr] Mod [NumExpr]
  // [Not]: Not [BoolExpr]
  // [And]: [BoolExpr] And [BoolExpr]
  // [Or]: [BoolExpr] Or [BoolExpr]
  // [Xor]: [BoolExpr] Xor [BoolExpr]
  // Function [Ind] ([Param]*)
  // [Label]: .[Ind]
  // Restore [Label]
  // Read [Ind]+
  // [Ind] = Handle [Ind]
  // [Sar]: [NumExpr] Sar [NumExpr]
  // [Sar]: [NumExpr] Shl [NumExpr]
  // [Sar]: [NumExpr] Shr [NumExpr]


  getAbstractSyntaxTree(lexerCode: Array<LexerToken[]>): AbstractSyntaxTree {
    let globalEntryPoint = '';

    lexerCode.forEach((lexerTokens: LexerToken[]) => {
      /* STEP 1: get entry point for the generation of a tree branch */
      let entryPoint: ParserEntryPoint = null;

      //investigate first token to get an entry point
      switch (lexerTokens[0].which) {
        case LexerTokenCategory.KEYWORD:
          switch (lexerTokens[0].value.toLowerCase()) {
            case 'global':
            case 'local':
            case 'const':
            case 'dim':
              entryPoint = ParserEntryPoint.DECLARATION;
              break;
            case 'for':
            case 'while':
            case 'repeat':
              entryPoint = ParserEntryPoint.LOOP_HEAD;
              break;
            case 'exit':
              entryPoint = ParserEntryPoint.LOOP_BREAK;
              break;
            case 'next':
            case 'wend':
            case 'until':
            case 'forever':
              entryPoint = ParserEntryPoint.LOOP_END;
              break;
            case 'if':
            case 'elseif':
            case 'else':
              entryPoint = ParserEntryPoint.CONDITION_HEAD;
              break;
            case 'endif':
              entryPoint = ParserEntryPoint.CONDITION_END;
              break;
            case 'select':
              entryPoint = ParserEntryPoint.SELECTION_HEAD;
              break;
            case 'case':
            case 'default':
              entryPoint = ParserEntryPoint.SELECTION_BODY;
              break;
            case 'function':
              entryPoint = ParserEntryPoint.FUNCTION_HEAD;
              break;
            case 'return':
              entryPoint = ParserEntryPoint.FUNCTION_RETURN;
              break;
            case 'type':
              entryPoint = ParserEntryPoint.TYPE_HEAD;
              break;
            case 'field':
              entryPoint = ParserEntryPoint.TYPE_BODY;
              break;
            case 'delete':
              entryPoint = ParserEntryPoint.OBJECT_DELETION;
              break;
            case 'insert':
              entryPoint = ParserEntryPoint.OBJECT_INSERTION;
              break;
            case 'include':
              entryPoint = ParserEntryPoint.INCLUDE;
              break;
            case 'stop':
              entryPoint = ParserEntryPoint.DEBUG_STOP;
              break;
            case 'data':
              entryPoint = ParserEntryPoint.DATA_DEFINITION;
              break;
            case 'restore':
              entryPoint = ParserEntryPoint.RESTORE_DATA;
              break;
            case 'read':
              entryPoint = ParserEntryPoint.READ_DATA;
              break;
            case 'mainloop':
              entryPoint = ParserEntryPoint.MAIN_LOOP_HEAD;
              break;

            case 'end':
              if (lexerTokens.length > 1) {
                switch (lexerTokens[1].which) {
                  case LexerTokenCategory.KEYWORD:
                    switch (lexerTokens[1].value.toLowerCase()) {
                      case 'function':
                        entryPoint = ParserEntryPoint.FUNCTION_END;
                        break;
                      case 'type':
                        entryPoint = ParserEntryPoint.TYPE_END;
                        break;
                      case 'if':
                        entryPoint = ParserEntryPoint.CONDITION_END;
                        break;
                      case 'select':
                        entryPoint = ParserEntryPoint.SELECTION_END;
                        break;
                      case 'mainloop':
                        entryPoint = ParserEntryPoint.MAIN_LOOP_END;
                    }
                    break;
                  default:
                  //TODO error: end must be followed by another keyword
                }
              } else {
                entryPoint = ParserEntryPoint.QUIT_PROGRAM;
              }
          }
          break;
        case LexerTokenCategory.COMMAND:
          entryPoint = ParserEntryPoint.COMMAND_CALL;
          break;
        case LexerTokenCategory.LABEL_DOT:
          entryPoint = ParserEntryPoint.LABEL;
          break;
        case LexerTokenCategory.INDIVIDUAL:
          let hasAssignment = false;
          lexerTokens.forEach((token) => {
            if (token.which === LexerTokenCategory.ASSIGNMENT) {
              hasAssignment = true;
            }
          });

          if (hasAssignment) {
            entryPoint = ParserEntryPoint.ASSIGNMENT;
          } else {
            entryPoint = ParserEntryPoint.FUNCTION_CALL;
          }
          break;
        default:
        //TODO error, invalid first token
      }

      /* STEP 2: generate the actual tree branch */
      switch (entryPoint) {
        case ParserEntryPoint.DECLARATION:
          //DECL: {scope, name, value}
          break;
        case ParserEntryPoint.ASSIGNMENT:
          break;
        case ParserEntryPoint.COMMAND_CALL:
          break;
        case ParserEntryPoint.LABEL:

          break;
        case ParserEntryPoint.LOOP_HEAD:
          break;
        case ParserEntryPoint.LOOP_BREAK:
          break;
        case ParserEntryPoint.LOOP_END:
          break;
        case ParserEntryPoint.CONDITION_HEAD:
          break;
        case ParserEntryPoint.CONDITION_END:
          break;
        case ParserEntryPoint.SELECTION_HEAD:
          break;
        case ParserEntryPoint.SELECTION_BODY:
          break;
        case ParserEntryPoint.SELECTION_END:
          break;
        case ParserEntryPoint.FUNCTION_HEAD:
          break;
        case ParserEntryPoint.FUNCTION_RETURN:
          break;
        case ParserEntryPoint.FUNCTION_END:
          break;
        case ParserEntryPoint.FUNCTION_CALL:
          break;
        case ParserEntryPoint.TYPE_HEAD:
          break;
        case ParserEntryPoint.TYPE_BODY:
          break;
        case ParserEntryPoint.TYPE_END:
          break;
        case ParserEntryPoint.OBJECT_DELETION:
          break;
        case ParserEntryPoint.OBJECT_INSERTION:
          break;
        case ParserEntryPoint.INCLUDE:
          break;
        case ParserEntryPoint.DEBUG_STOP:
          break;
        case ParserEntryPoint.DATA_DEFINITION:
          break;
        case ParserEntryPoint.RESTORE_DATA:
          break;
        case ParserEntryPoint.READ_DATA:
          break;
        case ParserEntryPoint.MAIN_LOOP_HEAD:
          break;
        case ParserEntryPoint.MAIN_LOOP_END:
          break;
        case ParserEntryPoint.QUIT_PROGRAM:
          break;
      }

      globalEntryPoint = entryPoint.toString();

      /*
       * Entry points:
       * // -declaration: Global | Local | Const | Dim
       *    -> can be combined with assignment
       * // -assignment: foo = 42
       * // -label: .label
       * // -command call: Graphics 640,480
       * // -function call: PrintText("Hello World")
       * // -loop begin: For | While | Repeat
       * // -loop break: Exit
       * // -loop end: Next | Wend | Until | Forever
       * // -condition: If x=y [Then] | ElseIf | Else If
       * // -condition end: EndIf | End If
       * // -selection head: Select variable
       * // -selection body: Case | Default
       * // -selection end: End Selection
       * // -function definition: Function foo(a, b, c)
       * // -function return: Return [...]
       * // -function end: End Function
       * // -type definition: Type Alien
       * // -type body: Field x, y, z
       * // -type end: End Type
       * // -object deletion: Delete alien
       * // -object insertion: Insert ...
       * // -script inclusion: Include script.bbs
       * // -debug stop: Stop
       * // -data definition: Data ...
       * // -restore data: Restore
       * // -read data: Read
       * // -main loop: MainLoop
       * // -main loop end: End MainLoop
       * // -quit program: end
       */
    });

    return null; //globalEntryPoint;
  }

  /**
   * @description
   * Gets an array of lexer code lines and parses them line by line.
   * Each code line consists of an array of lexer tokens which will be investigated sequentially.
   * @param lexerCode An array of arrays, containing lexed code lines
   * @return An object consisting of generated JavaScript code,
   * as well as parser messages
   */
  parse(lexerCode: Array<LexerToken[]>): ParserResult {
    /*//console.info('parsing lexer code:',lexerCode);

    this.resetParser();
    let parserContext: ParserContext = ParserContext.DEFAULT;
    let scope = {
        function: '',
        param: '',
        type: '',
        global: '',
        local: ''
    };
    let codeContext: ParserCodeTarget = ParserCodeTarget.JAVASCRIPT;

    lexerCode.forEach(function(tokens)
    {
        if(tokens.length > 0)
        {
            //change special states from one line to the next
            switch(parserContext)
            {
                case ParserContext.FUNCTION_PARAMS:
                    parserContext = ParserContext.FUNCTION_BODY;
                    break;
                default:
                //TODO this always resets special states, which should not be the case!
                //TODO should this code be changed to match some special states? make decision.
                //specialState = '';
            }

            for(let i = 0; i < tokens.length; i++)
            {
                let currentToken = tokens[i];
                let currentValue = currentToken.value.toLowerCase();
                let previousToken: LexerToken = (i > 0) ? tokens[i - 1] : {
                    which: LexerTokenCategory.UNIDENTIFIED,
                    value: '',
                    offset: -1
                };
                let previousValue = previousToken.value.toLowerCase();
                let nextToken: LexerToken = (i < tokens.length - 1) ? tokens[i + 1] : {
                    which: LexerTokenCategory.UNIDENTIFIED,
                    value: '',
                    offset: -1
                };
                let nextValue = nextToken.value.toLowerCase();

                switch(currentToken.which)
                {
                    case LexerTokenCategory.DEPRECATED_KEYWORD:
                        this.result.errors.push({offset: currentToken.offset, msg: Parser.MESSAGE.ERROR.DEPRECATED_KEYWORD});
                        return;
                    case LexerTokenCategory.DEPRECATED_COMMAND:
                        this.result.errors.push({offset: currentToken.offset, msg: Parser.MESSAGE.ERROR.DEPRECATED_COMMAND});
                        return;
                    case LexerTokenCategory.KEYWORD:
                        //switch valid start key words
                        switch(currentValue)
                        {
                            case 'global':
                                if(i === 0 || previousToken.which === LexerTokenCategory.COLON)
                                {
                                    this.result[codeContext] += 'BBScript.game.global.';
                                } else
                                {
                                    this.result.errors.push({offset: currentToken.offset, msg: Parser.MESSAGE.ERROR.INVALID_TOKEN});
                                }
                                break;
                            case 'local':
                                //TODO handle
                                break;
                            case 'const':
                                break;
                            case 'dim':
                                this.result[codeContext] += 'BBScript.game.dim.';
                                break;
                            case 'for':
                                parserContext = ParserContext.FOR;
                                this.result[codeContext] += 'for(';
                                break;
                            case 'step':
                                //TODO refactor variable structure on stack!!!
                                /!*if(stack[stack.length-1].indexOf(ParserStackElement.LOOP_VARIABLE) > -1) {
                                    //let loopVariable = stack[stack.length-1].indexOf('.')+1;
                                    //this.result[codeContext] += '; '+stack[stack.length-1].substr(loopVariable)+'+=';
                                } else {
                                    //TODO error message, missing loop variable
                                }*!/
                                break;
                            case 'to':
                                if(parserContext === ParserContext.FOR)
                                {
                                    this.result[codeContext] += '; ' + scope.local + ' <= ';
                                } else
                                {
                                    //TODO error message, missing loop variable
                                }
                                break;
                            case 'next':
                                this.result[codeContext] += '}';
                                break;
                            case 'while':
                                this.stack.push(ParserStackElement.WHILE_LOOP);
                                this.result[codeContext] += 'while(';
                                break;
                            case 'wend':
                                this.result[codeContext] += '}';
                                break;
                            case 'repeat':
                                this.result[codeContext] += 'do {';
                                break;
                            case 'until':
                                parserContext = ParserContext.UNTIL;
                                this.result[codeContext] += '} while(';
                                break;
                            case 'forever':
                                this.result[codeContext] += '} while(true);';
                                break;
                            case 'mainloop':
                                if(previousToken.which === LexerTokenCategory.KEYWORD && previousToken.value.toLowerCase() === 'end')
                                {
                                    codeContext = ParserCodeTarget.JAVASCRIPT;
                                } else
                                {
                                    codeContext = ParserCodeTarget.MAIN_LOOP;
                                }
                                break;
                            case 'if':
                                if(i === 0 || nextToken.which === LexerTokenCategory.COLON)
                                {
                                    this.result[codeContext] += 'if(';
                                } else
                                {
                                    this.result.errors.push({offset: currentToken.offset, msg: Parser.MESSAGE.ERROR.INVALID_TOKEN});
                                }
                                break;
                            case 'then':
                                if(i > 0)
                                {
                                    this.result[codeContext] += ') {';
                                } else
                                {
                                    this.result.errors.push({offset: currentToken.offset, msg: Parser.MESSAGE.ERROR.INVALID_START_TOKEN});
                                }
                                break;
                            case 'elseif':
                                this.result[codeContext] += '} else if(';
                                break;
                            case 'else':
                                this.result[codeContext] += '} else {';
                                break;
                            case 'endif':
                                this.result[codeContext] += '}';
                                break;
                            case 'select':
                                this.result[codeContext] += 'switch(';
                                break;
                            case 'case':
                                this.result[codeContext] += 'case ';
                                break;
                            case 'function':
                                parserContext = ParserContext.FUNCTION_DECLARATION;
                                break;
                            case 'type':
                                parserContext = ParserContext.TYPE;
                                break;
                            case 'field':
                                console.info('matched field keyword in state', parserContext);
                                if(parserContext === ParserContext.TYPE)
                                {
                                    console.info('going to special state field');
                                    parserContext = ParserContext.FIELD;
                                } else
                                {
                                    //TODO error message, field outside of type is invalid
                                }
                                break;
                            case 'not':
                                this.result[codeContext] += '!';
                                break;
                            case 'and':
                                this.result[codeContext] += ' && ';
                                break;
                            case 'or':
                                this.result[codeContext] += ' || ';
                                break;
                            case 'xor':
                                stack.push(ParserStackElement.XOR);
                                this.result[codeContext] += ' ? ';
                                break;
                            case 'true':
                            case 'false':
                                this.result[codeContext] += currentValue;
                                break;
                            case 'end':
                                switch(nextToken.value.toLowerCase())
                                {
                                    case 'if':
                                    case 'select':
                                        this.result[codeContext] += '}';
                                        break;
                                    case 'mainloop':
                                        codeContext = ParserCodeTarget.JAVASCRIPT;
                                        break;
                                    case 'function':
                                    case 'type':
                                        parserContext = ParserContext.DEFAULT;
                                        scope.function = '';
                                        if(currentValue === 'function')
                                        {
                                            //TODO close function's code
                                        }
                                        i++;  //skip next token execution
                                        break;
                                    default:
                                        this.result[codeContext] += 'BBScriptFunctions.end();';
                                }
                                break;
                        }
                        break;
                    case LexerTokenCategory.COMMAND:
                        //match command call with or without brackets
                        this.result[codeContext] += 'BBScriptFunctions.' + currentValue;
                        if(nextToken.which !== LexerTokenCategory.BRACKET_OPEN)
                        {
                            stack.push(ParserStackElement.BRACKET_OPEN);
                            this.result[codeContext] += '(';
                        }
                        break;
                    case LexerTokenCategory.INDIVIDUAL:
                        switch(parserContext)
                        {
                            case ParserContext.GLOBAL:
                            case ParserContext.CONST:
                                if(!individuals[currentValue])
                                {
                                    individuals[currentValue] = previousToken.value.toLowerCase();
                                    this.result[codeContext] += currentValue;
                                }
                                break;
                            case ParserContext.FOR:
                                scope.local = currentValue;
                                this.result[codeContext] += 'let ' + scope.local;
                                break;
                            case ParserContext.COMMAND:
                                //TODO check where the variable is defined (does not need to be global)
                                this.result[codeContext] += 'BBScript.game.global.' + currentValue;
                                break;
                            case ParserContext.FUNCTION_DECLARATION:
                                scope.function = currentValue;
                                this.result.functions[scope.function] = {
                                    params: {},
                                    locals: [],
                                    code: ''
                                };
                                parserContext = ParserContext.FUNCTION_PARAMS;
                                break;
                            case ParserContext.FUNCTION_PARAMS:
                                scope.param = currentValue;
                                this.result.functions[scope.function].params[scope.param] = '';
                                break;
                            case ParserContext.FUNCTION_BODY:
                                if(previousToken.which === LexerTokenCategory.KEYWORD && previousToken.value.toLowerCase() === 'local')
                                {
                                    scope.local = currentValue;
                                    this.result.functions[scope.function].locals.push({
                                        name: currentValue,
                                        value: ''
                                    });
                                }
                                break;
                            case ParserContext.TYPE:
                                scope.type = currentValue;
                                this.result.types[scope.type] = [];
                                break;
                            case ParserContext.FIELD:
                                console.info('current field value:', currentValue);
                                this.result.types[scope.type].push(currentValue);
                                break;
                            default:
                                //TODO refactor, this is only valid for specialState "global"
                                if(!(previousToken.which === LexerTokenCategory.KEYWORD && previousToken.value.toLowerCase() === 'global'))
                                {
                                    this.result[codeContext] += 'BBScript.game.global.' + currentValue;
                                } else
                                {
                                    this.result[codeContext] += currentValue;
                                }
                        }

                        break;
                    case LexerTokenCategory.BRACKET_OPEN:
                        if(parserContext !== ParserContext.FUNCTION)
                        {
                            this.result[codeContext] += '(';
                        }
                        stack.push(ParserStackElement.BRACKET_OPEN);
                        break;
                    case LexerTokenCategory.BRACKET_CLOSE:
                        if(stack[stack.length - 1] === ParserStackElement.BRACKET_OPEN)
                        {
                            if(parserContext !== ParserContext.FUNCTION)
                            {
                                this.result[codeContext] += ')';
                                stack.pop();
                            }
                        } else
                        {
                            //TODO error message, missing opening bracket
                        }
                        break;
                    case LexerTokenCategory.INTEGER:
                    case LexerTokenCategory.FLOAT:
                    case LexerTokenCategory.DOUBLE_QUOTE:
                        switch(parserContext)
                        {
                            case ParserContext.FUNCTION_PARAMS:
                                this.result.functions[scope.function].params[scope.param] += currentValue;
                                break;
                            case ParserContext.FUNCTION_BODY:
                                if(previousToken.which === LexerTokenCategory.ASSIGNMENT)
                                {
                                    //TODO refactor, this is the wrong idea
                                }
                                break;
                            default:
                                this.result[codeContext] += currentToken.value;
                        }
                        break;
                    case LexerTokenCategory.STRING:
                        if(previousToken.which === LexerTokenCategory.DOUBLE_QUOTE)
                        {
                            switch(parserContext)
                            {
                                case ParserContext.FUNCTION_PARAMS:
                                    this.result.functions[scope.function].params[scope.param] += currentValue;
                                    break;
                                default:
                                    this.result[codeContext] += currentToken.value;
                            }
                        } else
                        {
                            //TODO error message, string without opening double quote
                        }
                        break;
                    case LexerTokenCategory.COMMA:
                        let omitSymbolInJSCode = [ParserContext.FIELD];
                        if(omitSymbolInJSCode.indexOf(parserContext) === -1)
                        {
                            //TODO too liberal; also regard stack
                            switch(previousToken.which)
                            {
                                case LexerTokenCategory.INTEGER:
                                case LexerTokenCategory.FLOAT:
                                case LexerTokenCategory.BRACKET_CLOSE:
                                case LexerTokenCategory.INDIVIDUAL:
                                    this.result[codeContext] += ',';
                                    break;
                                default:
                                    this.result.errors.push({offset: currentToken.offset, msg: Parser.MESSAGE.ERROR.INVALID_TOKEN});
                            }
                        }
                        break;
                    case LexerTokenCategory.ALGEBRAIC:
                    case LexerTokenCategory.COMPARISON:
                        this.result[codeContext] += currentToken.value;
                        break;
                    case LexerTokenCategory.ASSIGNMENT:
                        switch(parserContext)
                        {
                            case ParserContext.FUNCTION_PARAMS:
                                if(previousToken.which === LexerTokenCategory.INDIVIDUAL)
                                {
                                    //TODO is this block necessary?
                                } else
                                {
                                    //TODO error message, invalid assignment
                                }
                                break;
                            default:
                                this.result[codeContext] += '=';
                        }
                        break;
                    default:
                        if(i === 0)
                        {
                            this.result.errors.push({offset: currentToken.offset, msg: Parser.MESSAGE.ERROR.INVALID_START_TOKEN});
                        } else
                        {
                            //console.info('this.result:',this.result);
                            this.result.errors.push({offset: currentToken.offset, msg: Parser.MESSAGE.ERROR.INVALID_TOKEN});
                        }
                }
            }

            //console.info('STACK:',stack);

            for(let stackIndex = 0; stackIndex < stack.length; stackIndex++)
            {
                switch(stack[stackIndex])
                {
                    case ParserStackElement.BRACKET_OPEN:
                        this.result[codeContext] += ');';
                        break;
                    case ParserStackElement.FOR:
                    case ParserStackElement.WHILE_LOOP:
                        this.result[codeContext] += ') {';
                        break;
                    default:
                        //TODO error message, invalid unclosed code
                        this.result.errors.push({});
                }
            }
            stack = [];

            if(this.result[codeContext][this.result[codeContext].length - 1] === ')')
            {
                this.result[codeContext] += ';';
            }

            if(parserContext === ParserContext.FOR && this.result[codeContext].substr(-1) !== '{')
            {
                //for loop did not contain "step", so close it manually
                this.result[codeContext] += '; ' + scope.local + '++) {';
            }

            this.result[codeContext] += '\n';
        }
    });

    //apply main loop code (if exists) to end of js code
    if(this.result.mainloop.trim() !== '')
    {
        this.result.js += 'BBScript.game.engine.runRenderLoop(function () {';
        this.result.js += this.result.mainloop;
        this.result.js += '});';
        delete this.result.mainloop;
    }

    return this.result;*/

    return null;
  }
}
