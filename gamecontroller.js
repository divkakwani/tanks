

let GameController = {};

$.subscribe('gameevent-moveup', function() {
    Game.moveTank();
});

$.subscribe('gameevent-cclrotate', function() {
    Game.cclRotateTank();
});

$.subscribe('gameevent-clrotate', function() {
    Game.clRotateTank();
});

$.subscribe('gameevent-fire', function() {
    Game.fireBullet();
});
