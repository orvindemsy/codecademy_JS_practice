// Project : Magic Eight Ball

//You may enter your name if you want
let userName = 'Peter Parker';

userName ? console.log (`Hello ${userName}`) : console.log ('Hello!');

//Ask you question here
let userQuestion;
userQuestion='Does she really love me?';

//The question you asked is
console.log (`So you asked "${userQuestion}"`);

let randomNumber = Math.floor(Math.random()*8);

let eightBall = '';

switch (randomNumber){
  case 0 :
    eightBall = 'It is certain';
    break;
  case 1 :
    eightBall = 'It is decidedly so';
    break;
  case 2 :
    eightBall = 'Reply hazy try again';
    break; 
  case 3 :
    eightBall = 'Cannot predict now';
    break;
  case 4 :
    eightBall = 'Do not count on it';
    break;
  case 5 :
    eightBall = 'My sources say no';
    break;
  case 6 :
    eightBall = 'Outlook not so good';
    break;
  case 7 :
    eightBall = 'Signs point to yes';
    break;
}

console.log ('The answer is ' + eightBall);



