// iterationMapping.js

// Prompt the user to input the maximum limit

let maxLimit = parseInt(prompt("Enter the Limit of the Double Loop:"));

// Declare a variable to store the sum of the counters
let addedValue;

for (let i = 0; i <= maxLimit; i++) {
  
  for (let j = 0; j <= maxLimit; j++) {
    
    // Sum the values of i and j
    
    addedValue = i + j;
  
    // Log to the console the loop points and the added value
    
    console.log(`[${i}] [${j}] Added value is ${addedValue}`);
  }
}
