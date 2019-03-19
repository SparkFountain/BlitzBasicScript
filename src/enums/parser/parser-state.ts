export enum ParserState {
    INITIAL,
    DECLARATION,        // Variable declarations like `Global test`
    ASSIGNMENT,         // Variable assignments like `test = 123`
    COMMAND_CALL,       // Native command call like `Graphics()` or `AppTitle()`
    LABEL,              // Label definition like `.level1`
    LOOP_HEAD,          //
    LOOP_BREAK,         //
    LOOP_END,           //
    CONDITION_HEAD,     //
    CONDITION_END,      //
    SELECTION_HEAD,     //
    SELECTION_BODY,     //
    SELECTION_END,      //
    FUNCTION_HEAD,      //
    FUNCTION_RETURN,    // Return statement of a function like `Return x*y`
    FUNCTION_END,       //
    FUNCTION_CALL,      //
    TYPE_HEAD,          //
    TYPE_BODY,          //
    TYPE_END,           //
    OBJECT_DELETION,    //
    OBJECT_INSERTION,   //
    INCLUDE,            // Include statement like `Include "gui.bbs"`
    DEBUG_STOP,         //
    DATA_DEFINITION,    // Definition of a Data block like `Data 42,0,8,"alien"`
    RESTORE_DATA,       // Statement to restore a data block like `Restore .level1`
    READ_DATA,          //
    MAIN_LOOP_HEAD,     // Begin of Main Loop statement: `MainLoop`
    MAIN_LOOP_END,      // End of Main Loop statement: `End MainLoop`
    QUIT_PROGRAM        // Statement to quit the whole program: `End`
}
