document.getElementById('location-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let locationInput = document.getElementById('location-input').value;

    let apiKey = 'YOUR_API_KEY';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let weatherInfo = `
                <h2>Current Weather in ${data.name}, ${data.sys.country}</h2>
                <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                <p><strong>Description:</strong> ${data.weather[0].description}</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
            `;
            document.getElementById('weather-info').innerHTML = weatherInfo;
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
            document.getElementById('weather-info').innerHTML = '<p>Weather data not found. Please enter a valid location.</p>';
        });
});