let computerMove = '';
function computeMove() {
    const randomGen = Math.random();

    if (randomGen > 0 && randomGen < 1 / 3) {
        return 'Rock';
    }
    else if (randomGen > 1 / 3 && randomGen < 2 / 3) {
        return 'Paper';
    }
    else if (randomGen > 2 / 3 && randomGen < 1) {
        return 'Scissors';
    }
}

const score = {
    wins: 0,
    loses:0,
    tie:0
};

let isAutoPlaying = false;
let intervalId;


function autoPlay(){
    if(!isAutoPlaying){
        intervalId = setInterval(function(){
            const computerMove = computeMove()
            playerMove(computerMove);
        },1000)
        isAutoPlaying = true;
        document.querySelector('.auto-play-button').innerHTML='Auto Play on'
    }
    else{
        clearInterval(intervalId);
        isAutoPlaying = false;
        document.querySelector('.auto-play-button').innerHTML='Auto Play'
    }
    
}

function playerMove(playerMove) {
    const computerMove = computeMove()
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

    let resultElement = document.querySelector('.result-class')
    resultElement.innerHTML = result

    let resultMove = document.querySelector('.move-class')
    resultMove.innerHTML=`You <img src="Images/${playerMove}-emoji.png" class="move-icon" > VS <img src="Images/${computerMove}-emoji.png" class="move-icon" > Computer`

    let scoreElement = document.querySelector('.score-class')
    scoreElement.innerHTML=`
    wins:${score.wins},loses:${score.loses},tie:${score.tie}`

    /*alert(`You picked ${playerMove}.Computer picked ${computerMove}.${result}.
wins:${score.wins},loses:${score.loses},tie:${score.tie}`);*/
}

function resetfunc(){
    score.wins = score.loses = score.tie = 0;

    document.querySelector('.result-class').innerHTML='' ;   
    document.querySelector('.move-class').innerHTML='' ;   
    scoreElement = document.querySelector('.score-class')
    scoreElement.innerHTML=`
    wins:${score.wins},loses:${score.loses},tie:${score.tie}`
}


