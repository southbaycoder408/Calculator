let sum = (num1,num2) => num1 + num2;

let difference = (num1, num2) => num1-num2;

let product = (num1, num2) => num1*num2;

let quotient = (num1, num2) => num1/num2;

let operate = (operator, num1,num2) =>{
    if(operator == "+" ){
        return sum(num1,num2);
    }
    else if(operator == "-"){
        return difference(num1,num2);
    }
    else if(operator == "*"){
        return product(num1, num2)
    }
    else if(operator == "/"){
        return quotient(num1,num2);
    }
}

