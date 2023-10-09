var randNum = Math.floor(Math.random() * 100) + 1;
const resetButton = document.getElementById('reset')
const input = document.querySelector('input')
const guesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const submit = document.getElementById('submit')
var guessesLeft = document.querySelector('.guessesLeft')

guessesLeft = 10;

guesses.textContent = "Guesses Left:  " + guessesLeft

document.addEventListener('keyup', function(KeyboardEvent) {
    if (KeyboardEvent.keyCode === 13) {
        event.preventDefault();
        document.getElementById('submit').click();
    }
});

submit.addEventListener('click', checkPlayerGuess)

resetButton.addEventListener('click', resetGame)

function checkPlayerGuess() {
    const playerGuess = Number(input.value)
    
    if (playerGuess === randNum && guessesLeft > 0) {
        lastResult.textContent = "Congratulations! You got it right!";
        lastResult.style.backgroundColor = "green";
        guessesLeft--
        guesses.textContent = "Guesses Left:  " + guessesLeft;
        setGameOver();
    } else if (guessesLeft === 1) {
        lastResult.textContent = "GAME OVER!";
        lastResult.style.backgroundColor = "red";
        guessesLeft--
        guesses.textContent = "Guesses Left:  " + guessesLeft;
        setGameOver();
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
    } else {
        guessesLeft--
        lastResult.textContent = "Sorry, too high!"
        lastResult.style.backgroundColor = "yellow";
        input.value = "";
        guesses.textContent = "Guesses Left:  " + guessesLeft;
        input.focus();
    }
}

function setGameOver() {
    submit.disabled = true;
    submit.style.backgroundColor = "grey";
    submit.style.cursor = "not-allowed";
}

function resetGame() {
    randNum = Math.floor(Math.random() * 100) + 1;
    input.value = "";
    submit.disabled = false;
    submit.style.backgroundColor = "rgb(19, 43, 94)";
    submit.addEventListener('mouseenter', () => {
        submit.style.backgroundColor = "rgb(34, 66, 131)";
    });
    submit.addEventListener('mouseleave', () => {
        submit.style.backgroundColor = "rgb(19, 43, 94)";
    });
    submit.style.cursor = "pointer";
    guessesLeft = 10;
    lastResult.textContent = "Enter a guess above!";
    lastResult.style.backgroundColor = "rgb(243, 246, 255)"
    guesses.textContent = "Guesses Left:  " + guessesLeft;
    input.focus();
}