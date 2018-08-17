import React from 'react';
import './ForeCast.css';

class ForeCast extends React.Component{
  render() {
    console.log(this.props.weather.temp_c);
    return (
      <div className="ForeCast Flex-Container">
        <span>{this.props.weather.date}</span>
        <img src={this.props.weather.condition.icon} alt="Today's weather"/>
        <div className="Flex-Container MinMax">
          <span className="Min">{this.props.weather.mintemp_c}</span>
          <span className="Max">{this.props.weather.maxtemp_c}</span>
        </div>
      </div>
    );
  }
}

export default ForeCast;
