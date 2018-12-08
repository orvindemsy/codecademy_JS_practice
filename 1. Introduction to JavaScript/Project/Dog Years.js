//This code trasnlate my age in dog years.

//my age
var myAge = 24;

//early years experienced by human
let earlyYears = 2;

//the early years experienced by dogs
earlyYears *= 10.5;

//later years experienced by human
let laterYears = myAge - 2;

//later years experienced by dogs
laterYears *= 4;

console.log (earlyYears);
console.log (laterYears);

//my age in dog years (total years experienced by dogs)
var myAgeinDogYears = earlyYears + laterYears;

var myName = 'Orvin Demsy'.toLowerCase();

console.log (`My name is ${myName}. I am ${myAge} years old 
in human years which is ${myAgeinDogYears} old in dog years.`);
