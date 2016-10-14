
/* Provides a high-level api to the game
 */



/* Global Game namespace */ 
let Game = {};

Game.init = function() {
    /* Setup scene -- create a new scene and insert game objects into the scene */
    this.scene = new Scene();
    this.ownTank = new Tank(); 
    this.ownTankId = this.scene.addObject(this.ownTank, [100, 100]);
    this.scene.addObject(new Tank(), [500, 500]);
    this.scene.addObject(new Tank(), [200, 700]);
    this.scene.addObject(new Tank(), [600, 100]);
    this.scene.addObject(new Tank(), [700, 200]);
    this.scene.addObject(new Tank(), [0, 0]);
}

Game.moveTank = function() {
    let oldpos = this.scene.getPosition(this.ownTankId);
    let newx = oldpos[0] + 4 * Math.cos(this.ownTank.orientation * Math.PI/180);
    let newy = oldpos[1] + 4 * Math.sin(this.ownTank.orientation * Math.PI/180);
    this.scene.updatePosition(this.ownTankId, [newx, newy]);
}

Game.cclRotateTank = function() {
    this.ownTank.orientation -= 5;
}

Game.clRotateTank = function() {
    this.ownTank.orientation += 5;
}

Game.fireBullet = function() {
    let bullet = new Bullet();
    let tankPos = this.scene.getPosition(this.ownTankId);
    let cos = Math.cos(this.ownTank.orientation * Math.PI/180);
    let sin = Math.sin(this.ownTank.orientation * Math.PI/180);
    let bulletPos = [tankPos[0] + 45 + 40 * cos - 2 * sin, 
                     tankPos[1] + 45 + 40 * sin + 2 * cos];
    console.log(tankPos);
    let id = this.scene.addObject(bullet, bulletPos);
    console.log(id);
    console.log(this.scene.getPosition(id));

    let repeater = setInterval(function() {
        console.log("updating bullet position");
        let current = Game.scene.getPosition(id);
        Game.scene.updatePosition(id, [current[0] + 10*cos, current[1] + 10*sin]);
    }, 100);
    
}

Game.addTank = function() {
    
}



Game.getState = function() {
    /* Structure: [{'object': object, 'pos': position}] */
    
    let state = [];
    for (let go of this.scene) {
        //state.push
    }
}


Game.run = function() {
    // run render-loop
    setInterval(function() {
        let canvas = document.body.querySelector('canvas');
        if (canvas)
            canvas.parentNode.removeChild(canvas);
        let renderer = new SceneRenderer(Game.scene);
        canvas = renderer.render();
        document.body.appendChild(canvas);
        $("#game-canvas").focus();
        Game.clock += 1;
    }, 100); 
},

Game.init();
Game.run();

