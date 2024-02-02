document.addEventListener('DOMContentLoaded', function() {
    revealQuestion();
});

let noButtonCount = 0;

function revealQuestion() {
    document.getElementById('valentineQuestion').style.display = 'block';
}

function showAnswer(answer) {
    const answerText = document.getElementById('answerText');
    const phrases = ["Pretty Please", "I beg you", "Be with me, we're meant to be", "I love you, be my Valentine", "Please be my Valentine"];
    
    if (answer === 'yes') {
        answerText.innerHTML = 'Yes! I\'d love to be your Valentine!';
    } else {
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        answerText.innerHTML = randomPhrase;
        moveNoButton();
    }

    document.getElementById('answer').style.display = 'block';
}

function moveNoButton() {
    const noButton = document.getElementById('noButton');
    const randomX = Math.random() * (window.innerWidth - noButton.clientWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.clientHeight);
    
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    noButtonCount++;

    // Reset button position after 5 moves
    if (noButtonCount === 5) {
        noButtonCount = 0;
        noButton.style.position = 'static';
    }
}
