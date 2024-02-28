const contextMenu = document.getElementById('contextMenu')

function contextHandler(event){
    event.preventDefault();

    if(contextMenu.style.display === 'none'){
        contextMenu.style.left = event.pageX + 'px'
        contextMenu.style.top = event.pageY + 'px'

        contextMenu.style.display = 'block'
    }else{
        
        contextMenu.style.left = event.pageX + 'px'
        contextMenu.style.top = event.pageY + 'px'
    }
}

function clickcontextMenu(){
    contextMenu.style.display = 'none'
}

function keydowncontextMenu(event){
    if(event.keyCode === 27){
        contextMenu.style.display = 'none'
    }
}

document.body.addEventListener('contextmenu' , contextHandler)
document.body.addEventListener('click' , clickcontextMenu)
document.body.addEventListener('keydown' , keydowncontextMenu)