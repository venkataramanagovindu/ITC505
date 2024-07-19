document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    const result = document.getElementById('result');
    
    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            const userChoice = choice.getAttribute('data-choice');
            const computerChoice = getComputerChoice();
            const winner = determineWinner(userChoice, computerChoice);
            displayResult(userChoice, computerChoice, winner);
        });
    });

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'It\'s a tie!';
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'You win!';
        } else {
            return 'You lose!';
        }
    }

    function displayResult(userChoice, computerChoice, winner) {
        result.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${winner}`;
    }
});
