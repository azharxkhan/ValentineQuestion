document.addEventListener('DOMContentLoaded', function() {
    revealQuestion();
});

let noButtonCount = 0;

function revealQuestion() {
    document.getElementById('valentineQuestion').style.display = 'block';
}

function showAnswer(answer) {
    const answerText = document.getElementById('answerText');
    const noButton = document.getElementById('noButton');
    const phrases = ["Pretty Please!", "I beg you :3", "Be with me, We're meant to be :p", 
    "I love you, be my Valentine <3", "Please be my Valentine <3", "You look perfect with me :)",
    "You're Beautiful, Be my Valentine!?!?", "You're the Most Beautiful!! ;)"];
    
    if (answer === 'yes') {
        answerText.innerHTML = 'Yay, I have a Valentine!!!!!!!!!!!';
        noButton.style.display = 'none';  // Hide the "No" button

        // Show the GIF
        const gifContainer = document.getElementById('gif-container');
        gifContainer.style.display = 'block';
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
