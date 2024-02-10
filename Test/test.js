function updateButton(){
    const buttonElement = document.querySelector('button');
    setTimeout(function(){
        buttonElement.innerHTML = 'Finished'
        },1000)
}