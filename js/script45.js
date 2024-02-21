let $ = document
let inputElem = $.querySelector('input')
let addTodoForm = $.querySelector('.add')
let todoUlElem = $.querySelector('.todos')

function addTOdoList(newInputElem){
    let addTodoLi = $.createElement('li')
    addTodoLi.className = 'list-group-item d-flex justify-content-between align-items-center'
    console.log(addTodoLi)

    let addTodoTitleSpan = $.createElement('span')
    addTodoTitleSpan.innerHTML = newInputElem

    let addTodoTrash = $.createElement('i')
    addTodoTrash.className = 'fa fa-trash-o delete'

    addTodoLi.append(addTodoTitleSpan,addTodoTrash)

    todoUlElem.append(addTodoLi)

    addTodoTrash.addEventListener('click' , function(event) {
        event.target.parentElement.remove();
    })
}
addTodoForm.addEventListener('submit' , function(event){
    event.preventDefault();
})

inputElem.addEventListener('keydown' , function(event){
    
    let newInputElem = event.target.value.trim()
    // console.log(event);
    if(event.keyCode === 13){ 
        if(newInputElem){
            inputElem.value = '';
            addTOdoList(newInputElem);
        }
    }
   
})