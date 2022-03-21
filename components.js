//declare a variable that will store the computed value of calculator
let calcValue = "" ;

const calcDisplay = document.createElement('div');
document.body.appendChild(calcDisplay);
calcDisplay.setAttribute('id', 'display');
calcDisplay.textContent = "0";
//document.getElementById("display").innerHTML = calcValue;


//creates div container that will hold all visible components of calculator
const calcBody = document.createElement('div');
//adds div to body tag
document.body.appendChild(calcBody);
//adds class 'container' to div
calcBody.classList.add('calcBody');

//function creates all the standard calcultor buttons
const createButtons = () => {
    //array with preset labels for each button
    const buttonNames = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9", "A/C", "Enter", "+", "-", "x", "/", "Clear"]
    let buttons = 0;
    for (buttons = 0; buttons <= 16; buttons++) {    
        //creates button that will be number/operator keys for calculator
        const button = document.createElement('button');
        //adds text into the button
        button.textContent = buttonNames[buttons];

        //creates value that will be applied  to each button
        const buttonValue = buttonNames[buttons];

        //creates event listener that that returns a value based on button click
        button.addEventListener("click",() => {
            calcValue += buttonValue;
            console.log(calcValue);
            document.getElementById("display").innerHTML = calcValue;
        } )

        //appends button to calulator container div
        calcBody.appendChild(button);
    }
}

createButtons();