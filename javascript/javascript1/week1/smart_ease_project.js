// Age-ify (A future age calculator)
console.log();
console.log("*** A FUTURE AGE CALCULATOR ***");

let yearOfBirth = 1986; //number
let yearFuture = 2045; //number

let age = yearFuture - yearOfBirth;

console.log ("You will be " + age + " years old in " + yearFuture);

// Goodboy - Oldboy (A dog age calculator)
console.log();
console.log("--------------------------------------------------");
console.log("*** A DOG AGE CALCULATOR ***");

let dogYearOfBirth = 2008;
let dogYearFuture = 2045;
let dogYear = dogYearFuture - dogYearOfBirth;
let choice = true;

let shouldShowResultInDogYears = 7 * dogYear;

if (choice) {
    console.log( "Your dog will be " + shouldShowResultInDogYears + " dog years old in " + dogYearFuture);
} else {
    console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture);
}

//Housey pricey (A house price estimator)
console.log();
console.log("--------------------------------------------------");
console.log("*** HOUSE PRICE CALCULATION ***");
console.log("Peter's proposition")


let houseDepthP = 10;
let houseHeightP = 10;
let houseWidthP = 8;
let gardenSizeInM2P = 100;

let volumeInMetersP = houseDepthP * houseHeightP * houseWidthP; 
let housePriceP = volumeInMetersP * 2.5 * 1000 + gardenSizeInM2P * 300;

if (housePriceP > 2500000) {
    console.log("\tPeter has got a terrific sale price. Actual price of the house is MUCH MORE BIGGER: " + housePriceP);
} else if (housePriceP < 2500000) {
    console.log("\tPeter, the cost of the house is overwhelming. Actual price of the house should be " + housePriceP);
} else {
    console.log("\tPeter, the real price is calculated exactly as sales one (2.500.000)");
}

console.log();
console.log("Julia's proposition")

let houseDepthJ = 11;
let houseHeightJ = 8;
let houseWidthJ = 5;
let gardenSizeInM2J = 70;

let volumeInMetersJ = houseDepthJ * houseHeightJ * houseWidthJ; 
let housePriceJ = volumeInMetersJ * 2.5 * 1000 + gardenSizeInM2J * 300;

if (housePriceJ > 1000000) {
    console.log("\tJulia has got a terrific sale price. Actual price of the house is MUCH MORE BIGGER: " + housePriceJ);
} else if (housePriceJ < 1000000) {
    console.log("\tJulia, the cost of the house id overwhelming. Actual price of the house should be " + housePriceJ);
} else {
    console.log("\tJulia, the real price is calculated exactly as sales one (1.000.000)");
}

//Ez Namey (Startup name generator)
console.log();
console.log("--------------------------------------------------");
console.log("*** STARTUP NAME GENERATOR ***");

let firstWords = ['fixing', 'sunny', 'smiley', 'great', 'boring', 'bossy', 'Juli', 'easy', 'awesome', 'brilliant'];
let secondWords = ['coder', 'king', 'sun', 'zulu', 'cat', 'star', 'Cesar', 'sky', 'truck', 'human' ];
const randomNumber = Math.floor(Math.random() * 10) + 0
let randomNumber1 = Math.floor(Math.random() * 10) + 0

let startupName1 = firstWords[randomNumber] + " " + secondWords[randomNumber1];

console.log(startupName1);
