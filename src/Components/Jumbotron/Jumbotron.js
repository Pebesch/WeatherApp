import React from 'react';
import './Jumbotron.css';
import SearchBar from '../SearchBar/SearchBar';

class Jumbotron extends React.Component{
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">Welcome to my weathery weather app!</h1>
        <SearchBar onSearch={this.props.onSearch} onChange={this.props.onChange} autocomplete={this.props.autocomplete} />
      </header>
    );
  }
}

export default Jumbotron;
