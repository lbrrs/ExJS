let randomNumber = Math.floor(Math.random() * 100) + 1;

var guessArea = document.getElementById('guessArea');
var guessSubmit = document.getElementById('guessSubmit');
var finalResult = document.getElementById('finalResult');
var moreOrLess = document.getElementById('moreOrLess');


function guess () {

  let playerGuess = Number(guessArea.value);

  if (playerGuess === randomNumber) {
    finalResult.textContent = 'Bravo, vous avez trouvé le nombre !';
    moreOrLess.textContent = '';

  } else if (playerGuess < randomNumber) {
    finalResult.textContent = 'Faux !';
    moreOrLess.textContent = 'Le nombre saisi est trop petit !';
    
  } else (playerGuess > randomNumber) {
    finalResult.textContent = 'Faux !';
    moreOrLess.textContent = 'Le nombre saisi est trop grand !';
  }

  guessArea.value = '';
  guessArea.focus();
}

guessSubmit.addEventListener('click', guess);
