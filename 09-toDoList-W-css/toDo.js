const toDoList = [
    {name:'Watching Salaar',
    dueDate:'22-02-2024'}
]

render()

function render(){
    let htmlText = ''

    for(let i=0;i<toDoList.length;i++){
        //const toDoObject = toDoList[i]
        const {name} = toDoList[i]
        const {dueDate} = toDoList[i]
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
        toDoList.splice(${i},1);
        render();"
        class="delete-button">Delete</button>
        
        `
        htmlText += html
    }

    console.log(htmlText)
    document.querySelector('.cont').innerHTML = htmlText;
    

}

function addTodo(){
    const inputElement = document.querySelector('.to-do')
    const dueDateElement = document.querySelector('.js-date')

    const name = inputElement.value
    const dueDate =dueDateElement.value
    toDoList.push({
        name,
        dueDate
    })

    console.log(toDoList)

    inputElement.value = ''

    render();
    
}

function func(event){
    if(event.key === 'Enter'){
        addTodo()
    }
}

