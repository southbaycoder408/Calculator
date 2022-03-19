const calcDisplay = document.createElement('div');
document.body.appendChild(calcDisplay);
calcDisplay.textContent = 'CALCULATOR DISPLAY';

//creates div container that will hold all visible components of calculator
const calcBody = document.createElement('div');
//adds div to body tag
document.body.appendChild(calcBody);
//adds class 'container' to div
calcBody.classList.add('calcBody');





const createButtons = () => {
    //array with preset labels for each button
    const buttonNames = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A/C", "Enter", "+", "-", "x", "/", "Clear"]
    let buttons = 0;
    for (buttons = 0; buttons <= 16; buttons++) {
        //creates button that will be number/operator keys for calculator
        const button = document.createElement('button');
        //adds text into the button
        button.textContent = buttonNames[buttons];
        //appends button to calulator container div
        calcBody.appendChild(button);
    }
}

createButtons();