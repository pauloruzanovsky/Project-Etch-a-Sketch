const container1 = document.querySelector('.container1');
let gridSize = 50;
let prevGridSize = gridSize;
let x = 255;
let y = 255;
let z = 255;
let newColor = 'rgb('+ x +',' + y + ',' + z +')';

function createGrid(gridSize) {
    let i = 0;
    let j = 0;
    gridSize = gridSize;
    for (i = 0; i < gridSize; i++) {
        const gridColumn = document.createElement('div');
        gridColumn.classList.add('gridColumn');
        container1.appendChild(gridColumn);
        for (j = 0; j < gridSize; j++) {
            const gridBlock = document.createElement('div');
            gridBlock.classList.add('gridBlock');
            gridColumn.appendChild(gridBlock);
        }
    }

    
}

function darkenBlockColor() {
    x -= 25;
    y -= 25;
    z -= 25;
}


function hoverColorSwitch() {
    const gridBlocks = document.querySelectorAll('.gridBlock');
    gridBlocks.forEach(gridBlock => {
    gridBlock.addEventListener("mouseover", function(event) {
    // highlight the mouseover target
        darkenBlockColor();
        event.target.style.background = 'rgb('+ x +',' + y + ',' + z +')';

  }, false);})
}

function removeGrid() {
    const gridBlocks = document.querySelectorAll('.gridBlock');
    gridBlocks.forEach(gridBlock => {
        gridBlock.remove();
        
    })

    const gridColumns = document.querySelectorAll('.gridColumn');
    gridColumns.forEach(gridColumn => {
        gridColumn.remove();
        
    })
}

function chooseNewGridSize() {
    gridSize = parseInt(prompt('Input new grid size, from 1 to 100:'));
    while(gridSize < 1 || gridSize > 100) {
        gridSize = parseInt(prompt('Input new grid size, from 1 to 100:'));
    }

    if(Object.is(gridSize,NaN)) {
        return
    }
    prevGridSize = gridSize;
    removeGrid();
    executeSketch()
}


function chooseNewGridSizeOnClick() {
    const chooseNewGridSizeButton = document.getElementById('gridSizeButton');
    chooseNewGridSizeButton.addEventListener("click", () => {
        chooseNewGridSize();
    });
}

function executeSketch() {
    createGrid(gridSize);
    hoverColorSwitch();
}

chooseNewGridSizeOnClick();
executeSketch();