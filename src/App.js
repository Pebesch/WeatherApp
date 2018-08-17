import React, { Component } from 'react';
import './App.css';
import ForecastList from './Components/ForecastList/ForecastList';
import Jumbotron from './Components/Jumbotron/Jumbotron';
import Current from './Components/Current/Current';
import {getFormatedDate} from './Util/DateFetcher';
import Apixu from './Util/Apixu';

class App extends Component {
  constructor(props) {
    super(props);
    var today = getFormatedDate();
    this.state = {today: today, forecast: [], location: {name: 'Zurich'}, defaultDays: 7, autocomplete: [], current: []};
    this.search = this.search.bind(this);
    this.autocomplete = this.autocomplete.bind(this);
  }

  search(term, days) {
    days = !days ? this.state.defaultDays : days;
    Apixu.getForeCast(term, days).then(data => {
      this.setState({forecast: data.forecast, current: data.current, location: data.location});
    });
    this.setState({autocomplete: []});
  }

  autocomplete(chars) {
    if(chars === ''){
      return;
    }
    Apixu.getAutocomplete(chars).then(autocomplete => {
      this.setState({autocomplete: autocomplete});
    });
  }

  componentWillMount() {
    this.search(this.state.location.name, this.state.defaultDays);
  }

  render() {
    return (
      <div className="App">
        <Jumbotron onSearch={this.search} onChange={this.autocomplete} autocomplete={this.state.autocomplete}/>
        <Current current={this.state.current} location={this.state.location} />
        <ForecastList weatherdata={this.state.forecast} />
      </div>
    );
  }
}

export default App;
