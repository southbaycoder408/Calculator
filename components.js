//creates div container that will hold all visible components of calculator
const calculatorBody = document.createElement('div');
//adds div to body tag
document.body.appendChild(calculatorBody);
//adds class 'container' to div
calculatorBody.classList.add('container');

//creates button that will be number/operator keys for calculator
// const button = document.createElement('button');
// //adds text into the button
// button.textContent ="PRESS ME";
// //appends button to calulator container div
// calculatorBody.appendChild(button);

const button2 = () => {
    const buttonNames = ["0","1","2","3","4","5","6","7","8","9","A/C","Enter","+","-","x","/"] 
    let buttons = 0;
    for(buttons = 0; buttons <= 15; buttons++){
        const button = document.createElement('button');
        button.textContent = buttonNames[buttons];
        calculatorBody.appendChild(button);
    }
}

button2();