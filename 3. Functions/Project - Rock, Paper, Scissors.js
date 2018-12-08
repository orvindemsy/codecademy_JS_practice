//Project : Rock, Paper, Scissors

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors')
    return userInput;
  else if (userInput == 'bomb')
    return userInput;
  else 
    console.log('You enter an invalid input');
};

//Input your choice here (rock, paper, scissors)
//Cheat code : bomb
inputYourChoice = 'rock';

const getComputerChoice = () => {
  const value = Math.floor(Math.random()*3);
  if (value == '0') {
    return 'rock';  	
  }
  else if (value == '1') {
    return 'paper';
  }
  else {
    return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice == computerChoice) {
    return 'Tied Game'
  }
  
  if (userChoice == 'bomb') {
    return 'YOU WIN!!'
  }
  if (userChoice == 'rock') {
    if (computerChoice == 'paper') {
      return 'Computer Wins'
  	} 
    else if (computerChoice == 'scissors') {
      return 'You Win'
    }
  }
  
  if (userChoice == 'paper') {
    if (computerChoice == 'rock') {
      return 'You Win' 
    }
    else if (computerChoice == 'scissor') {
      return 'Computer Wins'
    }
  }
    
  if (userChoice == 'scissors') {
    if (computerChoice == 'rock') {
      return 'Computer Wins'
    }
    else if (computerChoice == 'paper') {
      return 'You Win'
    }
  }
  }

//console.log(determineWinner(userChoice,computerChoice));

function playGame () {
  const userChoice = getUserChoice(inputYourChoice);
  const computerChoice = getComputerChoice();
  console.log(`You choosed ${userChoice}`);
  console.log(`Computer choosed ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();