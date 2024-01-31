let countrySelectBox = document.querySelector('.countrySelect')
let citySelect = document.querySelector('.citySelect')

let countriesData = {
    Iran : ['Tehran' , 'Yazd' , 'Tabriz' , 'Kashan' , 'Zanjan'],
    Turkey : ['Istanbol' , 'Ezmir' , 'Ankara' , 'Antalya'],
    US : ['Los Angles' , 'San Diego' , 'Chicago'],
};

countrySelectBox.addEventListener("change" , function() {
   // console.log(countrySelectBox.value)
    
    if(countrySelectBox.value === "Please Select"){

        citySelect.innerHTML = "";
        citySelect.innerHTML += "<option>Select City</option>";
    }else {

        let mainCountryName = countrySelectBox.value
        let mainCountryCities = countriesData[mainCountryName]
        // console.log(mainCountryCities)
        citySelect.innerHTML = "";
    
    
        mainCountryCities.forEach(function(city){
            // console.log(city)
            citySelect.innerHTML += '<option>' + city +'</option>'
        });
    }
});
