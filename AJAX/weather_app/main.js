const submitBtn = document.getElementById("submit-btn");
const apiKey = "a126c7541e92bac89ae20fe209631631";
const errArea = document.getElementById("err-area");
const cityNameTextbox = document.getElementById("city-name");
const weatherArea = document.getElementById("weather-area");

async function getLatLonFromCityName(cityName) {
    let apiEndpoint = `http://api.openweathermap.org/geo/1.0/direct?appid=${apiKey}&q=${cityName}&limit=1`;
    try {
        const res = await axios.get(apiEndpoint);
        let lat = res.data[0].lat;
        let lon = res.data[0].lon;
        let cityName = res.data[0].name;
        let country = res.data[0].country;
        return [lat, lon, cityName, country];
    } catch (error) {
        console.log(error);
    }
    return null;
}

async function getWeatherInfo(cityName) {
    errArea.innerHTML = "";
    let latLon = await getLatLonFromCityName(cityName);
    console.log(latLon);
    if (latLon == null) {
        errArea.innerHTML = "<p>Please input valid city name!</p>";
    } else {
        let lat = latLon[0];
        let lon = latLon[1];
        let resCityName = latLon[2];
        let resNationName = latLon[3];
        let apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=en&units=metric`;
        try {
            const res = await axios.get(apiEndpoint);
            let resTemperature = parseInt(res.data.main.temp);
            console.log(resTemperature);
            let resDescription = res.data.weather[0].description.toUpperCase();
            console.log(resDescription);
            let resIconId = res.data.weather[0].icon;
            let resIconUrl = `https://openweathermap.org/img/wn/${resIconId}.png`;
            console.log(resIconUrl);
            addWeatherCardToDom(
                resCityName,
                resNationName,
                resTemperature,
                resDescription,
                resIconUrl
            );
        } catch (error) {
            console.log(error);
        }
    }
}

function addWeatherCardToDom(
    resCityName,
    resNationName,
    resTemperature,
    resDescription,
    resIconUrl
) {
    let weatherCard = document.createElement("div");
    weatherCard.setAttribute("class", "weather-card");

    // cityName Node
    let cityNameNode = document.createElement("p");
    cityNameNode.setAttribute("class", "city-name");
    cityNameNode.innerHTML = `${resCityName}<span class="nation-name">${resNationName}</span>`;
    weatherCard.appendChild(cityNameNode);

    // temp Node
    let tempNode = document.createElement("p");
    tempNode.setAttribute("class", "temperature");
    tempNode.innerHTML = `${resTemperature}<span class="celcius">°C</span>`;
    weatherCard.appendChild(tempNode);

    // icon Node
    let iconNode = document.createElement("p");
    iconNode.setAttribute("class", "icon");
    iconNode.innerHTML = `<img src="${resIconUrl}">`;
    weatherCard.appendChild(iconNode);

    // description Node
    let descriptionNode = document.createElement("p")
    descriptionNode.setAttribute("class", "description");
    descriptionNode.innerHTML = `${resDescription}`;
    weatherCard.appendChild(descriptionNode);

    // add all to weather area
    weatherArea.appendChild(weatherCard);
}

submitBtn.addEventListener("click", (e) => {
    let cityName = cityNameTextbox.value;
    // setInterval(() => {
    //     getWeatherInfo(cityName)
    // }, 1000);
    getWeatherInfo(cityName)
    
});
