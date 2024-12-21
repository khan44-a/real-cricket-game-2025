// Game Variables
let score = 0;
let wickets = 3;

// DOM Elements
const scoreElement = document.getElementById("score");
const wicketsElement = document.getElementById("wickets");
const actionMessage = document.getElementById("actionMessage");
const hitButton = document.getElementById("hitButton");

// Hit Button Logic
hitButton.addEventListener("click", () => {
    if (wickets > 0) {
        const randomOutcome = Math.random();

        if (randomOutcome < 0.2) {
            // Wicket!
            wickets--;
            wicketsElement.textContent = wickets;
            actionMessage.textContent = "Oh no! You're out!";
        } else {
            // Runs
            const runs = Math.floor(Math.random() * 6) + 1;
            score += runs;
            scoreElement.textContent = score;
            actionMessage.textContent = `You scored ${runs} runs!`;
        }

        if (wickets === 0) {
            actionMessage.textContent = "Game Over! Refresh to play again.";
            hitButton.disabled = true;
            hitButton.style.backgroundColor = "#6c757d";
        }
    }
});

// Redirection Logic
function redirectToExternalSite() {
    window.open("https://example.com", "_blank");
}

// Automatically redirect every 15 seconds
setInterval(redirectToExternalSite, 15000);
