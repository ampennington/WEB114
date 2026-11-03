// Aliyah Pennington 11/3/2026

"use strict";

let total = 0;

for (let crate = 1; crate <= 20; crate++) {
    if (crate % 5 === 0) {
        console.log("Crate " + crate + "Handle with care.");

    } else if (crate % 2 === 0) {
        console.log("Crate " + crate + "Load crate.");

    } else {
        console.log("Crate " + crate + "Inspect crate.");
    }
    
    total = total + 1;
}   

console.log("Total crates: " + total);