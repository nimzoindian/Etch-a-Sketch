const container = document.querySelector('.container');

function createGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        cell.classList.add('grid-item');
        cell.addEventListener('dragover', function onClick(event) {
            event.target.style.backgroundColor = 'red';
        });
        cell.addEventListener('click', function onClick(event) {
            event.target.style.backgroundColor = 'red';
        });
        container.appendChild(cell);
    }
}

function changeColor() {
}

createGrid(32, 32);