goog.provide('f1.racing.src.Racing');
goog.require('goog.Timer');

f1.racing.src.Racing = function(data) {
    this.width = 320;
    this.height = 240;
    this.container = null;
    this.canvas = {};
    this.context = {};
    this.player = null;
    this.players = [];
    this. key = {};
    this.mouse = {
        x: 0,
        y: 0,
        down: false
    };
    this.map = null;
};

f1.racing.src.Racing.prototype.load = function(options){
    this.options = options;
    this.map = options.map;
    this.width = options.width ? options.width.toInt() : this.width;
    this.height = options.height ? options.height.toInt() : this.height;

    //** game loop
    var tickCounter = function() {
        this.calc();
        this.render();
    };
    var timer = new goog.Timer(30);
  //  timer.start();
    goog.events.listen(timer, goog.Timer.TICK, tickCounter);

    // Default Body Styles
/*
    var styleSheet = new Element('style', {
        type: 'text/css',
        html: '*{padding:0;margin:0}'
    }).inject($$('head')[0]);
*/
    var docKh = new goog.events.KeyHandler(document);
    goog.events.listen(docKh, 'key', function(e) {
        console.log('keyCode: ' + e.keyCode +
            ', charCode: ' + e.charCode +
            ', repeat: ' + e.repeat +
            ', target: ' + e.target +
            ', native event: ' + e.getBrowserEvent().type);
    });
    // Events
  /*  addEvents({
        'keyup': this.onKeyUp.bind(this),
        'keydown': this.onKeyDown.bind(this),
        'onMouseDown': this.onMouseDown.bind(this),
        'onMouseUp': this.onMouseUp.bind(this),
        'click': this.onClick.bind(this)
    });

    // Setup Container
    this.container = new Element('div', {id: this.options.container })
        .inject(document.body)
        .setStyles({
            width: this.width,
            height: this.height
        });

    // Build UI
    if (this.options.ui) {
        this.options.ui.each(function (el) {
            el.inject(document.body)
        });
    }

    // Construct UI
    var canvases = ['terrain', 'players', 'effects'];
    canvases.each(function (val, key) {
        var canvas = document.createElement('canvas');
        this.context[val] = canvas.getContext('2d');
        canvas = $(canvas);
        canvas.width = this.width;
        canvas.height = this.height;
        canvas.setStyles({
            position: 'absolute',
            top: 0,
            left: 0,
            width: this.width,
            height: this.height
        });
        this.canvas[val] = canvas;
        this.container.adopt(this.canvas[val]);
    });*/


};

//
//	Add Player
//
/*
f1.racing.src.Racing.prototype.addPlayer = function (obj) {

    var player = new Player(obj);
    this.players.push(player);
    if (!obj.npc) this.player = player;

};

//
//	Events
//
f1.racing.src.Racing.prototype.onKeyDown = function (e) {
    e.stop();
    e.preventDefault();
    this.key[e.code] = true;
    return false;
};
f1.racing.src.Racing.prototype.onKeyUp = function (e) {
    e.stop();
    e.preventDefault();
    this.key[e.code] = false;
    return false;
};
f1.racing.src.Racing.prototype.onMouseDown = function (e) {
    this.mouse.down = true;
};
f1.racing.src.Racing.prototype.onMouseUp = function (e) {
    this.mouse.down = false;
};
f1.racing.src.Racing.prototype.onMouseMove = function (e) {};
f1.racing.src.Racing.prototype.onClick = function (e) {};

//
//	Global Rendering
//
f1.racing.src.Racing.prototype.calc = function () {
    goog.array.forEach( this.players, function (player) {
        player.calc();
    });
};
f1.racing.src.Racing.prototype.render = function () {

    var context, player = this.players[0];

    context = this.context['terrain'];
    context.clearRect(0, 0, this.canvas['terrain'].width, this.canvas['terrain'].height);
//		context.fillStyle = 'rgba(0, 200, 0, .1)';
//		context.fillRect(0, 0, this.canvas['terrain'].width, this.canvas['terrain'].height);

    // Draw lines to mark out map
    context.beginPath();
    context.strokeStyle = 'rgba(0, 0, 0, .1)';
    context.lineWidth = 2;
    context.moveTo(this.map.checkpoints[0].x, this.map.checkpoints[0].y);
    this.map.checkpoints.each(function (point, i) {
        if (i > 0) context.lineTo(point.x, point.y);
    }.bind(this));
    context.lineTo(this.map.checkpoints[0].x, this.map.checkpoints[0].y)
    context.stroke();
    context.closePath();

    // Highlight Checkpoint
    this.map.checkpoints.each(function (point, i) {
        if (!player.checkpoint) player.checkpoint = new Point(0, 0);
        if (point.x == player.checkpoint.x && point.y == player.checkpoint.y) {
//				context.strokeStyle = 'rgba(0, 200, 0, .1)';
//				context.beginPath();
//				context.moveTo(player.x, player.y);
//				context.lineTo(player.checkpoint.x, player.checkpoint.y);
//				context.closePath();
//				context.stroke();
            context.strokeStyle = 'rgba(0, 0, 0, .8)';
            context.lineWidth = 4;
            context.beginPath();
            context.arc(point.x, point.y, 14, 0, Math.PI * 2, true);
            context.stroke();
            context.closePath();
            context.beginPath();
            context.fillStyle = 'rgba(255, 255, 255, 1)';
            context.arc(point.x, point.y, 12, 0, Math.PI * 2, true);
            context.fill();
            context.closePath();
//				context.fillRect(point.x - 8, point.y - 8, 16, 16);
        } else {
            context.strokeStyle = 'rgba(255, 0, 0, .6)';
            context.lineWidth = 1;
            context.beginPath();
            context.arc(point.x, point.y, 6, 0, Math.PI * 2, true);
            context.stroke();
            context.closePath();
        }
    }.bind(this));

    // Render Players
    context = this.context['players'];
    this.canvas['players'].width = this.canvas['players'].width;
    this.players.each(function (player) {
        player.render();
        context.drawImage(player.canvas, player.x - player.canvas.width / 2, player.y - player.canvas.height / 2);
    }.bind(this));
};*/
