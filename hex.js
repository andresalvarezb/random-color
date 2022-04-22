import getRandomNumber from './utils/getRandomNumber.js';

window.onload = () => {
    document.getElementById('btn').addEventListener('click', changeColor)
}
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function changeColor() {
    let color = getHexColor()
    document.querySelector('.color').textContent = color;
    document.body.style.backgroundColor = color;
}

function getHexColor() {
    const lengthHEX = hex.length
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[getRandomNumber(lengthHEX)]
    }
    return color;
}
