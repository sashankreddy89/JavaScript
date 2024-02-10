const toDoList = ['Watching Movie']

render()

function render(){
    let htmlText = ''

    for(let i=0;i<toDoList.length;i++){
        const temp = toDoList[i]
        const html = `
        <p>
        ${temp}
        </p>
        `
        htmlText += html
    }

    console.log(htmlText)
    document.querySelector('.cont').innerHTML = htmlText;
    

}

function addTodo(){
    const inputElement = document.querySelector('.to-do')

    const name = inputElement.value
    toDoList.push(name)

    console.log(toDoList)

    inputElement.value = ''

    render();
    
}

function func(event){
    if(event.key === 'Enter'){
        addTodo()
    }
}

