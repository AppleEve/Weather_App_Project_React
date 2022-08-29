import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "SLEET",
    "11n": "SLEET",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  let color =
    props.icon === "01d"
      ? "#f9a872"
      : props.icon === "01n" ||
        props.icon === "02n" ||
        props.icon === "03n" ||
        props.icon === "04n" ||
        props.icon === "09n" ||
        props.icon === "10n" ||
        props.icon === "13n" ||
        props.icon === "50n"
      ? "#404472"
      : props.icon === "09d" ||
        props.icon === "10d" ||
        props.icon === "13d" ||
        props.icon === "50d"
      ? "#5d76a1"
      : props.icon === "11d"
      ? "#5b6b86"
      : props.icon === "11n"
      ? "#494b69"
      : "#7996d1";

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color={color}
      size={45}
      animate={true}
    />
  );
}
