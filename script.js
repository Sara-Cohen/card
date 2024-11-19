const cardsContainer = document.getElementById("cards-container");
const body = document.body;
const questions = [
    "What is 2 + 2?",
    "What is the capital of France?",
    "Who wrote 'Hamlet'?",
    "What is the square root of 16?",
    "What is the color of the sky?",
    "What is 5 x 5?",
    "What is the largest planet in our solar system?",
    "What is the speed of light?",
    "Who discovered gravity?",
    "What is the boiling point of water?"
];

// Array of three possible background colors
const backgroundColors = ["#FFEB3B", "#c34a8b", "#9c03f4"];

// Function to generate random cards
function loadNewCards() {
    // Change the background color (cycle through three colors)
    const randomColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
    body.style.backgroundColor = randomColor;

    // Clear previous cards
    cardsContainer.innerHTML = "";

    // Shuffle and select 4 random questions
    const chosenQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 4);

    // Create cards
    chosenQuestions.forEach((question, index) => {
        const card = document.createElement("div");
        card.className = "card";

        const front = document.createElement("div");
        front.className = "card-content card-front";
        front.textContent = `Card ${index + 1}`;

        const back = document.createElement("div");
        back.className = "card-content card-back";
        back.textContent = question;

        card.appendChild(front);
        card.appendChild(back);

        // Flip the card on click
        card.onclick = () => flipCard(card);

        cardsContainer.appendChild(card);
    });
}

// Function to flip the card and reveal the question
function flipCard(card) {
    card.classList.add("flipped");
}

// Load the initial set of cards
loadNewCards();
