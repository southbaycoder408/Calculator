//declare a variable that will store the computed value of calculator
let calcValue = "" ;
let calcNum1 = "";
let calcNum2 = "";
let calcTotal = "";

const calcDisplay = document.createElement('div');
document.body.appendChild(calcDisplay);
calcDisplay.setAttribute('id', 'display');
calcDisplay.textContent = "0";

//creates div container that will hold all visible components of calculator
const calcBody = document.createElement('div');
//adds div to body tag
document.body.appendChild(calcBody);
//adds class 'container' to div
calcBody.classList.add('calcBody');

//function creates all the standard calcultor buttons
const createButtons = () => {
    //array with preset labels for each button
    const buttonNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A/C", "Enter", "+", "-", "x", "/"]
    let buttons = 0;
    for (buttons = 0; buttons <= 15; buttons++) {    
        //creates button that will be number/operator keys for calculator
        const button = document.createElement('button');
        //adds text into the button
        button.textContent = buttonNames[buttons];

        //creates value that will be applied  to each button
        const buttonValue = buttonNames[buttons];

        //creates event listener that that returns a value based on button click
        button.addEventListener("click",() => {
            
            if(buttonValue === "+"){
                calcNum1 += calcValue;
                document.getElementById("display").innerHTML = " + ";
                console.log("calcNum1: " + calcNum1);
            }
            else if(buttonValue === "-"){
                
            }
            else if(buttonValue === "x"){
                
            }
            else if(buttonValue === "/"){
                
            }
            else if(buttonValue === "A/C"){
                
            }
            else if(buttonValue === "Enter"){
                calcNum2 += calcValue;
                calcTotal = calcNum1 + calcNum2 ;
                document.getElementById("display").innerHTML = calcTotal;
                
            }
            else{
                calcValue += buttonValue;
                console.log("calcValue: " + calcValue);
                document.getElementById("display").innerHTML = calcValue;
            }
            
            
        } )

        //appends button to calulator container div
        calcBody.appendChild(button);
    }
}
createButtons();