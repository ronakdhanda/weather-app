const searchBox = document.querySelector("#searchbox");
const searchBtn = document.querySelector("#searchbtn");
const weathericon = document.querySelector("#weather-icon");

const getCityWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f38611ba8e07ee5d8eb2719988814b5a&units=metric` +
          "&appid=${apiKey}"
      );
      var data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    document.querySelector("#city").innerHTML = data.name;
    document.querySelector("#temp").innerHTML = Math.round(data.main.temp)  + "°C" ;
    document.querySelector("#humiditypercentage").innerHTML = data.main.humidity + "%" ;
    document.querySelector("#windspeed").innerHTML = data.wind.speed + " km/h ";

    if(data.weather[0].main == "Clear") {
        weathericon.src = "images/clear.png";
    }else if(data.weather[0].main == "Clouds") {
        weathericon.src = "images/clouds.png";
    }else if(data.weather[0].main == "Drizzle") {
        weathericon.src = "images/drizzle.png";
    }else if(data.weather[0].main == "Mist") {
        weathericon.src = "images/mist.png";
    }else if(data.weather[0].main == "Rain") {
        weathericon.src = "images/rain.png";
    }else if(data.weather[0].main == "Snow") {
        weathericon.src = "images/snow.png";
    }


};

searchBtn.addEventListener("click",() => { getCityWeather(searchBox.value);})

getCityWeather("delhi");