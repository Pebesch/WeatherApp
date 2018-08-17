import React from 'react';
import './Suggestion.css';

class Suggestion extends React.Component{
  constructor(props) {
    super(props);
    this.updateInputField = this.updateInputField.bind(this);
  }

  updateInputField(evt) {
    this.props.onSelect(evt.currentTarget.innerText);
  }

  render(){
      if(this.props.autocomplete && this.props.autocomplete.length > 0) {
        return (
          <div className="Suggestion">
            <ul>
              {
                this.props.autocomplete.map((location) => {
                  return (
                    <li key={location.id} onClick={this.updateInputField}>{location.name}</li>
                  )
                })
              }
            </ul>
          </div>
        );
      } else {
        return <div className="None"></div>
      }
  }
}

export default Suggestion;
