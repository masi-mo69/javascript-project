/*let h1Elem = document.getElementById('title');
let liElems = document.getElementsByClassName('list-item');
let listItems = document.getElementsByTagName('li');
let firstListItem = document.querySelector('#title');
let ulItems = document.querySelectorAll('.list-item')
console.log(ulItems);*/


/*let h1Elem = document.getElementById('title')

h1Elem.setAttribute('class', 'js-text')

let liElems = document.getElementsByClassName('list-item')

console.log(liElems[0].setAttribute('id', 'about'))*/

/*let h1Elem = document.getElementById('title')
h1Elem.style.color = 'red'
h1Elem.style.fontSize = '60px'

let liItems = document.getElementsByClassName('list-item')
liItems[3].style.color = 'blue'
liItems[3].style.fontWeight = 'bold'*/

/*let h1Elem = document.getElementById('title')

let liItems = document.querySelectorAll('.list-item')

let inputBox = document.getElementById('input')

let selectBox = document.getElementById('select')
// console.log(liItems[2].innerHTML)
// console.log(liItems[2].innerText)
// console.log(liItems[0].textContent)

selectBox.value = 'tehran'
inputBox.value = 'vue js'

liItems[0].innerHTML = 'درباره ما'
console.log(selectBox.value)*/

/*let userName = prompt("Enter the name")

let newDivElem = document.createElement('div')

newDivElem.innerHTML = userName
newDivElem.setAttribute('id','username')
newDivElem.setAttribute('class','title')
newDivElem.style.color = 'green'
console.log(newDivElem)*/

/*let ulElem = document.querySelector('ul')

let newliItem = document.createElement('li')
newliItem.innerHTML = 'products'

let otherliItem = document.createElement('li')
otherliItem.innerHTML = 'users'

ulElem.append(newliItem)
ulElem.append(otherliItem)

console.log(newliItem)
console.log(ulElem)*/

/*let h1Elem = document.getElementById('title')

function clickFunc(){
    // alert('Click shod!')
    h1Elem.style.color = 'red'
}*/


/*let userNameInput = document.querySelector('.username')
let passwordInput = document.querySelector('.password')
let modal = document.querySelector('.modal')

function dataValidation(){
    let userNameValue = userNameInput.value
    let passwordValue = passwordInput.value

    if(userNameValue.length < 12 || passwordValue.length < 8){
        // alert('Error')
        modal.style.background = 'rgb(223, 28, 28)'
        modal.style.display = 'inline'
        modal.innerHTML = 'لطفا اطلاعات لازم را به درستی وراد نمایید'
    }else {
        modal.style.display = 'inline'
        modal.innerHTML = 'لاگین با موفقیت انجام شد'
        modal.style.background = 'green'
    }
    setTimeout(function() {
        modal.style.display = 'none'
    }, 3000);
    // console.log(userNameValue , passwordValue)
}*/

let usernameMessage = document.querySelector('.username-validation')
let passwordMessage = document.querySelector('.password-validation')

let usernameInput = document.querySelector('.username')
let passwordInput = document.querySelector('.password')

function usernameValidation() {
    // alert('username')
    if(usernameInput.value.length < 12 ){
        usernameMessage.style.color = 'red'
        usernameMessage.innerHTML = 'Most Contain 12 Characters (Min)'
        usernameMessage.style.display = 'block'
    } else {
        usernameMessage.style.color = 'green'
        usernameMessage.innerHTML = 'Correct Username Value'
    }
}

function passwordValidation() {
    // alert('password')
    if(passwordInput.value.length < 8 ){
        passwordMessage.style.color = 'red'
        passwordMessage.innerHTML = 'Most Contain 8 Characters (Min)'
        passwordMessage.style.display = 'block'
    } else {
        passwordMessage.style.color = 'green'
        passwordMessage.innerHTML = 'Correct password Value'
    }
}