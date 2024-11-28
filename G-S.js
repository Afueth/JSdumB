const readline = require('readline');

// use node Server for execution.
// This is readline function that used for create an Interface from Terminal for User.
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//For get user input from user
read.question("Enter the first number", function(x){
    read.question("Enter the second number", function(y){
    //Convert input strings to numbers

    x= parseFloat(x);
    y= parseFloat(y);

    //Comparison
    if (x > y) {
        console.log("First number is Greater");
    } else if (y > x) {
        console.log("Second number is Greater");
    } else {
        console.log("Both numbers are equal");
    }

    read.close();

});
});



// require()	Imports the readline module.
// readline.createInterface()	Creates a user input/output interface for the terminal.
// read.question()	Asks the user a question and executes a callback with the input.
// parseFloat()	Converts strings to numbers for comparison or calculations.
// console.log()	Prints output to the terminal.
// read.close()	Closes the readline interface after completing user interaction.