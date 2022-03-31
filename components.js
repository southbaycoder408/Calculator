const sum = (num1, num2) => num1 + num2;
const difference = (num1, num2) => num1 - num2;
const product = (num1, num2) => num1 * num2;
const quotient = (num1, num2) => num1 / num2;
const operate = (operator, num1, num2) => {
    if (operator == "+") {
        return sum(num1, num2);
    } else if (operator == "-") {
        return difference(num1, num2);
    } else if (operator == "*") {
        return product(num1, num2)
    } else if (operator == "/") {
        return quotient(num1, num2);
    }
};
const isOperator = (input) => {
    return (input == "+" || input == "-" || input == "/" || input == "*");
}
const updateDisplay = (value) => document.getElementById("display").innerHTML = value;

//declare a variable that will store the computed value of calculator
let userInput = operator = "";
let runningTotal = undefined;
const logState = () => console.log("\nuserInput: " + userInput + "\nrunningTotal: " + runningTotal + "\noperator: " + operator);

//function creates all the standard calculator buttons
const attachButtonEvents = () => {

    //Used query selector to get all buttons in DOM
    const buttons = document.querySelectorAll("button");
    
    buttons.forEach((currentButton) => {
        //creates value that will be applied  to each button
        const buttonValue = currentButton.textContent;

        //creates event listener function that that returns a value based on button click
        currentButton.addEventListener("click", () => {

            if (isOperator(buttonValue)) {

                if (runningTotal) {
                    //assigns the display value to total variable
                    runningTotal = operate(operator, runningTotal, Number(userInput));

                    //resets the display value and userInput value
                    updateDisplay(runningTotal);

                } else {
                    runningTotal = Number(userInput);
                }
                operator = buttonValue;
                userInput = "";

                logState();

            } else if (buttonValue === "A/C") {
                userInput = "";
                runningTotal = undefined;
                operator = "";
                updateDisplay("0");

            } else if (buttonValue === "Enter") {
                runningTotal = operate(operator, Number(runningTotal), Number(userInput));

                logState();
                updateDisplay(runningTotal);
            }
            //this ELSE detects number inputs
            else {
                userInput += buttonValue;
                updateDisplay(userInput);
            }
        })
    })
}
attachButtonEvents();