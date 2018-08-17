import React from 'react';
import './SearchBar.css';
import Suggestion from './Suggestion';

class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {inputValue: ''};
    this.search = this.search.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  changeState(value) {
    this.setState({inputValue: value});
  }

  search() {
    this.props.onSearch(this.state.inputValue);
  }

  updateInputValue(evt) {
    this.setState({ inputValue: evt.target.value });
    this.props.onChange(evt.target.value);
  }

  handleKeyPress(e) {
    if(e.key === 'Enter') {
      this.search();
    }
  }

  render() {
    return (
      <div>
        <div className="SearchGroup" onKeyPress={this.handleKeyPress} >
          <input ref={input => input && input.focus()} type="text" placeholder="City, Zip Code, Coordinates" onChange={evt => this.updateInputValue(evt)} value={this.state.inputValue} />
          <a onClick={this.search}>Go</a>
        </div>
        <Suggestion autocomplete={this.props.autocomplete} onSelect={this.changeState} />
      </div>
    );
  }
}

export default SearchBar;
