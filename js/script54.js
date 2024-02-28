let $ = document

const button = $.querySelector('button')
const modalParent = $.querySelector('.modal-parent')
const x = $.querySelector('.X')
const sectionElem = $.querySelector('section')

function showModal(){
    modalParent.style.display = 'block'
    sectionElem.style.filter = 'blur(20px)'
    button.blur()
}

function hidemodalwith(){
    modalParent.style.display = 'none'
    sectionElem.style.filter = 'blur(0px)'
}

function hidemodalwithEsc(){
    modalParent.style.display = 'none'
    sectionElem.style.filter = 'blur(0px)'
}

button.addEventListener('click' , showModal)
x.addEventListener('click' , hidemodalwith)
document.body.addEventListener('keyup' , hidemodalwithEsc )