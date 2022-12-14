// Your code here
const dodger = document.getElementById(`dodger`);

dodger.style.bottom = `0px`;
dodger.style.background = `yellow`;


function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace(`px`, ``);
    const left = parseInt(leftNumbers, 10);
    
    if (left > 0) {
        dodger.style.left = `${left - 1}`;
    }
}

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace(`px`, ``);
    const left = parseInt(rightNumbers, 10);
    
    if (left > 360) {
        dodger.style.left = `${left - 1}`;
    }
}

document.addEventListener(`keydown`, function(e) {
    if (e.key === `ArrowLeft`) {
        moveDodgerLeft();
    }
});

document.addEventListener(`keydown`, function(e) {
    if (e.key === `ArrowRight`) {
        moveDodgerLeft();
    }
});