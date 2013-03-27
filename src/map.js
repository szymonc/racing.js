goog.provide('f1.racing.src.Map');

goog.require('f1.racing.src.Point');

f1.racing.src.Map = function(data) {
    this.data = data;
    this.terrain = null;
    this.checkpoints = [];
    this.makeCheckpoints();
};
f1.racing.src.Map.prototype.makeCheckpoints = function() {
    for(var i = 0,len = this.data.checkpoints.length; i < len; i++){
        var x = this.data.checkpoints[i][0];
        var y = this.data.checkpoints[i][1];
        var pt = new f1.racing.src.Point(x, y);
        this.checkpoints.push(pt);
    }
};
