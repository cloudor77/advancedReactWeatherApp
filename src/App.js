import { useState } from "react";
import "./App.css";
import Search from "./components/search/search-form";
import CurrentWeather from "./components/current_weather/currenweather";
import { WEATHER_URL, WEATHER_API_KEY } from "./api/openweather";
import Forecast from "./components/forecast/forecast";

function App() {
  const [currWeather, setCurrWeather] = useState(null);
  const [localForecast, setLocalForecast] = useState(null);
  const [moreWeather, setMoreWeather] = useState(false);
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    console.log(lat, lon);

    const currentWeatherFetch = fetch(
      `${WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    const forecastFetch = fetch(
      `${WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const foreCastResponse = await response[1].json();

        setCurrWeather({ city: searchData.label, ...weatherResponse });
        setLocalForecast({ city: searchData.label, ...foreCastResponse });
      })
      .catch((err) => console.log(err));
  };

  const moreWeatherAction = () => {
    setMoreWeather(true);
  };

  console.log(localForecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currWeather && (
        <CurrentWeather
          weatherData={currWeather}
          showMoreWeather={moreWeatherAction}
        />
      )}
      {localForecast && moreWeather && <Forecast data={localForecast} />}
    </div>
  );
}

export default App;
