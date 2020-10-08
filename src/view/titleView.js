var viewManager = require('../viewManager');
var TextBox = require('../TextBox');
//var Gamepad = require('pixelbox/gamepad');
//var gamepad = Gamepad.gamepad;

var SCREEN_HEIGHT = settings.screen.height;
var OPTIONS_COUNT = 2;
var OPTIONS_Y = 88;

// assets
// var BACKGROUND = getMap('title/background');
var CURSOR = assets.hud.cursor;


//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄

var option = 0;

var textbox = new TextBox(128, 16, assets.font.tetris).setColor(3);

function updateText() {

    var y = 0;
    textbox.clear();
    textbox.addText('START GAME', 0, 8 * y++);
    textbox.addText('EXIT', 0, 8 * y++);

}


//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
exports.open = function() {

    // TODO: title animation

    camera(0, 0);
    paper(2);
    updateText();

    // TODO: music init
}

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
function action() {

}



//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
exports.update = function() {
    cls();

    // menu
    draw(textbox.texture, 40, OPTIONS_Y);
    draw(CURSOR, 32, option * 8 + OPTIONS_Y);

    // inputs
    if (gamepad.btnp.down ) {
        console.log("down pressed");
        option += 1; if (option >= OPTIONS_COUNT) option = 0; }
    if (gamepad.btn.up   ) { option -= 1; if (option < 0) option = OPTIONS_COUNT - 1; }
    
    // action
    //if (gamepad.btnp.A) action();
    //if (gamepad.btnp.B) action();
}