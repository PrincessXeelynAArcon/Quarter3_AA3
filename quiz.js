document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    let score = 0;
    let correctAnswers = {
        q1: "B", // SDG 4 focus
        q2: "A", // Key goal of SDG 4
        q3: "A", // Name of project
        q4: "C", // Featured video
        q5: "B"  // Mission of Edu-Quality
    };

    for (let question in correctAnswers) {
        let selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption && selectedOption.value === correctAnswers[question]) {
            score++;
        }
    }

    let resultText = `You scored ${score} out of 5!`;
    document.getElementById("quiz-result").innerText = resultText;
});
