// console.log(document.body)
// let colorsArray = ['red','green','blue','gray','brown','pink']
// let randomColorIndex


// setInterval(function() {
//     randomColorIndex = Math.floor(Math.random() * 6)
//     document.body.style.backgroundColor = colorsArray[randomColorIndex];
// }, 2000);

let redValue , greenValue , blueValue

setInterval(function(){
    redValue = Math.floor(Math.random() * 256)
    greenValue = Math.floor(Math.random() * 256)
    blueValue = Math.floor(Math.random() * 256)

    console.log('rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')')
    
    document.body.style.backgroundColor = 
    'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')'

},2000);