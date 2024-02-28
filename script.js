const wordToGuess = "Je m'en vais fin Avril".toUpperCase();
let guessedLetters = [];
let wrongLetters = [];

function displayWord() {
    const wordDisplay = wordToGuess.split('').map(letter => guessedLetters.includes(letter) ? letter : "_").join(' ');
    document.getElementById('wordToGuess').innerText = wordDisplay;
}

function updateWrongLetters() {
    document.getElementById('wrongLetters').innerText = `Lettres fausses: ${wrongLetters.join(', ')}`;
}

document.getElementById('letterInput').addEventListener('input', function(e) {
    const letter = e.target.value.toUpperCase();
    e.target.value = '';

    if (guessedLetters.includes(letter) || wrongLetters.includes(letter)) {
        return;
    }

    if (wordToGuess.includes(letter)) {
        guessedLetters.push(letter);
    } else {
        wrongLetters.push(letter);
        updateWrongLetters();
    }

    displayWord();
    checkGameOver();
});

function checkGameOver() {
    const isComplete = wordToGuess.split('').every(letter => guessedLetters.includes(letter));

    if (isComplete) {
        alert('Bravo! Tu as gagné!');
    } else if (wrongLetters.length >= 6) {
        alert(`Dommage! Le mot était : ${wordToGuess}`);
    }
}

displayWord();
updateWrongLetters();
