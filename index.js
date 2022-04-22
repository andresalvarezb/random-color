import getRandomNumber from './utils/getRandomNumber.js';

window.onload = () => {
    document.getElementById('btn').addEventListener('click', changeColor)
}

function changeColor() {
    let color = getRGBColor()
    document.querySelector('.color').textContent = color;
    document.body.style.backgroundColor = color;
}

function getRGBColor() {
    let color = `rgb(${getRandomNumber(255)},${getRandomNumber(255)},${getRandomNumber(255)})`
    return color;
}