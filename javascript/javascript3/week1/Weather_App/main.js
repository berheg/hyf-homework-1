

const selectBtn = document.querySelector ('.requestBtn');
const locationBtn = document.querySelector ('.locationBtn');


//function to show output with info
const answerOutput = (answer, weatherImg) => {
    let outputPlace = document.querySelector ('.output');
    outputPlace.innerHTML ='';
    
    outputPlace.appendChild (answer);
    outputPlace.appendChild (weatherImg);
    
}

let getWeather = (city) => {
    let answer = document.createElement ('div');
    let weatherImg = document.createElement ('img'); 

    if (city != '') {
        fetch ('https://api.openweathermap.org/data/2.5/weather?q=' + city + 
            '&units=metric' + '&appid=8eda52a881f152c23bb90117fd8c1043')
            .then (response => response.json())
            .then ((weatherData) => {
                console.log(weatherData);

                if (weatherData.cod === '404' ) {

                    answer.innerHTML = "Oooops... Something went wrong! Did you enter a city name correctly? ";
                    document.body.querySelector ('.output').appendChild (answer);

                } else {

                    let selectedCity = weatherData.name + ', ' + weatherData.sys.country; //getting city name
                    let cityTemp = Math.round (weatherData.main.temp) + '&deg;C' //getting temperature
                    
                    weatherImg.src = 'http://openweathermap.org/img/w/'+ weatherData.weather[0].icon +'.png'; //getting weather picture
                    
                    answer.innerHTML = selectedCity + " " + cityTemp;
                    answerOutput (answer, weatherImg);
                    
                }
            })
    } else {
        answer.innerHTML =" ";
        answer.innerHTML = "Ooops... please enter a city name";
        document.body.querySelector ('.output').appendChild (answer);
    } 
}

//getting keyword from input and selecting output 
selectBtn.addEventListener ('click', () => {
    let city = document.querySelector('.weather-by-search > input').value;
    getWeather(city);
});

// getting geolocation of user and searching for output
let localCity = document.querySelector (".local-city");

//getting geolocation
navigator.geolocation.getCurrentPosition ((position) => {
    getLocation(position.coords.latitude, position.coords.longitude)
})

//fetching location from coordinates
let getLocation = (lat, lon) => {
    fetch ('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=metric&appid=8eda52a881f152c23bb90117fd8c1043')
        .then (response => response.json())
        .then ((weatherData) => {
            localCity.value = weatherData.name;
            
        // getting local weather 
        locationBtn.addEventListener ('click', () => {
            getWeather(localCity.value);
        });
        });
}

    // how to add map where searchible location will be shown
    //how to add 'enter' event



