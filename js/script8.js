let citiesData = {
    tehran: {city: 'Tehran', temp: 12, weather: 'Sunny', humidity: 23, windSpeed: 32},
    shiraz: {city: 'Shiraz', temp: 9, weather: 'Windy', humidity: 12, windSpeed: 14},
    tabriz: {city: 'Tabriz', temp: 1, weather: 'Rainy', humidity: 43, windSpeed: 12},
    mashhad: {city: 'Mashhad', temp: 16, weather: 'Snowy', humidity: 7, windSpeed: 18},
    esfehan: {city: 'Esfehan', temp: 23, weather: 'Sunny', humidity: 15, windSpeed: 24},
}

let $ = document
let searchBtn = $.getElementById('search')
let searchBar = $.querySelector('.search-bar')

searchBtn.addEventListener('click',function(){
    // console.log(searchBar.value)
    let searchBarValue = searchBar.value
    let maincityData = citiesData[searchBarValue]
    
    if(maincityData){
        $.querySelector('.city').innerHTML ="Weather is: " + maincityData.city
        $.querySelector('.temp').innerHTML = maincityData.temp + '°C'
        $.querySelector('.description').innerHTML = maincityData.weather
        $.querySelector('.humidity').innerHTML ="Humidity: " + maincityData.humidity
        $.querySelector('.wind').innerHTML = "Wind Speed: " + maincityData.windSpeed + 'km/h'
        $.querySelector('.weather').classList.remove('loading')
    } else {
        alert('شهر مورد نظر را به درستی وارد نمایید')
    }
    console.log()
})