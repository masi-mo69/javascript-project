let h1Elem = document.getElementById('title')

h1Elem.addEventListener('click' , function() {
    
    //h1Elem.setAttribute('class','red')

    h1Elem.classList.add('red')
    h1Elem.classList.remove('sm-font')
})