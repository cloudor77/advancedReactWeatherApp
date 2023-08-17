export const kelvinToCelsius = (kel) => {
  return kel - (273.15).toFixed(1);
};

export const capitalize = (str) => {
  return str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
};

export const oneDecimal = (dec) => {
  return dec.toFixed(1);
};

const currentDay = new Date().getDay();
const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const forecastForNextSevenDays = weekDays
  .slice(currentDay, weekDays.length)
  .concat(weekDays.slice(0, currentDay));
