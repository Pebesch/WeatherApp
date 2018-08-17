import React, { Component } from 'react';
import './App.css';
import ForecastList from './Components/ForecastList/ForecastList';

const weatherForecast = [
  {
    date: "2018-08-17",
    temp_c: 29.0,
    maxtemp_c: 29.4,
    mintemp_c: 15.0,
    condition: {
      text: "Sunny",
      icon: "//cdn.apixu.com/weather/64x64/day/113.png",
      code: 1000
    },
  },
  {
    date: "2018-08-18",
    temp_c: 29.0,
    maxtemp_c: 29.4,
    mintemp_c: 15.0,
    condition: {
      text: "Sunny",
      icon: "//cdn.apixu.com/weather/64x64/day/305.png",
      code: 1000
    },
  },
  {
    date: "2018-08-19",
    temp_c: 29.0,
    maxtemp_c: 29.4,
    mintemp_c: 15.0,
    condition: {
      text: "Sunny",
      icon: "//cdn.apixu.com/weather/64x64/day/356.png",
      code: 1000
    },
  }
];

class App extends Component {

  componentWillMount() {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to my weathery weather app!</h1>
          <div className="SearchGroup">
            <input type="text" placeholder="City, Zip Code, Coordinates"/>
            <a>Go</a>
          </div>
        </header>
        <ForecastList weatherdata={weatherForecast} />
      </div>
    );
  }
}

export default App;
