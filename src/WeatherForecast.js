import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import Carousel from "react-bootstrap/Carousel";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.data.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <Carousel interval={null} wrap={false}>
          <Carousel.Item>
            <div className="row">
              <div className="col">
                <WeatherForecastDay data={forecast[1]} icon={props.data.icon} />
              </div>
              <div className="col">
                <WeatherForecastDay data={forecast[2]} icon={props.data.icon} />
              </div>
              <div className="col">
                <WeatherForecastDay data={forecast[3]} icon={props.data.icon} />
              </div>
            </div>
            <Carousel.Caption>
              <h3>1</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col">
                <WeatherForecastDay data={forecast[4]} icon={props.data.icon} />
              </div>
              <div className="col">
                <WeatherForecastDay data={forecast[5]} icon={props.data.icon} />
              </div>
              <div className="col">
                <WeatherForecastDay data={forecast[6]} icon={props.data.icon} />
              </div>
            </div>
            <Carousel.Caption>
              <h3>2</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  } else {
    let apiKey = "711bf416fd4b68649d4f2e89cc233151";
    let longitude = props.data.coordinates.lon;
    let latitude = props.data.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
