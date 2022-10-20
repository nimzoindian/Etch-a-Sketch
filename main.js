const container = document.querySelector('.container');
// Builds grid of '.grid-item cells and appends them to the container.
function createGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        cell.classList.add('grid-item');
        container.appendChild(cell);
    }
}
// Grabs nodelist and removes each node from container
function removeGrid() {
    document.querySelectorAll('.grid-item').forEach((e) => e.parentNode.removeChild(e));
}
// Conditional block to determine desired grid size from
// users determined input in way of dropdown menu. Note:
// When user changes size, grid is deleted, then built.
document.getElementById('gridSize').onchange = getGridSize;
function getGridSize() {
    let value = document.getElementById('gridSize').value;
    if (value == 16) {
        removeGrid();
        createGrid(value,value);
    } else if (value == 32) {
        removeGrid();
        createGrid(value,value);
    } else if (value == 48) {
        removeGrid();
        createGrid(value,value);
    } else if (value == 64) {
        removeGrid();
        createGrid(value,value);
    } else if (value == 80) {
        removeGrid();
        createGrid(value,value);
    } else if (value == 96) {
        removeGrid();
        createGrid(value,value);
    } else {
        createGrid(16,16);
    }
}

// Returns rgba as string
function randRGBA() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',1)';
}

// Add onclick functions to radio buttons.
let rad1 = document.getElementById('default');
rad1.setAttribute('onclick', 'detColor');
let rad2 = document.getElementById('rainbow');
rad2.setAttribute('onclick', 'detColor');

// Creates an event listener for the container
// of the grid.
// Determines the mode selected.
container.addEventListener('mouseover', detColor);
function detColor(e) {
    if (e.target.matches('.grid-item')) {
        if (document.getElementById('rainbow').checked) {
            e.target.style.backgroundColor = randRGBA();
        } else {
            e.target.style.backgroundColor = 'black';
        }
    }
}

getGridSize();