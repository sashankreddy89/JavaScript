let calc='';
function calcUpdate(x){
calc += x;
displayCalculation();
}

function displayCalculation(){
    document.querySelector('.display').innerHTML = calc;
}