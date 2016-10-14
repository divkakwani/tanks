
function Tank(name, color) {
    this.orientation = 0;
    this.health = 50;
    this.name = name;
    this.color = color;
    this.bullets = 10;
}

Tank.prototype.render = function() {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#006400";

    ctx.translate(50, 50);
    ctx.rotate(this.orientation * Math.PI/180);
    ctx.drawImage(document.getElementById('military'), -10, -20, 40, 40);
    ctx.fillRect(-20, -20, 5, 40 * this.health/100);
    // ctx.fillStyle = "green";
    // ctx.fillRect(-10, -10, 20, 20);
    ctx.fillStyle = "black";
    ctx.fillRect(30, -2, 20, 5);
    // console.log("ht: " + canvas.height);
    // console.log("wt: " + canvas.width);
    return canvas;
};

