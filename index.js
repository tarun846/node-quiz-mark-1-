const readlinesync = require("readline-sync");
const userName = readlinesync.question("What is your name? ");
console.log("Welcome " + userName + "! Lets see how well do you know me!");

let score = 0;

const questionAnswerList = [{
  question: "How old am I? ",
  answer: "20"
}, {
  question: "My favourite SuperHero would be? ",
  answer: "FATHER"
},

{
  question: "Where do I live? ",
  answer: "PURI"
},
{
  question: "Which is my favorite color? ",
  answer: "ORANGE"
},
{
  question: "Which is my favorite food? ",
  answer: "PANNER"
}]

for (let i = 0; i < questionAnswerList.length; i++) {
  var userAnswer = readlinesync.question(questionAnswerList[i].question);
  if (userAnswer.toUpperCase() === questionAnswerList[i].answer) {
    score += 1;
    console.log("Correct!\nCurrent Score : " + score);
    console.log("-------------------------");
  }
  else {
    console.log("Inorrect!\nCurrent Score : " + score);
    console.log("-------------------------");
  }
}

console.log("Your Total Score : " + score);


