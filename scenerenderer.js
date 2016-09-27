

/* Handles rendering of `scene` object. Also attaches
 * raw event-listeners to the rendered object with the
 * associated callback re-publishing the events */
function SceneRenderer(scene) {
    this.scene = scene;
}

SceneRenderer.prototype.render = function() {   
    // create canvas
    let canvas = document.createElement("canvas");
    canvas.setAttribute("tabindex", "1");
    canvas.id = "game-canvas";

    // add event listeners
    canvas.addEventListener("keydown", function l1(event) {
        $.publish("raw-keydown", event.keyCode);

    });
    canvas.addEventListener("click", function l2(event) {
        // todo: send which object was clicked
        $.publish("raw-click", event);
    });
    
    // set battlefield properties
    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight; 
    
    let ctx = canvas.getContext("2d");
    ctx.drawImage(document.getElementById("source"), 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
    
    for (let object of this.scene) {
        let raw = object[0],
            pos = object[1];
        ctx.drawImage(raw.render(), pos[0], pos[1]);
    }
    return canvas;
}



