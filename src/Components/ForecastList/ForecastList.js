import React from 'react';
import ForeCast from '../ForeCast/ForeCast';
import './ForecastList.css';

class ForecastList extends React.Component{
  render() {
    return (
      <div className="ForecastList">
      {
        this.props.weatherdata.map(weather => {
          return <ForeCast key={weather.date} weather={weather} />
        })
      }
      </div>
    );
  }
}

export default ForecastList;
