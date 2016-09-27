
/* The following code defines the prototype of a scene object
 * A scene 
 */


/*
 ======================
 What it should be able to do?
 *  
 *
 */



function Scene() {
    this.objects = {}
    this.numObjects = 0;
}

Scene.prototype.getObject = function(id) {
    return this.objects[id]['raw'];
}
   
Scene.prototype.addObject = function(object, pos) {
    this.objects[this.numObjects] = {'raw': object, 'pos': pos};
    return this.numObjects++;
} 

Scene.prototype.updatePosition = function(id, newPos) {
    // do type-checking
    this.objects[id]["pos"] = newPos;
}

Scene.prototype.removeObject = function(id) {
    delete this.objects[id];
}

Scene.prototype.getPosition = function(id) {
    return this.objects[id]["pos"];
}

Scene.prototype.getObjects = function() {
    return _.map(this.objects, x => x['raw']);
}

Scene.prototype[Symbol.iterator] = function* () {
    for (let id in this.objects)
        yield [this.objects[id]['raw'], this.objects[id]['pos']];
};

