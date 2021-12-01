// world config
let world = {
    ROWS: 10,
    COLUMNS: 10,
    TILEWIDTH: 32, // in px

    // this array represents the tile layout
    l1Surface_ary: [
        [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
    ]
};

// normal phaser config
let config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: world.COLUMNS * world.TILEWIDTH,
    height: world.ROWS * world.TILEWIDTH,
    scene: {
        preload: preload,
        create: create
    }
};

function preload() {
    this.load.atlasXML('tiles', 'assets/tiles.png', 'assets/tiles.xml'); // loading tile images as a tile map
}

function create() {
    buildWorld(this, world);
}

function buildWorld(scene, world) {
    for (let rowIdx = 0; rowIdx < world.ROWS; rowIdx++) {
        for (let colIdx = 0; colIdx < world.COLUMNS; colIdx++) {
            // returns tile0000 or tile0001 by using the above tile layout array. This relates to the tile labelled in the tile.xml file
            let tileStr = "tile000" + world.l1Surface_ary[rowIdx][colIdx];
            test = scene.add.sprite(
                colIdx * world.TILEWIDTH + world.TILEWIDTH/2, // positioning for tile has to offset because pivot point is in center of tile
                rowIdx * world.TILEWIDTH + world.TILEWIDTH/2, 
                'tiles', tileStr);
        }
    }
}

let game = new Phaser.Game(config);