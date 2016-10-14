

function Wall() {
}

Wall.prototype.render = function() {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "brown";
    ctx.fillRect(0, 0, 40, 40);
    ctx.fillRect(40, 17, 20, 5);
    return canvas;
}
