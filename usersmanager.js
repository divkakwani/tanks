

function Player(name) {
    this.name = name;
}

playersDB = {};

function makePlayer(name) {
    if(playersDB.hasOwnProperty(name)) {
        return -1;
    } else {
        let player = new Player(name);
        playersDB[name] = true;
        return player;
    }
}
