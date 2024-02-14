let $ = document

let firstValue = $.querySelector('.C')
let secondValue = $.querySelector('.F')
let converter = $.querySelector('#converter')
let result = $.querySelector('.result')
let convertButton = $.querySelector('.convertButton')
let resetButton = $.querySelector('.resetButton')
let changeButton = $.querySelector('.changeButton')

function convert(){
    // console.log('convert')
    if(converter.value === ''){
        result.innerHTML = 'Insert Correct Value'
        result.style.color = '#993300'
    } else {
        if(firstValue.innerHTML === '°C'){
            let resultValue = (converter.value * 1.8) + 32
            result.style.color = 'rgb(255 , 255 , 102)'
            result.innerHTML = converter.value + '°C To ' + resultValue + '°F'
        }else{
            let resultValue = (converter.value - 32) * 5 / 9
            result.style.color = 'rgb(255 , 255 , 102)'
            result.innerHTML = converter.value + '°F To ' + resultValue.toFixed(2) + '°C'
        }
    }
}
function reset(){
    // console.log('reset')
    result.innerHTML = ''
    converter.value = ''
}
function swap(){
    // console.log('change')
    if(firstValue.innerHTML === '°C'){
        firstValue.innerHTML = '°F'
        secondValue.innerHTML = '°C'
        converter.setAttribute('placeholder','°F')
        document.title = 'SalzLearn| Js | °F to °C'
    }else {
        firstValue.innerHTML = '°C'
        secondValue.innerHTML = '°F'
        converter.setAttribute('placeholder','°C')
        document.title = 'SalzLearn| Js | °C to °F'
    }
}

convertButton.addEventListener('click', convert)
resetButton.addEventListener('click', reset)
changeButton.addEventListener('click', swap)