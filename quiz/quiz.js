
// Aliyah Pennington 10/18/26
"use strict";

/*
PLANNING / PSEUDOCODE

1. Set the score to 0.
2. Question 1: Am I a morning person or night owl?
   - Variable: favoriteTime
   - Correct answer: night owl
   - Convert the answer to lowercase and check for blanks.

3. Question 2: Am I an extrovert, introvert, or ambivert?
   - Variable: personalityType
   - Correct answer: introvert
   - Convert the answer to lowercase before comparing.

4. Question 3: What is my favorite programming language?
   - Variable: favoriteLanguage
   - Correct answer: JavaScript
   - Accept answers regardless of capitalization.

5. Question 4: What is my dream job?
   - Variable: dreamJob
   - Correct answer: UI/UX Designer
   - Accept answers containing UI/UX or designer.
6. Calculate the percentage.
7. Give feedback based on the score.

Logical operators:
&& checks that an answer is not blank.
|| accepts two possible answers.
*/

// Step 1: Set the score to 0.
let score = 0;

console.log("=== My Quiz Game ===");

// Step 2: Question 1
let favoriteTime = prompt("Am I a morning person or night owl?");

if (favoriteTime && favoriteTime.trim() !== "") {
    if (favoriteTime.toLowerCase().trim() === "night owl") {
        console.log("Question 1: Correct!");
        score++;
    } else {
        console.log("Question 1: Incorrect.");
    }
} else {
    alert("Question 1 cannot be blank!");
}

// Step 3: Question 2
let personalityType = prompt("Am I an extrovert, introvert, or ambivert?");

if (personalityType && personalityType.trim() !== "") {
    if (personalityType.toLowerCase().trim() === "introvert") {
        console.log("Question 2: Correct!");
        score++;
    } else {
        console.log("Question 2: Incorrect.");
    }
} else {
    alert("Question 2 cannot be blank!");
}

// Step 4: Question 3
let favoriteLanguage = prompt("What is my favorite programming language?");

if (favoriteLanguage && favoriteLanguage.trim() !== "") {
    if (favoriteLanguage.toLowerCase().trim() === "javascript") {
        console.log("Question 3: Correct!");
        score++;
    } else {
        console.log("Question 3: Incorrect.");
    }
} else {
    alert("Question 3 cannot be blank!");
}

// Step 5: Question 4
let dreamJob = prompt("What is my dream job?");

if (dreamJob && dreamJob.trim() !== "") {
    if (dreamJob.toLowerCase().trim().includes("designer") ||
        dreamJob.toLowerCase().trim().includes("ui/ux")) {
        console.log("Question 4: Correct!");
        score++;
    } else {
        console.log("Question 4: Incorrect.");
    }
} else {
    alert("Question 4 cannot be blank!");
}

// Step 6: Calculate percentage.
let percentage = (score / 4) * 100;

console.log("Score: " + score + "/4");
console.log("Percentage: " + percentage + "%");

// Step 7: Give feedback.
if (score >= 3 && score <= 4) {
    alert("Amazing job! You got " + score + " correct!");
} else if (score > 0) {
    alert("Good effort! You got " + score + " correct!");
} else {
    alert("Keep guessing... You got 0 correct.");
}

// Final summary.
alert("Quiz complete! Score: " + score + "/4 (" + percentage + "%)");
