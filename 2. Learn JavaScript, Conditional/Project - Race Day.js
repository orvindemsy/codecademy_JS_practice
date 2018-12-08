// Project : Race Day

let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;
let runnerAge = 19;

if (registeredEarly && runnerAge > 18) {
  raceNumber += 1000;
}

// Adult runners and registered early
if (registeredEarly && runnerAge > 18) {
  console.log('You will start running at 9.30 am \n');
  console.log('Your race number is '+raceNumber+'');
}
// Adult runners and registered late
else if (!registeredEarly && runnerAge >18) {
  console.log(`You will start running at 11.00 am
Your race number is ${raceNumber}`);
}
// Young runners
else if (runnerAge < 18) {
  console.log('You will start running at 12.30 pm');
  console.log('Your race number is '+raceNumber+'');
}
//For those whose age exactly 18 y.o.
else 
  console.log(`Please see registration desk`);