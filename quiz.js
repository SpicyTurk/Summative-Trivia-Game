let score = 0



//Ask question function that combines the array (question) of objects (choice)
//This adds a number before the choice, a space between the number and choice, as well as a new line after the question
function askQuestion(question) {
    let numbered = question.choices.map(function(choice, index) {
        return `${index + 1}. ${choice}`;
    });
    let choicesNum = numbered.join("\n");
    let userAnswer = prompt(`${question.question}\n ${choicesNum}`);
    return userAnswer
}

function checkAnswer(userAnswer, question) {
    let parsedAnswer = parseInt(userAnswer, 10);
    let adjustedAnswer = parsedAnswer - 1;
    if (adjustedAnswer === question.answer) {
        return true
    } else {
        return false
    };
}

function startGame() {
    let startTime = Date.now()
    startTimer();

    for(let i = 0; i < questions.length; i++) {
        let elapsed = (Date.now() - startTime) / 1000;
        if (elapsed >= 30) {
            break
        } 
        let currentQuestion = questions[i];
        let returnedAnswer = askQuestion(currentQuestion);
        let result = checkAnswer(returnedAnswer, currentQuestion);
        if (result === true) {
            score += 1;
        }
    }
    endGame();
}

function endGame() {
    stopTimer();
    document.getElementById("finalScore").textContent = `You have scored ${score} out of 5!`;
}