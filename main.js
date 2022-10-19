const container = document.querySelector('.container');

function createGrid(rows, cols, col) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        cell.classList.add('grid-item');
        container.appendChild(cell);
    }
}

function removeGrid() {
    document.querySelectorAll('.grid-item').forEach((e) => e.parentNode.removeChild(e));
}

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

function randRGBA() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',1)';
}

let rad1 = document.getElementById('default');
rad1.setAttribute('onclick', 'detColor');

let rad2 = document.getElementById('rainbow');
rad2.setAttribute('onclick', 'detColor');

let rad3 = document.getElementById('shade');
rad3.setAttribute('onclick', 'detColor');

container.addEventListener('mouseover', detColor);

function detColor(e) {
    if (e.target.matches('.grid-item')) {
        if (document.getElementById('rainbow').checked) {
            e.target.style.backgroundColor = randRGBA();
            //container.querySelectorAll('.grid-item').forEach((e) => e.style.backgroundColor = randRGBA());
        } else if (document.getElementById('shade').checked) {
            e.target.style.filter = 'brightness(90%)';
        } else {
            e.target.style.backgroundColor = 'black';
        }
    }
}

//function shader() {

//}

getGridSize();