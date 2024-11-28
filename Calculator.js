const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user to choose an operation
rl.question("Choose an operation:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\nYour choice: ", function (choice) {
    // Prompt for the first number
    rl.question("Enter the first number: ", function (num1) {
        // Prompt for the second number
        rl.question("Enter the second number: ", function (num2) {
            // Convert inputs to numbers
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            // Perform the operation based on the user's choice
            switch (choice) {
                case '1': // Addition
                    console.log(`Result of ${num1} + ${num2} is ${num1 + num2}`);
                    break;
                case '2': // Subtraction
                    console.log(`Result of ${num1} - ${num2} is ${num1 - num2}`);
                    break;
                case '3': // Multiplication
                    console.log(`Result of ${num1} * ${num2} is ${num1 * num2}`);
                    break;
                case '4': // Division
                    if (num2 !== 0) {
                        console.log(`Result of ${num1} / ${num2} is ${num1 / num2}`);
                    } else {
                        console.log("Error: Division by zero is not allowed.");
                    }
                    break;
                default:
                    console.log("Invalid choice! Please select 1, 2, 3, or 4.");
            }

            // Close the readline interface
            rl.close();
        });
    });
});
