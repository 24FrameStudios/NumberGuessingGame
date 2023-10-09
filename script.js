var randNum = Math.floor(Math.random() * 100) + 1;
const resetButton = document.getElementById('reset')
const input = document.querySelector('input')
const guesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const submit = document.getElementById('submit')
var guessesLeft = document.querySelector('.guessesLeft')

guessesLeft = 10;

guesses.textContent = "Guesses Left:  " + guessesLeft

console.log(randNum)

document.addEventListener('keyup', function(KeyboardEvent) {
    if (KeyboardEvent.keyCode === 13) {
        event.preventDefault();
        document.getElementById('submit').click();
    }
});

submit.addEventListener('click', checkPlayerGuess)


function checkPlayerGuess() {
    const playerGuess = Number(input.value)
    
    if (playerGuess === randNum && guessesLeft > 0) {
        lastResult.textContent = "Congratulations! You got it right!";
        lastResult.style.backgroundColor = "green";
        submit.disabled = true;
        submit.style.backgroundColor = "grey";
        submit.style.cursor = "not-allowed";
    } else if (guessesLeft === 1) {
        lastResult.textContent = "GAME OVER!";
        lastResult.style.backgroundColor = "red";
        submit.disabled = true;
        submit.style.backgroundColor = "grey";
        submit.style.cursor = "not-allowed";
        guessesLeft--
        guesses.textContent = "Guesses Left:  " + guessesLeft;
    } else if (playerGuess < 1 || playerGuess > 100) {
        lastResult.textContent = "Please enter a guess between 1 and 100!"
        lastResult.style.backgroundColor = "yellow";
        input.value = "";
        input.focus();
    } else if (playerGuess < randNum) {
        guessesLeft--
        lastResult.textContent = "Sorry, too low!"
        lastResult.style.backgroundColor = "yellow";
        input.value = "";
        guesses.textContent = "Guesses Left:  " + guessesLeft;
        input.focus();
    } else if (playerGuess > randNum) {
        guessesLeft--
        lastResult.textContent = "Sorry, too high!"
        lastResult.style.backgroundColor = "yellow";
        input.value = "";
        guesses.textContent = "Guesses Left:  " + guessesLeft;
        input.focus();
    } else {
        lastResult.textContent = "Sorry, That's the wrong number!";
    }
}


resetButton.addEventListener('click', () => {
    window.location.reload()
})