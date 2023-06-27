const promptElement = document.querySelector('.prompt');
const outputElement = document.querySelector('.output');
const inputElement = document.querySelector('.input');
const cursorElement = document.querySelector('.cursor');

function processCommand(command) {
  if (command === 'sabores') {
    outputElement.innerHTML += 'Tropical<br>Picante<br>';
  } else if (command === 'clear') {
    outputElement.innerHTML = '';
  } else if (command === 'ingredientes') {
    outputElement.innerHTML = '';
    outputElement.innerHTML += '<ul>';
    outputElement.innerHTML += '<li>Tequila</li>';
    outputElement.innerHTML += '<li>Licor de café</li>';
    outputElement.innerHTML += '<li>Zumo de limón</li>';
    outputElement.innerHTML += '<li>Syrup de frambuesa</li>';
    outputElement.innerHTML += '<li>shrup de piña con picante</li>';
    outputElement.innerHTML += '</ul>';
  } else if (command === 'preparacion') {
    outputElement.innerHTML = '';
    outputElement.innerHTML += 'METODO DE HOMOGENIZACIÓN: AGITADO<br>';
    outputElement.innerHTML += '<ul>';
    outputElement.innerHTML += '<li>1 1/2 ron</li>';
    outputElement.innerHTML += '<li>1/2 Licor de café</li>';
    outputElement.innerHTML += '<li>1/4Zumo de limón</li>';
    outputElement.innerHTML += '<li>1/2 Syrup de frambuesa</li>';
    outputElement.innerHTML += '<li>1/4 shrup de piña con picante</li>';
    outputElement.innerHTML += '</ul>';
  } else {
    outputElement.innerHTML = '';
    outputElement.innerHTML += 'Comando inválido<br>';
  }

  inputElement.value = '';
  inputElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function handleInput(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    const command = inputElement.value.trim();
    processCommand(command);
  }
}

function handleCursorBlink() {
  cursorElement.style.visibility = 'hidden';
  setTimeout(() => {
    cursorElement.style.visibility = 'visible';
  }, 500);
}

inputElement.addEventListener('keydown', handleInput);
inputElement.addEventListener('input', handleCursorBlink);
inputElement.focus();
