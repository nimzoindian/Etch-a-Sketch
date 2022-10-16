const container = document.querySelector('.container');

function createGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        cell.setAttribute('id',`box${i}`);
        cell.innerText (i + 1);
        container.appendChild(cell).className = 'grid-item';
    }
}

createGrid(32, 32);