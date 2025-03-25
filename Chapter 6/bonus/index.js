// Initialize game variables
let score = 0; // Player's score
let lives = 3; // Player's lives
let correctColor; // The correct color to guess

// Function to generate a random RGB color
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to set up a new game
function setupGame() {
    score = 0; // Reset score
    lives = 3; // Reset lives
    document.getElementById("score").innerText = `Score: ${score}`;
    document.getElementById("message").innerText = "";
    document.getElementById("replayButton").classList.add("hidden");
    nextRound(); // Start the first round
}

// Function to start the next round
function nextRound() {
    correctColor = generateRandomColor(); // Generate the correct color
    document.getElementById("rgbValue").innerText = correctColor; // Display RGB value

    // Generate color options
    const colorOptions = [correctColor];
    while (colorOptions.length < 3) {
 const randomColor = generateRandomColor();
        if (!colorOptions.includes(randomColor)) {
            colorOptions.push(randomColor);
        }
    }

    // Shuffle color options
    colorOptions.sort(() => Math.random() - 0.5);

    // Display color options
    const colorOptionsContainer = document.getElementById("colorOptions");
    colorOptionsContainer.innerHTML = ""; // Clear previous options
    colorOptions.forEach(color => {
        const colorDiv = document.createElement("div");
        colorDiv.classList.add("color-option");
        colorDiv.style.backgroundColor = color; // Set background color
        colorDiv.addEventListener("click", () => handleColorClick(color));
        colorOptionsContainer.appendChild(colorDiv);
    });
}

// Function to handle color option click
function handleColorClick(selectedColor) {
    const gameContainer = document.getElementById("gameContainer");
    gameContainer.style.backgroundColor = selectedColor; // Change background color

    if (selectedColor === correctColor) {
        score++; // Increase score for correct guess
        document.getElementById("message").innerText = "Correct!";
    } else {
        lives--; // Decrease lives for incorrect guess
        document.getElementById("message").innerText = "Incorrect!";
    }

    document.getElementById("score").innerText = `Score: ${score}`;
    
    if (lives > 0) {
        setTimeout(nextRound, 1000); // Proceed to next round after a short delay
    } else {
        endGame(); // End the game if no lives left
    }
}

// Function to end the game
function endGame() {
    document.getElementById("message").innerText = "Game Over!";
    document.getElementById("replayButton").classList.remove("hidden"); // Show replay button
}

// Event listener for replay button
document.getElementById("replayButton").addEventListener("click", setupGame);

// Start the game on page load
setupGame();