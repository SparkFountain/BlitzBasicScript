import {ParserResult} from '../interfaces/parser/parser-result';
import {$} from 'protractor';

export class Core {
    static LIGHT = {
        DIRECTIONAL: 1,
        POINT: 2,
        SPOT: 3,
        HEMISPHERIC: 4
    };

    static CAMERA = {
        FREE: 0,
        UNIVERSAL: 1,
        ARC_ROTATE: 2,
        FOLLOW: 3,
        ANAGLYPH: 4,
        WEB_VR: 5
    };

    static CAMERA_PROJECTION = {
        NONE: 0,
        PERSPECTIVE: 1,
        ORTHOGRAPHIC: 2
    };

    static FOG = {
        NONE: 0,
        LINEAR: 1,
        EXPONENTIAL: 2,
        EXPONENTIAL_ENHANCED: 3
    };

    static COLOR = {
        DIFFUSE: 1,
        SPECULAR: 2,
        EMISSIVE: 4,
        AMBIENT: 8
    };

    canvas: any;
    keyMap: object;

    game: object;

    constructor() {
        this.canvas = {
            dom: null,
            textPos: {
                x: 0,
                y: 30
            },
            font: {
                name: 'Arial',
                size: '30px',
                bold: false,
                italic: false,
                underline: false
            },
            origin: {
                x: 0,
                y: 0
            }
        };

        //key map (BlitzBasic Scan Code to JavaScript Key Event Code)
        this.keyMap = {
            1: 'Escape',
            2: 'Digit1',
            3: 'Digit2',
            4: 'Digit3',
            5: 'Digit4',
            6: 'Digit5',
            7: 'Digit6',
            8: 'Digit7',
            9: 'Digit8',
            10: 'Digit9',
            11: 'Digit0',
            12: 'Minus',
            13: 'Equal',
            14: 'Backspace',
            15: 'Tab',
            16: 'KeyQ',
            17: 'KeyW',
            18: 'KeyE',
            19: 'KeyR',
            20: 'KeyT',
            21: 'KeyY',
            22: 'KeyU',
            23: 'KeyI',
            24: 'KeyO',
            25: 'KeyP',
            26: 'BracketLeft',
            27: 'BracketRight',
            28: 'Enter',
            29: 'ControlLeft',
            30: 'KeyA',
            31: 'KeyS',
            32: 'KeyD',
            33: 'KeyF',
            34: 'KeyG',
            35: 'KeyH',
            36: 'KeyJ',
            37: 'KeyK',
            38: 'KeyL',
            39: 'Semicolon',
            40: 'Quote',
            41: 'Backquote',
            42: 'ShiftLeft',
            43: 'Backslash',
            44: 'KeyZ',
            45: 'KeyX',
            46: 'KeyC',
            47: 'KeyV',
            48: 'KeyB',
            49: 'KeyN',
            50: 'KeyM',
            51: 'Comma',
            52: 'Period',
            53: 'Slash',
            54: 'ShiftRight',
            55: 'Multiply',
            56: 'AltLeft',
            57: 'Space',
            58: 'CapsLock',
            59: 'F1',
            60: 'F2',
            61: 'F3',
            62: 'F4',
            63: 'F5',
            64: 'F6',
            65: 'F7',
            66: 'F8',
            67: 'F9',
            68: 'F10',
            69: 'NumLock',
            70: 'ScrollLock',
            71: 'NumPad7',
            72: 'NumPad8',
            73: 'NumPad9',
            74: 'Minus',
            75: 'NumPad4',
            76: 'NumPad5',
            77: 'NumPad6',
            78: 'Plus',
            79: 'NumPad1',
            80: 'NumPad2',
            81: 'NumPad3',
            82: 'NumPad0',
            83: 'Comma',
            86: 'IntlBackslash',
            87: 'F11',
            88: 'F12',
            153: 'TODO',
            156: 'TODO',
            157: 'ControlRight',
            160: 'TODO',
            161: 'TODO',
            162: 'TODO',
            164: 'TODO',
            174: 'TODO',
            176: 'TODO',
            178: 'TODO',
            181: 'TODO',
            183: 'TODO',
            184: 'AltRight',
            197: 'TODO',
            199: 'TODO',
            200: 'ArrowUp',
            201: 'TODO',
            203: 'ArrowLeft',
            205: 'ArrowRight',
            207: 'TODO',
            208: 'ArrowDown',
            209: 'TODO',
            210: 'TODO',
            211: 'TODO',
            219: 'TODO',
            220: 'TODO',
            221: 'TODO',
            222: 'TODO',
            223: 'TODO',
            227: 'TODO',
            229: 'TODO',
            230: 'TODO',
            231: 'TODO',
            232: 'TODO',
            233: 'TODO',
            234: 'TODO',
            235: 'TODO',
            236: 'TODO',
            237: 'TODO'
        };

        //TODO refactor access structure
        this.game = {
            global: {},
            dim: {},
            fn: {},
            type: {},
            wireFrame: false,
            color:
                {
                    foreground: 'white',
                    background: 'black'
                }
        };

        //functions: functions, //all functions which are defined inside functions.js
        let dim = {};

        //dim arrays
        let timer = [];  //timer objects
        let keysDown = {};

        //stores all keys which are held down
        let keysHit = {}
            , //stores all keys which have been hit and not yet been checked for
              //mouseDown = {}
              //,
            mouseHit = {};
    }

    forToNext() {

    }

    whileWend() {

    }

    repeatUntil() {

    }

    //TODO refactor old stuff below
    stop() {
        //TODO refactor
        /*window.removeEventListener('keydown', this.keyDown);
        window.removeEventListener('keyup', this.keyUp);
        window.removeEventListener('mousedown', this.mouseDown);
        window.removeEventListener('mouseup', this.mouseUp);*/
    }

    //TODO also implement for 'KeyHit'
    keyDown($event) {
        //TODO refactor
        //this.keysDown[$event.code] = true;
    }

    keyUp($event) {
        //TODO refactor
        /*if(this.keysDown.hasOwnProperty($event.code))
        {
            delete this.keysDown[$event.code];
        }*/
    }

    mouseDown($event) {
        this.mouseDown[$event.button] = true;
    }

    mouseUp($event) {
        if (this.mouseDown.hasOwnProperty($event.button)) {
            delete this.mouseDown[$event.button];
        }
    }


    initialize(canvasID) {
        this.canvas.dom = $('#' + canvasID)[0];
    }

    lexAndParse(sourceCode): ParserResult {
        //TODO refactor
        return null;

        /*let lexerCode = lexCode(sourceCode);
        let parserResult = parse(lexerCode);
        return parserResult;*/
    }

    play(code, debugModeEnabled) {
        if (!this.canvas.dom) {
            console.error('No canvas3d has been initialized! Please execute "this.initialize(canvasID)" first.');
            return;
        }

        this.canvas.dom.addEventListener('keydown', this.keyDown);
        this.canvas.dom.addEventListener('keyup', this.keyUp);
        this.canvas.dom.addEventListener('mousedown', this.mouseDown);
        this.canvas.dom.addEventListener('mouseup', this.mouseUp);

        eval(code);
    }


    getCanvas() {
        return this.canvas;
    }

    getScene() {
        //return scene;
    }

    getRenderer() {
        //return renderer;
    }
}
