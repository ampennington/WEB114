"use strict";
// Aliyah Pennington 10/20/2026

/* PLANNING / PSEUDOCODE

1. Initialize score = 0

2. Question 1: Question 1. What is 5+3?

    -Variable name: sum
   - Correct answer: 8
   - How I'll validate and check the answer : I will convert with Numer(), then check it with if/else and ===

3. Use that structure for all questions.
// For questions 2-4, I will check the answer with if/else and ===, then add 1 to score if correct.
    Question 2: What is 10-4?
    -Variable name: difference
    - Correct answer: 6

    Question 3: What is 4*3?
    -Variable name: product
    - Correct answer: 12

    Question 4: What is 20/5?
    -Variable name: quotient
    - Correct answer: 4

    Question 5: What is Aliyah's dog's name?
    -Variable name: dogName
    - Correct answer: "Ellie"
    - How I'll validate and check the answer : I will convert with toLowerCase(), then check it with ===

6. Math: How will I calculate the percentage?
    - I will use the formula: (score / 5) * 100

7. Final feedback logic (if / else if / else):
    - 5 = perfect, 4 = good, 3 = special message, 1-2 = poor, 0 = fail

*/

let score = 0;

// Question 1
const sum = Number(prompt("What is 5 + 3?"));
if (sum === 8) {
    score++;
    alert("Correct!");
} else {
    alert("Incorrect.");
}

// Question 2
const difference = Number(prompt("What is 10 - 4?"));
if (difference === 6) {
    score++;
    alert("Correct!");
} else {
    alert("Incorrect.");
}

// Question 3
const product = Number(prompt("What is 4 * 3?"));
if (product === 12) {
    score++;
    alert("Correct!");
} else {
    alert("Incorrect.");
}

// Question 4
const quotient = Number(prompt("What is 20 / 5?"));
if (quotient === 4) {
    score++;
    alert("Correct!");
} else {
    alert("Incorrect.");
}

// Question 5
const dogName = prompt("What is Aliyah's dog's name?");
if (dogName.toLowerCase() === "ellie") {
    score++;
    alert("Correct!");
} else {
    alert("Incorrect.");
}

// Calculate percentage using math
const percentage = (score / 5) * 100;

// Final feedback using if / else if / else
if (score === 5) {
    alert("Perfect!");
} else if (score >= 4) {
    alert("Good job!");
} else if (score === 3) {
    alert("You got 3 out of 5. Right in the middle!");
} else if (score >= 1) {
    alert("Poor performance.");
} else {
    alert("FAIL.");
}

// Final summary alert
alert(`You scored ${score} out of 5. Your percentage is ${percentage}%.`);