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
        alert(`You picked ${playerMove}.Computer picked ${computerMove}.${result}`);
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
    alert(`You picked ${playerMove}.Computer picked ${computerMove}.${result}`);
}
