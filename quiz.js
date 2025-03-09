document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let score = 0;
    let correctAnswers = {
        q1: "B",
        q2: "A", 
        q3: "A",
        q4: "C", 
        q5: "B" 
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
