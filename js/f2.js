
// ===== MINI PROBLEMS
// Write a function, returnFive, that returns the number five. No inputs should be defined.
// function returnFive () {
//     return 5;
// }
// Write a function, isFive, that takes in an input and returns the boolean value true if the passed argument is the number 5 or the string "5". Return false otherwise.
// function isFive (num) {
//     if (5 == num) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
//     console.log(isFive(num: 5), true);
//     console.log(isFive(num: 4), false);
//     console.log(isFive(num: '5'), true);
// Write a function, isShortWord, that takes in a string and returns the boolean value true if the passed argument is shorter than 5 characters. Return false otherwise.
// function isShortWord (str) {
//     return str.length > 5;
//
// }
// console.log(isShortWord(str: burger ), false);

// Write a function, isSameLength, that takes in two string inputs and returns the boolean value true if the passed arguments are the same length. Return false otherwise.
function isSameLength (str1, str2) {
    return str1.length === str2.length
}

console.log(isFive('me', 'us'), true);
console.log(isFive('fun', 'play'), false);
console.log(isFive('us','me' ), true);


// Write a function, getSmallerSegment, that takes in a string and a number input. The function should return a substring of the first argument that is as many characters long as the second argument in lowercase.
function getSmallerSegments (str, length) {
      return str.substring(0, length).toLowerCase();
};

console.log(getSmallerSegments('pancake', 3), pan);
console.log(getSmallerSegments('example', 2), ex);
console.log(getSmallerSegments('yesterday',5 ), yeste);
// example input: getSmallerSegment("Codeup", 3)
// example output: "cod"

(function(){
    
})();