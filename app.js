goog.require('f1.racing.config.game_config');
goog.require('f1.racing.src.Racing');

var main = function(){
    console.log(f1.racing.src);
    var config  =  new f1.racing.config.game_config();
    var racing  =  new f1.racing.src.Racing(config);
}

/*racing.addPlayer({
    source: new Resource({ url: 'images/car1.jpg', width: 16, height: 32 }),
    x: 32,
    y: 50,
    rotation: 90
})*/


/*
RacingJS.load(config);

var w = 16, h = 32;
RacingJS.addPlayer({
	source: new Resource({ url: 'images/car1.jpg', width: w, height: h }),
	x: 32,
	y: 50,
	rotation: 90
});

(function () {
	var h = '';
	RacingJS.players.each(function (player, i) {
		h += '<div>Player ' + i + ': '
		+ '<b>' + player.lap + '/5</b> '
		+ 'x:' + (player.x + player.canvas.width / 2).format({decimals: 4})
		+ ' '
		+ 'y:' + (player.y + player.canvas.height / 2).format({decimals: 4})
		+ '</div>';
	});
	$('trace').set('html', h);
}).periodical(100);

function spawnCar () {
	RacingJS.addPlayer({
		npc: 1,
		source: new Resource({ width: 16, height: 32 }),
		x: -32,
		y: 50,
		speedMax: (Math.random() * 50 / 10).round(2) + 3,
		rotation: 90,
	});
}*/
