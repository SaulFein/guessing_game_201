
var score = 0;
var userName = prompt('Welcome to my guessing game! What is your name?');
var qs = [['Did I live in California?', 'yes', 'y', 'You are correct! I lived in California for 6 years' + '<br><img width = "200px" src="Img/ca_flag.png">', 'green', 'You are incorrect! I lived in California for 6 years!', 'red' ], ['Did I live in Oregon?', 'no', 'n', 'You are correct! I did not live in Oregon.' + '<br><img width = "200px" src="Img/no_or.jpg">', 'green', 'You are incorrect! I did not live in Oregon!', 'red'], ['Did I live in Maryland?', 'yes', 'y', 'You are correct! I lived in Maryland for 2 years!'+ '<br><img width = "200px" src="Img/md_flag.gif">', 'green', 'You are incorrect! I lived in Maryland for 2 years!', 'red'], ['How many cities did I live in, in California?', 'three', '3', 'You are correct!. I lived in San Rafael, Oakland and San Jose.' + '<br><Img width = "200px" src="Img/number_3.jpeg">', 'green', 1, 'You are incorrect! I lived in 3 cities in California!', 'red' ], ['Did I attend Issaquah High School?', 'yes', 'y', 'You are correct! I did attend IHS' + '<br><img width = "200px" src="Img/issaquah.jpg">', 'green', 'You are incorrect! I did attend IHS', 'red'], ['How many colleges did I attend in California?', 'two', '2', 'You are correct!. I attended Dominican University of California and Ex\'pression College for Digital Arts.' + '<br><img width = "200px" src="Img/number_2.jpeg">', 'green', 'You are incorrect!. I attended two colleges', 'red']];

  function displayQuestions(){
    for (var i = 0; i < qs.length; i++) {
      var nextQ = document.createElement('h2');
      var nextA = document.createElement('p');

      nextQ.innerHTML = qs[i][0];
      document.body.appendChild(nextQ);

      var user = prompt(qs[i][0]);
      if (user.toLowerCase() === qs[i][1] || user.toLowerCase() === qs[i][2]) {
        nextA.innerHTML = qs[i][3];
        nextA.className = "green";
        score++;
        console.log('The user answered ' + user + ' the users score is ' + score);
      } else {
        nextA.innerHTML = qs[i][5];
        nextA.className = "red";
        console.log('The user answered ' + user + ' the correct answer was ' + qs[i][1]);

      }
      document.body.appendChild(nextA);
    }
  }

displayQuestions();

alert(userName + ', you got ' + score + ' out of 6 correct!');
console.log('The user got ' + score + ' out of 6 correct.');











