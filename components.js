let sum = (num1, num2) => num1 + num2;
let difference = (num1, num2) => num1 - num2;
let product = (num1, num2) => num1 * num2;
let quotient = (num1, num2) => num1 / num2;
let operate = (operator, num1, num2) => {
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
let isOperator = (input) => {
    return (input == "+" || input == "-" || input == "/" || input == "*");
}
let updateDisplay = (value) => document.getElementById("display").innerHTML = value;
//declare a variable that will store the computed value of calculator
let userInput = "";
let runningTotal = undefined;
let operator = "";

//function creates all the standard calculator buttons
const attachButtonEvents = () => {

    //Used query selector to get all buttons in DOM
    const buttons = document.querySelectorAll("button");
    //console.log(buttons);
    buttons.forEach((currentButton) => {
        //creates value that will be applied  to each button
        let buttonText = currentButton.textContent;
        const buttonValue = buttonText;

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

                console.log("\nuserInput: " + userInput +
                    "\nrunningTotal: " + runningTotal +
                    "\noperator: " + operator);

            } else if (buttonValue === "A/C") {
                userInput = "";
                runningTotal = undefined;
                operator = "";
                updateDisplay("0");

            } else if (buttonValue === "Enter") {
                runningTotal = operate(operator, Number(runningTotal), Number(userInput));

                console.log("userInput: " + userInput +
                    "\nrunningTotal: " + runningTotal +
                    "\noperator: " + operator);

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