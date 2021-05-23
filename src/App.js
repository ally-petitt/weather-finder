import './App.css';
import { useEffect, useState } from 'react';

import Weather from "./components/Weather"

import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css"

// make an api call to this link: api.openweathermap.org/data/2.5/weather?q=London,uk
const API_KEY = "04ae21c0f17814f4a85bbfb1bb2f38d4"

function App() {
  const [state, setState] = useState({});
  const weatherIcons = {
    thunderstorm: "wi-thunderstorm",
    drizzle: "wi-sleet",
    rain: "wi-storm-showers",
    snow: "wi-snow",
    atmosphere: "wi-fog",
    clear: "wi-day-sunny",
    clouds: "wi-day-fog"
  }

  useEffect(async () => {
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london&appid=${API_KEY}`)

    const res = await apiCall.json();

    console.log(res)

    const icon = getIcon(res.weather[0].id)

    setState({
      city: res.name,
      country: res.sys.country,
      temp: calcCelcius(res.main.temp),
      minTemp: calcCelcius(res.main.temp_min),
      maxTemp: calcCelcius(res.main.temp_max),
      description: capitalize(res.weather[0].description),
      icon: icon
    })

  }, [])

  const calcCelcius = (temp) => {
    let celcius = Math.floor(temp - 273.15);
    return celcius;
  }

  const capitalize = (string) => {
    const words = string.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
  }

  const getIcon = (id) => {
    switch (Math.floor(id / 100)) {
      case 2: 
        return weatherIcons.thunderstorm
      case 3:
        return weatherIcons.drizzle
      case 5: 
        return weatherIcons.rain
      case 6:
        return weatherIcons.snow
      case 7: 
        return weatherIcons.atmosphere
      case 8:
        if (id == 800) {
          return weatherIcons.clear
        }
        
        return weatherIcons.clouds
    }
  }

  console.log(state)

  return (
    <div className="App">
      <Weather info={state}/>
    </div>
  );
}

export default App;
