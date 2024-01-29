let $ = document

let usernameInput = $.querySelector('.username')
let passwordInput = $.querySelector('.password')

let usernameMessage = $.querySelector('.username-validation')
let passwordMessage = $.querySelector('.password-validation')

usernameInput.addEventListener('blur',function(){

    if(usernameInput.value.length < 12){
        usernameMessage.style.color = 'red'
        usernameMessage.innerHTML = 'Most Contain 12 Characters (Min)'
        usernameMessage.style.display = 'block'
    }else {
        usernameMessage.style.color = 'green'
        usernameMessage.innerHTML = 'Correct Username Value'
        usernameMessage.style.display = 'block'
    }
})

passwordInput.addEventListener('blur',function(){

    if(passwordInput.value.length < 8){
        passwordMessage.style.color ='red'
        passwordMessage.innerHTML = 'Most Contain 8 characters (Min)'
        passwordMessage.style.display = 'block'
    }else {
        passwordMessage.style.color = 'green'
        passwordMessage.innerHTML ='Correct Password Value'
        passwordMessage.style.display = 'block'
    }
})


let modal = document.querySelector('.modal')
let loginButton = document.querySelector('.login')

loginButton.addEventListener('click', function(){

    let userNameValue = usernameInput.value
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
})


/*function usernameValidation(){
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
}*/