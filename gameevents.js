
/* Listens to raw events (keydowns, among others) and
 * generates high-level game events
 */

/* Implementation: It maintains a bitarray to keep track of
 * which keys are down and which are not. A controller config
 * maps key combinations to game events. Finally, an
 * loop is run which emits events based on the controller config
 */

/* Key Combinations allowed: 
 * key, lshift + key, lctrl + key
 */



let defaultControllerConfig = {
    'normal': {
        87: 'gameevent-moveup',
        65: 'gameevent-cclrotate',
        68: 'gameevent-clrotate',
        32: 'gameevent-fire'
    },
    'lshift': {},
    'lctrl': {}
};




let GameEvents = {};
/*

GameEvents.init = function(controllerConfig) {
    
    this.pressed = [];
    for (let i = 0; i < 256; i++) {
        this.pressed[i] = false;
    }
    
    $.subscribe('raw-keydown', function(event, keyCode) {
        GameEvents.pressed[keyCode] = true;
    });
    
    $.subscribe('raw-keyup', function(event, keyCode) {
        GameEvents.pressed[keyCode] = false;
    });
    
    controllerConfig = controllerConfig || defaultControllerConfig;    
}

/* Runs an eternal loop which checks for keys pressed and
 * emits game events */
GameEvents.init = function() {
    
    $.subscribe('raw-keydown', function(event, keyCode) {
        console.log(keyCode);
        if (keyCode === 87) {
            $.publish("gameevent-moveup");
            console.log("moving up");
        }
        else if (keyCode == 65) {
            $.publish("gameevent-cclrotate");
        }
        else if (keyCode == 68) {
            $.publish("gameevent-clrotate");
        }
        else if (keyCode == 32) {
            $.publish("gameevent-fire");
        }
    });
}

GameEvents.init();

