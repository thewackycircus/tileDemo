/* set of functions to convert back and forth between
 * pixel and row/column coordinates
 */

function xPxToCol(world, x) {
    var col;
    if (x < 1) {
        col = 0;
    } else {
        col = (Math.floor(x / world.TILESIZE));
    }
    if (col >= world.COLUMNS) {
        col = world.COLUMNS-1;
    }
    return (col);
}

function yPxToRow(world, y) {
    var row;
    if (y < 1) {
        row = 0;
    } else {
        row = (Math.floor(y / world.TILESIZE));
    }
    if (row >= world.ROWS) {
        row = world.ROWS - 1;
    }
    return (row);
}

function colToXPx(world, col) {
    var x;
    var maxPx = Math.floor(world.COLUMNS * world.TILESIZE);
    if (col < 1) {
        x = 0;
    } else {
        x = (Math.floor(col * world.TILESIZE));
        if (x > maxPx) {
            x = maxPx;
        }
    }
    return (x);
}

function rowToYPx(world, row) {
    var y;
    var maxPx = Math.floor(world.ROWS * world.TILESIZE);
    if (row < 1) {
        y = 0;
    } else {
        y = (Math.floor(row * world.TILESIZE));
        if (y > maxPx) {
            y = maxPx;
        }
    }
    return (y);
}