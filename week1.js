const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("starting...");


rl.question("Enter a nummber: ", (answer1) => {const num1 = parseInt(answer1);
    rl.question("Enter another number: ", (answer2) => {const num2 = parseInt(answer2);
        console.log("add, subtract, multiply, divide");
        rl.question("What arithmetic would you like to do? " , (arithmetics) => {
            if (arithmetics == "add") {
                console.log("Answer: ", num1 + num2);}
                else if (arithmetics == "subtract") {
                    console.log("Answer: ", num1 - num2)}
                    else if (arithmetics == "multiply") {
                        console.log("Answer: ", num1 * num2)}
                        else if (arithmetics == "divide") {
                            console.log("Answer: ", num1 / num2)}
                            else {
                                console.log("Please enter one of the options!")}
    
});
});
});