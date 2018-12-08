/*
agreeOrDisagree()
Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' if the two strings are the same and 'You disagree!' if the two strings are different.
*/

// Write your function here:
function agreeOrDisagree(opinion1, opinion2) {
  if (opinion1 == opinion2){
    return 'You Agree'
  }
  else
    return 'You Disagree'
}

console.log(agreeOrDisagree('You are wonderful','You are wonderful'));

