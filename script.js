const wordToGuess = 'pendu'.toUpperCase();
let guessedLetters = [];
let wrongLetters = [];

function displayWord() {
    const wordDisplay = wordToGuess.split('').map(letter => guessedLetters.includes(letter) ? letter : "_").join(' ');
    document.getElementById('wordToGuess').innerText = wordDisplay;
}

function guessLetter() {
    const input = document.getElementById('letterInput');
    const letter = input.value.toUpperCase();
    input.value = '';

    if (guessedLetters.includes(letter) || wrongLetters.includes(letter)) {
        return;
    }

    if (wordToGuess.includes(letter)) {
        guessedLetters.push(letter);
    } else {
        wrongLetters.push(letter);
        document.getElementById('wrongLetters').innerText = `Lettres fausses: ${wrongLetters.join(', ')}`;
    }

    displayWord();
    checkGameOver();
}

function checkGameOver() {
    const isComplete = wordToGuess.split('').every(letter => guessedLetters.includes(letter));

    if (isComplete) {
        alert('Bravo! Tu as gagné!');
    } else if (wrongLetters.length >= 6) {
        alert(`Dommage! Le mot était : ${wordToGuess}`);
    }
}

displayWord();
