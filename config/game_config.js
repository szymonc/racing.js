goog.provide('f1.racing.config.game_config');

goog.require('f1.racing.src.Map');


f1.racing.config.game_config = function() {
        this.name = 'game1';
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.container = 'racingjs-example';

        var mapConfig = {
            width: 640,
            height: 480,
            checkpoints: [
                [100, 50],
                [400, 100],
                [500, 200],
                [500, 350],
                [300, 350],
                [100, 350],
                [60, 300],
                [100, 250],
                [150, 250],
                [300, 320],
                [360, 260],
                [300, 200],
                [150, 150],
                [125, 150],
                [100, 150]
            ]
        };
        this.map = new f1.racing.src.Map(mapConfig);

        this.ui = [
          /*  new Element('div', {
                id: "trace",
                styles: {
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    'font-family': 'monospace',
                    'font-size': '14px'
                }
            }),
            new Element('input', {
                type: "button",
                id: "spawn",
                value: "Spawn Car",
                onclick: "spawnCar()",
                styles: {
                    position: 'fixed',
                    bottom: '10px',
                    left: '10px'
                }
            })*/
        ];
};