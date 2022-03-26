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
    return (input == "+" || input == "-" || input == "/" || input == "x");
}
//declare a variable that will store the computed value of calculator
let displayVal = "";
let calcNum1 = "";
let calcNum2 = "";
let subTotal = "";
let calcTotal = "";
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

                operator += buttonValue;

                //assigns the display value to subTotal variable
                subTotal += calcNum1;
                //resets the display value and calcNum1 value
                displayVal = "";
                calcNum1 = "";

                document.getElementById("display").innerHTML = " + ";
                console.log("subTotal: " + subTotal);
            } else if (buttonValue === "A/C") {

            } else if (buttonValue === "Enter") {

                calcNum2 += calcNum1;
                let calcTotal = operate(operator, Number(calcNum1), Number(calcNum2));
                console.log("operator: " + operator + " calcNum1: " + calcNum1 + " calcNum2: " + calcNum2 + " calcTotal: " + calcTotal);
                document.getElementById("display").innerHTML = calcTotal;

            } else {
                displayVal += buttonValue;
                calcNum1 += buttonValue;
                console.log("Display Val: " +displayVal + " and calcNum1: "+ calcNum1);
                document.getElementById("display").innerHTML = displayVal;
            }
        })

    })

}

attachButtonEvents();