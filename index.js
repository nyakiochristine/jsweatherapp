//use weather app Api
//https://api.openweathermap.org/data/2.5/weather?

//const apiUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={59043a610f3fe781ea81b365b9136a58}';
//const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=city&appid={yourkey}';
const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
       fetchWeather(location);
   }
});






function fetchWeather(location) {
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const apiKey = '6e797eb562443bbe51c5dbd4b73afb03';

    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
    

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}