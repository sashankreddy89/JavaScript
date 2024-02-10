function subscribe(){
    const buttonElement = document.querySelector('.sub_button')
    console.log(buttonElement.innerHTML)
    if(buttonElement.innerHTML === 'Subscribe'){
        buttonElement.innerHTML = 'Subscribed'
    } else{
        buttonElement.innerHTML = 'Subscribe'
    }
}

function calculate(){
    const inputElement = document.querySelector('.input_js')
    let cost = Number(inputElement.value)
    if(cost<40){
        cost = cost + 10
    }
    document.querySelector('.total-cost').innerHTML = `$${cost}`
}

function keydownfunc(event){
    if(event.key === 'Enter'){
        calculate()
    }
}