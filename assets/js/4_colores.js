
const azul = document.getElementById('azul');
const rojo = document.getElementById('rojo');
const verde = document.getElementById('verde');
const amarillo = document.getElementById('amarillo');

const changeColor = (event) => event.target.style.backgroundColor = 'black';

azul.addEventListener('click', changeColor);
rojo.addEventListener('click', changeColor);
verde.addEventListener('click', changeColor);
amarillo.addEventListener('click', changeColor);

