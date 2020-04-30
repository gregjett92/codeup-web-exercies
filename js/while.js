"use strict"
// =====while=======
var i = 1;
while (i < 65536) {
   console.log(i * 2);
   i += i;
}


// ======== Do While ========
var conesTOsell = Math.floor(Math.random()* 50) +50;

do {
    var conesBought = Math.floor(Math.random() * 5) +1;

    console.log(conesTOsell + ' cones left to sell');
    console.log(conesBought + ' cones sold');
    console.log('');
    if (conesTOsell < conesBought){
        console.log('Cannot sell you ' + conesBought + ' i only have ' + conesTOsell + 'left');
    }
    if(conesTOsell === 0) {
        console.log('Yay, i sold them all!');
    }
    conesTOsell = conesTOsell - conesBought;
} while (conesTOsell >=0);

"use strict"
// *Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that *number (just multiply by the numbers 1 through 10)
//*For example, showMultiplicationTable(7) should output

// function showMultiplicationTable(num) {
//   var output ="";
//   for (var i = 1; i <= 10; i +=1) {
//       output += num + " x " + i + " = " + num * i;
//       output += "\n";
//   }
//
//   return output;
// }

// console.log(showMultiplicationTable(7));

//*Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the *console whether each number is odd or even. For example:
//
// for (let i = 1; i <= 10; i++) {
//    var number = Math.floor((Math.random() * (200 - 20 + 1)) + 20);
//
//       if (number % 2 === 0) {
//           console.log(number + " is even");
//       } else {
//           console.log(number + " is odd");
//       };
// }
//
// *Create a for loop that uses console.log to create the output shown below
/*1
22
333
4444
55555
666666
7777777
88888888
999999999

*/
// for (var i = 1; i <=9; i+=1){
//     var output = "";
//     for(var j = 1; j <= i; j += i) {
//         output+= i
//     }
//     console.log(output);
// }
// ============= OR ================
// for (var i = 1; i<=9; i =+1) {
//     console.log(i.toString().repeat(i));
// }

// ============= OR ================

// Function displayNumPyramid() {
//     var output ="";
//     for (var i = 1; i<=9; i =+1) {
//         output += i.toString().repeat(i) + "\n";
//     }
//     return output;
// }
//
// console.log(displayNumPyramid());

//  *Create a for loop that uses console.log to create the output shown below.

// for(let i = 100; i >= 5; i-=5) {
//     console.log(i)
// }
