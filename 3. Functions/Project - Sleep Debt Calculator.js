//Project : Rock, Paper, Scissors

const getSleepHours = day => {
  switch(day) {
    case 'monday'		 	:
			return 8;
      break;
    case 'tuesday' 		:
      return 7;
      break;
    case 'wednesday' 	:
      return 6;
      break;
    case 'thursday' 		:
      return 7;
      break;
    case 'friday' 		:
      return 8;
      break;
    case 'saturday' 	:
      return 5;
      break;
    case 'sunday'			:
      return 6;
      break;
     default					:
      return 'Input invalid'
      break;
  }
}

//console.log(getSleepHours('monday'));

const getActualSleepHours = () =>
  getSleepHours('monday') + getSleepHours('tuesday') + 		getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = idealHours => {
	return idealHours * 7;
}

idealHours = 8;

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(idealHours);
  
  if (actualSleepHours == idealSleepHours) { 
    console.log ('You got the perfect amount of sleep');
	}
  else if (actualSleepHours > idealSleepHours) {
    console.log ('You sleep more than you need don\'t be lazy!');
  	console.log ('You slept '+(actualSleepHours - idealSleepHours)+' hours more than you actually need.');
	}
  else {
    console.log ('You should get some rest');
  	console.log ('You slept '+(idealSleepHours - actualSleepHours)+' hours less than you actually need.');
  }
}

console.log(`The amount of rest you got this week 	 : ${getIdealSleepHours(idealHours)} hours`);
console.log(`The amount of ideal sleep hours per week : ${getActualSleepHours(idealHours)} hours`);
console.log('Result\t:');
calculateSleepDebt();