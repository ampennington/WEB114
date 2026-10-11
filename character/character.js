"use strict";

// STEP 4
alert('Welcome to Aliyah\'s Adventure Character Creator. Are you ready to explore a haunted forest?');

// STEP 5
const charName = prompt('Enter your character\'s name.', "Wanderer") || "Wanderer";

// STEP 6
const pet = prompt('What pet or companion does your character have?');

// STEP 7
const superpower= prompt('What is your character\'s superpower?');

// STEP 8
const trainingYearsText = prompt('How many years has your character been training?');
const trainingYears = Number(trainingYearsText);

console.log(trainingYearsText, typeof trainingYearsText);
console.log(trainingYears, typeof trainingYears);

const powerLevel = trainingYears * 10;

// STEP 9
const likesFighting = confirm(`Does ${charName} like fighting monsters? Click OK for YES  Click Cancel for NO`);

console.log(likesFighting, typeof likesFighting);

// STEP 10
alert(`Gathering magic for ${charName}... almost ready!`);

// STEP 11
alert(`====================================
Name: ${charName}
Pet: ${pet}
Superpower: ${superpower}
Power Level: ${powerLevel}
Monster fighter? ${likesFighting ? "Yes" : "No"}

${charName} explores a foggy haunted forest with their ${pet}.
Their power, ${superpower}, helps them to face the forest's many dangers!
====================================`);