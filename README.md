# Summative-Trivia-Game

Final lab for module two, a Trivia Game that limits time to answer and allows the user to take a quiz, answer the questions and receive their results.

How to Play

    Open index.html in your browser.

    Click the Start Quiz button.

    A pop-up box will show you each question along with numbered answer choices.

    Type the number of the answer you think is correct (e.g., type 2 
    if you think choice 2 is right) and press OK.

    After all 5 questions are answered (or time runs out), your final score will be displayed on the page.

A Known Limitation:

This game uses prompt() to collect the player's answers, however, because of this prompt() freezes the entire page while it's open. This means:

The visible countdown timer will appear to "pause" while a question is on screen, and then jump forward once the player answers.
The 30-second time limit is checked between questions, not during one. So if a player takes 45 seconds to answer a single question, the game won't interrupt them mid-question.

