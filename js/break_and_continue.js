"use strict"
var num = prompt("pick a odd number between 1 and 50");
console.log("Number to skip: " + num);
for(var i =1; i < 50; i+=2) {
    if(i == num) {
        console.log("Yikes! skipping number: " + num);
        continue;
    }
    console.log("Here is an odd Number " + i)
}