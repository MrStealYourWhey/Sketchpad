const pad = document.querySelector('#pad');
let squaresCount;

large.addEventListener('click', () => {
    reset();
    squaresCount = 13;
    draw();
});
medium.addEventListener('click', () => {
    reset();
    squaresCount = 26;
    draw();
});
small.addEventListener('click', () => {
    reset();
    squaresCount = 39;
    draw();
});
verySmall.addEventListener('click', () => {
    reset();
    squaresCount = 52;
    draw();
});


function draw() {
    for(i = 0; i < squaresCount ** 2; i++){
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.style.width = 832 / squaresCount +"px";
        grid.style.height = 832 / squaresCount +"px";
        grid.onmouseover = () => grid.setAttribute('class', 'draw');
        pad.appendChild(grid);
    }
}

function reset() {
    const removePad = document.getElementById("pad");
    removePad.innerHTML = '';
}