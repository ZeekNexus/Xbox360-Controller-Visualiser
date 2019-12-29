/*buttons: 
  0:'A', 1:'B', 2:'X', 3:'Y',
  4:'LB', 5:'RB', 6:'Back', 7:'Start',
  8:'Xbox', 9:'??', 10:'??', 11:'??',
  
  axes:
  0:'L-STICK HOR', 1:'L-STICK VER', 2:'R-STICK HOR'
  3:'R-STICK VER', 4:'R-TRIGGER-GAUGE', 5:'L-TRIGGER-GAUGE'
  6:'DPAD HOR', 7:'DPAD VER'

  MISSING
  AXIS-L-PRESS, AXIS-R-PRESS
*/
//start variable for animation
var start;
var CONTROLLERLOADED = false;

window.addEventListener("gamepadconnected", function(e) {
    //gamepadAPI.controller = e.gamepad;
    //gamepadAPI.turbo = true;
    console.log("Gamepad Connected", e.gamepad);
    loadController();
    gameLoop();
});

window.addEventListener("gamepaddisconnected", function(e) {
    gamepadAPI.turbo = false;
    delete gamepadAPI.controller
    console.log("Gamepad Disconnected", e.gamepad)
    cancelAnimationFrame(start);
}); 

function gameLoop() {
    var gps = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
    if (!gps) { return; }
    var gamepad = gps[0];
    catchButtonPresses(gamepad);
    start = requestAnimationFrame(gameLoop);
}

function loadController() {
    if (!CONTROLLERLOADED) {
        document.getElementById("info").innerHTML = "Gamepad connected!";
        //controller display stuff
        document.getElementById("controller").src = "images/CONTROLLERE.png";
        document.getElementById("ltrigger").src = "images/LTRIGGER0.png";
        document.getElementById("rtrigger").src = "images/RTRIGGER0.png";
        document.getElementById("lshoulder").src = "images/LSHOULDER0.png";
        document.getElementById("rshoulder").src = "images/RSHOULDER0.png";
        document.getElementById("ybutton").src = "images/Y0.png";
        document.getElementById("xbutton").src = "images/X0.png";
        document.getElementById("bbutton").src = "images/B0.png";
        document.getElementById("abutton").src = "images/A0.png";
        document.getElementById("selectbutton").src = "images/SELECT0.png";
        document.getElementById("xboxbutton").src = "images/XBOX0.png"
        document.getElementById("startbutton").src = "images/START0.png";
        CONTROLLERLOADED = true;
    }
}

