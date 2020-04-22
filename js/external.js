alert('Welcome to my website');
console.log("Hello from external Javascript");

var userInput = prompt('What is your favorite color?');

alert(`${userInput} is my favorite color too!`);

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear
// (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3,
//     how much will you have to pay?
var dailyRentalRateDollars;
var littleMermaidDaysRented;
var brotherBearDaysRented;
var herculesDaysRented;
var totalRentalCost;
totalRentalCost = (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * dailyRentalRateDollars;


//     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour.

//     Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook,
//     6 hours for Google and 4 hours for Amazon.
var googleHourlyRateDollars;
var amazonHourlyRateDollars;
var facebookHourlyRateDollars;
var googleHours;
var amazonHours;
var facebookHours;
var totalPayment;
totalPayment = googleHours * googleHourlyRateDollars;
totalPayment += amazonHours * amazonHourlyRateDollars;
totalPayment += facebookHours * facebookHourlyRateDollars;

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
var classIsNotFull; // boolean
var classScheduleDoesNotConflict; // boolean
var studentEnrolled = classIsNotFull && classScheduleDoesNotConflict;

// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
var numberOfItems; // number
var offerIsValid; // boolean
var isPremiumMember; // boolean
var productDiscountApplied = offerIsValid && (isPremiumMember || numberOfItems > 2);