import classes from "./currentweather.module.css";
import { Fragment, useState } from "react";
import { kelvinToCelsius, capitalize, oneDecimal } from "../../helpers/helpers";

const CurrentWeather = ({ weatherData, showMoreWeather }) => {
  const [show, setShow] = useState(false);

  const showMoreWeatherHander = (e) => {
    e.preventDefault();
    showMoreWeather();
    setShow(true);
  };

  return (
    <Fragment>
      <div className={classes["current_weather_segment"]}>
        <div className={classes.top}>
          <img
            className={classes.logo}
            src={require(`../../imgs/symbols/${weatherData.weather[0].icon}.png`)}
            alt="Missing img"
          />
          <div className={classes.basic_info}>
            <p className={classes.city}>{weatherData.name}</p>
            <p className={classes.weather_desc}>
              {capitalize(weatherData.weather[0].description)}
            </p>
          </div>
        </div>
        <div className={classes.mid}>
          <h2 className={classes.current_temperature}>{`${kelvinToCelsius(
            weatherData.main.temp
          ).toFixed(1)}°C`}</h2>
        </div>
        <div className={classes.bottom}>
          <div className={classes.row}>
            <h4 className={[classes.row_desc, classes.detail].join(" ")}>
              Details
            </h4>
          </div>
          <div className={classes.row}>
            <p className={classes.row_desc}>Feels like:</p>
            <p className={classes.row_value}>{`${kelvinToCelsius(
              weatherData.main.temp
            ).toFixed()}°C`}</p>
          </div>
          <div className={classes.row}>
            <p className={classes.row_desc}>Windspeed:</p>
            <p className={classes.row_value}>{`${oneDecimal(
              weatherData.wind.speed
            )}km/h`}</p>
          </div>
          <div className={classes.row}>
            <p className={classes.row_desc}>Humidity:</p>
            <p
              className={classes.row_value}
            >{`${weatherData.main.humidity}%`}</p>
          </div>
        </div>
      </div>
      {!show && (
        <div className={classes.more_weather}>
          <button onClick={showMoreWeatherHander} className={classes.effect}>
            Next 7 Days...
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default CurrentWeather;
