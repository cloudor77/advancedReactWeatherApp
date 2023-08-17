import classes from "./forecast-box.module.css";
import { capitalize, kelvinToCelsius, oneDecimal } from "../../helpers/helpers";

const ForecastBox = (props) => {
  return (
    <div className={`${classes.forecast_box} box-nr-${props.number + 1}`}>
      <div className={classes.top}>
        <img
          className={classes.icon}
          src={require(`../../imgs/symbols/${props.icon}.png`)}
          alt="Missing.."
        />
        <div className={classes.city_temp}>
          <p className={classes.day}>{props.forecastedDays}</p>
          <p className={classes.description}>{capitalize(props.weatherDesc)}</p>
        </div>
      </div>

      <div className={classes.forecast_main}>
        <div className={classes.forecast_details}>
          <label className={classes.forecast_description}>
            Temperature - max/min
          </label>
          <label className={classes.value}>{`${kelvinToCelsius(
            props.maxTemp
          ).toFixed(1)}°C / ${kelvinToCelsius(props.minTemp).toFixed(
            1
          )}°C`}</label>
        </div>
        <div className={classes.forecast_details}>
          <label className={classes.forecast_description}>Humidity:</label>
          <label className={classes.value}>{`${props.humidity}%`}</label>
        </div>
        <div className={classes.forecast_details}>
          <label className={classes.forecast_description}>Windspeed:</label>
          <label className={classes.value}>{`${oneDecimal(
            props.windspeed
          )}km/h`}</label>
        </div>
      </div>
    </div>
  );
};

export default ForecastBox;
