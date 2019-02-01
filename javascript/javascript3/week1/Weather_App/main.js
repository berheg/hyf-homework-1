

const selectBtn = document.querySelector ('button');

//function to show output with info
const answerOutput = (answer, weatherImg) => {
    let outputPlace = document.querySelector ('.output');
    outputPlace.innerHTML ='';
    
    outputPlace.appendChild (answer);
    outputPlace.appendChild (weatherImg);
    
}

//getting keyword and selecting output 
selectBtn.addEventListener ('click', () => {
    let city = document.querySelector('input').value;
    let answer = document.createElement ('div');
    let weatherImg = document.createElement ('img'); 

    if (city != '') {
        fetch ('https://api.openweathermap.org/data/2.5/weather?q=' + city + 
            '&units=metric' + '&appid=8eda52a881f152c23bb90117fd8c1043')
        .then (response => response.json())
        .then ((weatherData) => {
            console.log(weatherData);
            let selectedCity = weatherData.name; //getting city name
            let cityTemp = Math.round (weatherData.main.temp) + '&deg;C' //getting temperature
            
            weatherImg.src = 'http://openweathermap.org/img/w/'+ weatherData.weather[0].icon +'.png'; //getting weather picture
            answer.innerHTML = selectedCity + ' ' + cityTemp;
            
        answerOutput (answer, weatherImg);
            
        })
    } else {
        answer.innerHTML = "Please enter a city name";
        
    }

    
})