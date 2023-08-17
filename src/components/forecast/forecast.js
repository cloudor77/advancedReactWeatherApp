import classes from "./forecast.module.css";
import ForecastBox from "./forecast-box";
import { forecastForNextSevenDays } from "../../helpers/helpers";

const Forecast = (props) => {
  // const currentDay = new Date().getDay();
  // const weekDays = [
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  //   "Sunday",
  // ];

  // console.log(currentDay, weekDays);

  return (
    <div className={classes.forecast_segment}>
      {props.data.list.splice(0, 7).map((frcst, i) => {
        return (
          <ForecastBox
            key={i}
            number={i}
            forecastedDays={forecastForNextSevenDays[i]}
            icon={frcst.weather[0].icon}
            weatherDesc={frcst.weather[0].description}
            minTemp={frcst.main.temp_max}
            maxTemp={frcst.main.temp_min}
            humidity={frcst.main.humidity}
            windspeed={frcst.wind.speed}
          />
        );
      })}
    </div>
  );
};

export default Forecast;
