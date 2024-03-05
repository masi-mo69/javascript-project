let $ = document
const addBtn = $.getElementById('add_btn')
const removeFormBtn = $.querySelector('.close-modal')
const addTodoForm = $.getElementById('todo_form')

const todoInput = $.getElementById('todo_input')
const todoSubmit = $.getElementById('todo_submit')
const noStatusContainer = $.getElementById('no_status')

addBtn.addEventListener('click' , function() {
    addTodoForm.style.display = "block"
})

removeFormBtn.addEventListener('click' , function() {
    addTodoForm.style.display = "none"
})


function addTodo(){
   
    let todoText = todoInput.value
    let todoItem = $.createElement('div')
    
    todoItem.className = 'todo'
    todoItem.draggable = true
    todoItem.textContent = todoText
    todoItem.id = todoText
    
    
    todoItem.addEventListener("dragstart", drag)

    let closeBtn = $.createElement('span')
    closeBtn.className = 'close'
    closeBtn.textContent ='x'
    closeBtn.addEventListener("click" , removeTodo)


    todoItem.append(closeBtn)

    noStatusContainer.append(todoItem)
    
    todoInput.value = ""


}

todoSubmit.addEventListener('click' , addTodo)

function drag(event) {
    event.dataTransfer.setData('text', event.target.id);
}

function allowDrop(event){
    event.preventDefault();
}

function drop(event) {
    let targetId = event.dataTransfer.getData('text');
    let targetElem = document.getElementById(targetId);

    event.target.append(targetElem) 
}

function removeTodo(event){
    let todoItem = event.target.parentNode;
    // console.log(todoItem);
    todoItem.remove();
    // todoItem.parentNode.remove(todoItem);
}