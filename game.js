// world config
let world = {
    ROWS: 10,
    COLUMNS: 10,
    TILESIZE: 32, // in px

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
    ],

    // this array represents the item posistions
    l1Item_ary: [
        [0, 0, 0, 3, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 3, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    ]
};

// normal phaser config
let config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: world.COLUMNS * world.TILESIZE,
    height: world.ROWS * world.TILESIZE,
    scene: {
        preload: preload,
        create: create
    }
};

function preload() {
    this.load.atlasXML('tiles', 'assets/tiles.png', 'assets/tiles.xml'); // loading tile images as a tile map
    this.load.atlasXML('items', 'assets/items.png', 'assets/items.xml'); // loading item images as a tile map
}

function create() {
    buildWorld(this, world);
}

function buildWorld(scene, world) {
    for (let rowIdx = 0; rowIdx < world.ROWS; rowIdx++) {
        for (let colIdx = 0; colIdx < world.COLUMNS; colIdx++) {
            // returns tile0000 or tile0001 by using the above tile layout array. This relates to the tile labelled in the tile.xml file
            let tileStr = "tile000" + world.l1Surface_ary[rowIdx][colIdx];
            scene.add.sprite(
                colIdx * world.TILESIZE + world.TILESIZE/2, // positioning for tile has to offset because pivot point is in center of tile
                rowIdx * world.TILESIZE + world.TILESIZE/2, 
                'tiles', tileStr
            );
            
            // adding items on top of tiles
            itemNum = world.l1Item_ary[rowIdx][colIdx];
            // allows 0 to represent no items
            if (itemNum !== 0) {
                // works the same way as tiles above
                let itemStr = "item000" + itemNum;
                scene.add.sprite(
                    colIdx * world.TILESIZE + world.TILESIZE/2,
                    rowIdx * world.TILESIZE + world.TILESIZE/2,
                    'items', itemStr
                );
            }
        }
    }
}

let game = new Phaser.Game(config);