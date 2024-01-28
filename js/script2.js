let $ = document

let usernameInput = $.querySelector('.username')
let passwordInput = $.querySelector('.password')

let usernameMessage = $.querySelector('.username-validation')
let passwordMessage = $.querySelector('.password-validation')

function usernameValidation(){
    // console.log('blur')
    if(usernameInput.value.length < 12){
        usernameMessage.style.color = 'red'
        usernameMessage.innerHTML = 'Most Contain 12 Characters (Min)'
        usernameMessage.style.display = 'block'
    }else {
        usernameMessage.style.color = 'green'
        usernameMessage.innerHTML = 'Correct Username Value'
        usernameMessage.style.display = 'block'
    }
}

function passwordValidation(){
    if(passwordInput.value.length < 8){
        passwordMessage.style.color ='red'
        passwordMessage.innerHTML = 'Most Contain 8 characters (Min)'
        passwordMessage.style.display = 'block'
    }else {
        passwordMessage.style.color = 'green'
        passwordMessage.innerHTML ='Correct Password Value'
        passwordMessage.style.display = 'block'
    }
}