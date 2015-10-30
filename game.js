
var score = 0;
var userName = prompt('Welcome to my guessing game! What is your name?');


function ques1() {
var question1 = prompt('Did I live in California?');

  if (question1.toLowerCase() === 'yes' || question1.toLowerCase() ==='y') {
    alert('You are correct! I lived in California for 6 years!');
    score = score + 1;
    console.log('The user is correct! I lived in California for 6 years!');

  } else {
    alert('You are incorrect! I lived in California for 6 years!');
    console.log('The user is incorrect! I lived in California for 6 years!');
  }
}

function ques2(){
var question2 = prompt('Did I live in Oregon?');

  if (question2.toLowerCase() === 'no' || question2.toLowerCase() ==='n') {
    alert('You are correct! I did not live in Oregon.');
    score = score + 1;
    console.log('The user is correct! I did not live in Oregon.');

  } else {
    alert('You are incorrect! I did not live in Oregon!');
    console.log('The user is incorrect! I did not live in Oregon!');
  }
}

function ques3() {
var question3 = prompt('Did I live in Maryland?');

  if (question3.toLowerCase() === 'yes' || question3.toLowerCase() ==='y') {
    alert('You are correct! I lived in Maryland for 2 years!');
    score = score + 1;
    console.log('The user is correct! I lived in Maryland for 2 years!');

  } else {
    alert('You are incorrect! I lived in Maryland for 2 years!');
    console.log('The user is incorrect! I lived in Maryland for 2 years!');
  }
}

function ques4() {
var question4 = parseInt(prompt('How many cities did I live in, in California?'));

  while (isNaN(question4)) {
    alert('Please use numbers only to answer this question!');
    question4 = parseInt(prompt('How many cities did I live in, in California?'));
  }

  if (question4 === 3) {
    alert('You is correct!. I lived in San Rafael, Oakland and San Jose.');
    score = score + 1;
    console.log('The user is correct!. I lived in San Rafael, Oakland and San Jose.');

  } else if (question4 > 3) {
    alert('You guessed too high! Hint: the number is between 1 and 5.');
    console.log('The user guessed too high. Hint: the number is between 1 and 5.');

  } else {
    alert('You guessed too low! Hint: the number is between 1 and 5.')
    console.log('The user guessed too low!. Hint: the number is between 1 and 5.')
  }
}

function ques5() {
var question5 = prompt('Did I attend Issaquah High School?');

  if (question5.toLowerCase() === 'yes' || question5.toLowerCase() ==='y') {
    alert('You are correct! I did attend Issaquah High School!');
    score = score + 1;
    console.log('The user is correct! I did attend Issaquah High School!');

  } else {
    alert('You are incorrect! I did attend Issaquah High School!');
    console.log('The user is incorrect! I did attend Issaquah High School!');
  }
}

function ques6(){
var question6 = parseInt(prompt('How many colleges did I attend in California?'));

  while (isNaN(question6)) {
    alert('Please use numbers only to answer this question!');
    question6 = parseInt(prompt('How many colleges did I attend in California?'));
  }

  if (question6 === 2) {
    alert('You are correct!. I attended Dominican University of California and Ex\'pression College for Digital Arts.');
    score = score + 1;
    console.log('The user is correct!. I attended Dominican University of California and Ex\'pression College for Digital Arts.');

  } else if (question6 > 2) {
    alert('You guessed too high! Hint: the number is between 1 and 3.');
    console.log('The user guessed too high. Hint: the number is between 1 and 3.');

  } else {
    alert('You guessed too low! Hint: the number is between 1 and 3.')
    console.log('The user guessed too low!. Hint: the number is between 1 and 3.')
  }
}

ques1();
ques2();
ques3();
ques4();
ques5();
ques6();

alert(userName + ', you got ' + score + ' out of 6 correct!');
console.log('The user got ' + score + ' out of 6 correct.');
