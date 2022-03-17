//creates div container that will hold all visible components of calculator
const calculatorContainer = document.createElement('div');
//adds div to body tag
document.body.appendChild(calculatorContainer);
//adds class 'container' to div
calculatorContainer.classList.add('container');

const button = document.createElement('button');
button.textContent ="PRESS ME";
document.body.appendChild(button);