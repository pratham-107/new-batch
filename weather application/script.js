// script.js
document.getElementById('get-weather-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiKey = '7a0bc1f6acbfc1b764de37415e9e3ce5'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    // https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
    

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weather-info');
            if (data.cod === 200) {
                const temperature = data.main.temp;
                const weatherDescription = data.weather[0].description;
                const icon = data.weather[0].icon;
                weatherInfo.innerHTML = `
                    <p>Temperature: ${temperature}°C</p>
                    <p>Weather: ${weatherDescription}</p>
                    <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="${weatherDescription}">
                `;
            } else {
                weatherInfo.innerHTML = `<p>City not found. Please try again.</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});