var score = 0;
var userName = prompt('Welcome to my guessing game! What is your name?');

var question1 = prompt('Did I live in California?');

  if (question1.toLowerCase() === 'yes' || question1.toLowerCase() ==='y') {
    alert('You are correct! I lived in California for 6 years!');
    score = score + 1;
    console.log('The user is correct! I lived in California for 6 years!');

  } else {
    alert('You are incorrect! I lived in California for 6 years!');
    console.log('The user is incorrect! I lived in California for 6 years!');
  }

var question2 = prompt('Did I live in Oregon?');

  if (question2.toLowerCase() === 'no' || question2.toLowerCase() ==='n') {
    alert('You are correct! I did not live in Oregon.');
    score = score + 1;
    console.log('The user is correct! I did not live in Oregon.');

  } else {
    alert('You are incorrect! I did not live in Oregon!');
    console.log('The user is incorrect! I did not live in Oregon!');
  }

var question3 = prompt('Did I live in Maryland?');

  if (question3.toLowerCase() === 'yes' || question3.toLowerCase() ==='y') {
    alert('You are correct! I lived in Maryland for 2 years!');
    score = score + 1;
    console.log('The user is correct! I lived in Maryland for 2 years!');

  } else {
    alert('You are incorrect! I lived in Maryland for 2 years!');
    console.log('The user is incorrect! I lived in Maryland for 2 years!');
  }

var question4 = parseInt(prompt('How many cities did I live in, in California?'));

  if (question4 === 3) {
    alert('You guessed correct!. I lived in San Rafael, Oakland and San Jose.');
    score = score + 1;
    console.log('The user guessed correct!. I lived in San Rafael, Oakland and San Jose.');

  } else if (question4 > 3) {
    alert('You guessed too high! Hint: the number is between 1 and 5.');
    console.log('The user guessed to high. Hint: the number is between 1 and 5.');

  } else {
    alert('You guessed too low! Hint: the number is between 1 and 5.')
    console.log('The user guessed too low!. Hint: the number is between 1 and 5.')
  }

alert(userName + ', you got ' + score + ' out of 4 correct!');
console.log('The user got ' + score + ' out of 4 correct.');
