import React from 'react';
import './Current.css';

class Current extends React.Component {
  render() {
    const { current } = this.props
    if ( !(current && current.condition) ) return <span>Loading</span>;

    return (
      <div className="Current">
        <div className="Important">
          <h1>{this.props.location.name}, {this.props.location.country} <span>{this.props.location.localtime}</span></h1>
          <div className="QuickLook">
            <div className="Flex">
              <img src={this.props.current.condition.icon} alt={this.props.current.condition.text} />
              <p>{this.props.current.temp_c}°C</p>
            </div>
            <p>Feels like {this.props.current.feelslike_c}°C</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Current;