function catchButtonPresses(gamepad) {   
    //A BUTTON
    if(gamepad.buttons[0].pressed){
        document.getElementById("abutton").src = "images/A1.png";
    } else {
        document.getElementById("abutton").src = "images/A0.png";
    }
    //B BUTTON
    if(gamepad.buttons[1].pressed){
        document.getElementById("bbutton").src = "images/B1.png";
    } else {
        document.getElementById("bbutton").src = "images/B0.png";
    }
    //X BUTTON
    if(gamepad.buttons[2].pressed){
        document.getElementById("xbutton").src = "images/X1.png";
    } else {
        document.getElementById("xbutton").src = "images/X0.png";
    }
    //Y BUTTON
    if(gamepad.buttons[3].pressed){
        document.getElementById("ybutton").src = "images/Y1.png";
    } else {
        document.getElementById("ybutton").src = "images/Y0.png";
    }
    //L SHOULDER BUTTON
    if(gamepad.buttons[4].pressed){
        document.getElementById("lshoulder").src = "images/LSHOULDER1.png";
    } else {
        document.getElementById("lshoulder").src = "images/LSHOULDER0.png";
    }
    //R SHOULDER BUTTON
    if(gamepad.buttons[5].pressed){
        document.getElementById("rshoulder").src = "images/RSHOULDER1.png";
    } else {
        document.getElementById("rshoulder").src = "images/RSHOULDER0.png";
    }
    //SELECT BUTTON
    if(gamepad.buttons[6].pressed){
        document.getElementById("selectbutton").src = "images/SELECT1.png";
    } else {
        document.getElementById("selectbutton").src = "images/SELECT0.png";
    }
    //START BUTTON
    if(gamepad.buttons[7].pressed){
        document.getElementById("startbutton").src = "images/START1.png";
    } else {
        document.getElementById("startbutton").src = "images/START0.png";
    }
    //XBOX BUTTON
    if(gamepad.buttons[8].pressed){
        document.getElementById("xboxbutton").src = "images/XBOX1.png";
    } else {
        document.getElementById("xboxbutton").src = "images/XBOX0.png";
    }
    //LSTICK PRESS
    if(gamepad.buttons[9].pressed){
        document.getElementById("lstick").src = "images/LSTICK1.png";
    } else {
        document.getElementById("lstick").src = "images/LSTICK0.png";
    }
    //RSTICK PRESS
    if(gamepad.buttons[10].pressed){
        document.getElementById("rstick").src = "images/RSTICK1.png";
    } else {
        document.getElementById("rstick").src = "images/RSTICK0.png";
    } 
    //R TRIGGER AXES --could be on a brightness slider
    if(gamepad.axes[4] > -1){
        document.getElementById("rtrigger").src = "images/RTRIGGER1.png";
    } else {
        document.getElementById("rtrigger").src = "images/RTRIGGER0.png";
    }
    //L TRIGGER AXES --could be on a brightness slider
    if(gamepad.axes[5] > -1){
        document.getElementById("ltrigger").src = "images/LTRIGGER1.png";
    } else {
        document.getElementById("ltrigger").src = "images/LTRIGGER0.png";
    }    
    //DPAD HORIZONTAL AXES
    if(gamepad.axes[6] == -1){
        document.getElementById("ldpad").src = "images/DPADLEFT1.png";
    } else {
        document.getElementById("ldpad").src = "images/DPADLEFT0.png";
    } 
    if (gamepad.axes[6] == 1) {
        document.getElementById("rdpad").src = "images/DPADRIGHT1.png";
    } else {
        document.getElementById("rdpad").src = "images/DPADRIGHT0.png";
    }
    //DPAD VERTICAL AXES
    if(gamepad.axes[7] == -1){
        document.getElementById("udpad").src = "images/DPADUP1.png";
    } else {
        document.getElementById("udpad").src = "images/DPADUP0.png";
    } 
    if (gamepad.axes[7] == 1) {
        document.getElementById("ddpad").src = "images/DPADDOWN1.png";
    } else {
        document.getElementById("ddpad").src = "images/DPADDOWN0.png";
    }
    //L-STICK HORIZONTAL AXES
    if(gamepad.axes[0] > 0.3) {
        lstick.style.left = gamepad.axes[0]*32 + "px"; 
    } else if(gamepad.axes[0] < -0.3) {
        lstick.style.left = gamepad.axes[0]*22 + "px"; 
    } else {
        lstick.style.left = 0 + "px";
    }
    //L-STICK VERTICAL AXES
    if(gamepad.axes[1] > 0.3) {
        lstick.style.top = gamepad.axes[1]*32 + "px"; 
    } else if(gamepad.axes[1] < -0.3) {
        lstick.style.top = gamepad.axes[1]*22 + "px"; 
    } else {
        lstick.style.top = 0 + "px";
    }

    //R-STICK HORIZONTAL AXES
    if(gamepad.axes[2] > 0.3) {
        rstick.style.left = gamepad.axes[2]*32 + "px"; 
    } else if(gamepad.axes[2] < -0.3) {
        rstick.style.left = gamepad.axes[2]*22 + "px"; 
    } else {
        rstick.style.left = 0 + "px";
    }

    //R-STICK VERTICAL AXES
    if(gamepad.axes[3] > 0.3) {
        rstick.style.top = gamepad.axes[3]*32 + "px"; 
    } else if(gamepad.axes[3] < -0.3) {
        rstick.style.top = gamepad.axes[3]*22 + "px"; 
    } else {
        rstick.style.top = 0 + "px";
    }
}