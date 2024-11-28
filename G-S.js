const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the first number: ", function(x) {
    rl.question("Enter the second number: ", function(y) {
        // Convert input strings to numbers
        x = parseFloat(x);
        y = parseFloat(y);

        if (x > y) {
            console.log("First number is Greater");
        } else if (y > x) {
            console.log("Second number is Greater");
        } else {
            console.log("Both numbers are equal");
        }

        rl.close();  // Close the readline interface
    });
});
