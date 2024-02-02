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
    const phrases = ["Pretty Please", "I beg you", "Be with me, We're meant to be", 
    "I love you, be my Valentine", "Please be my Valentine", "You look perfect with me",
    "You're Beautiful, Be my Valentine", "You're the Most Beautiful"];
    
    if (answer === 'yes') {
        answerText.innerHTML = 'Yes! I\'d love to be your Valentine!';
        document.getElementById('slideshow').style.display = 'block';  // Show the slideshow
        adjustImageSize();  // Adjust image size when the answer is 'yes'
        startSlideshow();  // Start the slideshow when the answer is 'yes'
        noButton.style.display = 'none';  // Hide the "No" button
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

function adjustImageSize() {
    const images = document.querySelectorAll('#slideshow img');
    
    images.forEach(img => {
        img.style.width = '80%'; // Adjusted size to 80% of the container width
        img.style.margin = '0 auto'; // Center the image horizontally
        img.style.display = 'block'; // Ensure the image is visible
    });
}

function startSlideshow() {
    const images = document.querySelectorAll('#slideshow img');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Initial display
    showImage(currentIndex);

    // Set interval to switch images every 5 seconds
    setInterval(nextImage, 5000);
}
