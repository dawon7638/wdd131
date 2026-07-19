// Display the current year
const currentYear = document.querySelector("#current-year");
currentYear.textContent = new Date().getFullYear();

//Display the last modified date
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = document.lastModified;

// Function to calculate and return the WindChill in celcius WC = Wind chill (°C) T = Air temperature (°C) V = Wind speed (km/h)
function calculateWindChill(temperature, windspeed) {
    if (temperature > 0 && windspeed > 0) {

        return (
            13.12 + 0.6215 * temperature - 11.37 * Math.pow(windspeed, 0.16) + 0.3965 * temperature * Math.pow(windspeed, 0.16)
        ).toFixed(1) + " °C";
    } else {
        return "N/A";
    }
}

const temperature = 31; // celcius
const windspeed = 7; // km/h

const windChill = document.querySelector("#windchill");
windChill.textContent = calculateWindChill(31, 7);