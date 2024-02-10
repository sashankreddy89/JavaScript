let computerMove = '';
function computeMove() {
    const randomGen = Math.random();

    if (randomGen > 0 && randomGen < 1 / 3) {
        computerMove = 'Rock';
    }
    else if (randomGen > 1 / 3 && randomGen < 2 / 3) {
        computerMove = 'Paper';
    }
    else if (randomGen > 2 / 3 && randomGen < 1) {
        computerMove = 'Scissors';
    }
}
const score = {
    wins: 0,
    loses:0,
    tie:0
};
function playerMove(playerMove) {
    let result = '';
    if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie';
        }
        else if (computerMove === 'Paper') {
            result = 'You lose';
        }
        else if (computerMove = 'scissors') {
            result = 'You win';
        }
    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You win';
        }
        else if (computerMove === 'Paper') {
            result = 'Tie';
        }
        else if (computerMove = 'scissors') {
            result = 'You lose';
        }
    } else if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You lose';
        }
        else if (computerMove === 'Paper') {
            result = 'You win';
        }
        else if (computerMove = 'scissors') {
            result = 'Tie';
        }
    }

    if(result === 'You win'){
        score.wins += 1;
    } else if(result === 'You lose'){
        score.loses += 1;
    } else if(result === 'Tie'){
        score.tie += 1;
    }

    alert(`You picked ${playerMove}.Computer picked ${computerMove}.${result}.
wins:${score.wins},loses:${score.loses},tie:${score.tie}`);
}
