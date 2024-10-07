// Prompt the user for their score

const score = parseInt(prompt("Enter your score: "));

// Determine the equivalent grade using ternary operators
let grade =score >= 97 ? "1.00 Excellent" :
            score >= 94 ? "1.25 Excellent" : 
            score >= 91 ? "1.50 Above Average" : 
            score >= 88 ? "1.75 Above Average" : 
            score >= 85 ? "2.00 Average" :
            score >= 82 ? "2.25 Average" : 
            score >= 79 ? "2.50 Below Average" : 
            score >= 76 ? "2.75 Below Average" : 
            score === 75 ? "3.00 Below Average" :
            score >= 72 ? "4.00 Poor" : 
            "5.00 Poor";

// Determine the final remarks using if-else if statements
let remarks;
if (score >= 90) {
  remarks = "HIGH PASS, Candidate for Cum Laude";
} else if (score >= 80) {
  remarks = "AVERAGE PASS";
} else if (score >= 75) {
  remarks = "LOW PASS";
} else {
  remarks = "FAILED, Needs Improvement";
}

// Log the result to the console
console.log("Result:");
console.log(`Your equivalent Grade is “${grade}” ${grade === "1.00" || grade === "1.25" ? "Excellent" : grade === "1.50" || grade === "1.75" ? "Above Average" : grade === "2.00" || grade === "2.25" ? "Average" : grade === "2.50" || grade === "2.75" || grade === "3.00" ? "Below Average" : grade === "4.00" || grade === "5.00" ? "Poor" : ""}`);
console.log(`Final Remarks: ${remarks}`);
