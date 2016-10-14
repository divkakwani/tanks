

function Bullet() {
    this.vx = 0;
    this.vy = 0;
}

Bullet.prototype.render = function() {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 5, 5);
    return canvas;
};
