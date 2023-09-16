import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ""
    };
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  fetchWeather() {
    this.state.location &&
      console.log("I will fetch weather soon");
  }

  render() {

    return (
      <div className="app">
        <h1>Classy Weather</h1>
        <div>
          <input
            type="text"
            placeholder="Search Via Location"
            value={this.state.location}
            onChange={e => this.setState({ location: e.target.value })}
          ></input>
        </div>
        <button onClick={this.fetchWeather}>Search</button>
      </div>
    )
  }
}


export default App;