document.getElementById("increase-width").addEventListener('mouseover', function() {
    document.querySelector('#increase-width').style.width = "100%"; 	
    // document.querySelector('#increase-width span a').style.opacity = "1"; 	
    document.querySelector('#tel-parent').style.float = "left"; 
    document.querySelector('#tel-parent').style.width = "179px"; 
    document.querySelector('#tel').style.display = "block"; 
    // document.querySelector('#tel').style.transition = "opacity 2.5s"; 	
    document.querySelector('#increase-width').style.transition = "width 1s ease-in-out"; 
    document.querySelector('#tel-parent').style.transition = "width 1s ease-in-out"; 
});
document.getElementById("increase-width").addEventListener('mouseout', function() {
// document.querySelector('#increase-width span a').style.opacity = "0"; 	
document.querySelector('#tel-parent').style.width = "47px"; 
document.querySelector('#tel').style.display = "none"; 
document.querySelector('#increase-width').style.transition = "width 1s ease-in-out"; 
document.querySelector('#tel-parent').style.transition = "width 1s ease-in-out"; 
});
