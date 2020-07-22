
import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import City from "./component/City";


// const KEY = process.env.REACT_API_KEY
//   console.log(KEY)

class App extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { weather:null};
    this.state = {
      isLoading: true
    };
  }
  componentDidMount(){
    this.getLocation()
  }  
  
  async getWeather(lon, lat){
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=3a8897c127708dd906da32088a599881`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    this.setState({
      locationName: data.name,
      temp : data.main.temp,
      weather: data.weather[0].description,
      icon: data.weather[0].icon
    })
    }
 
  getLocation  = () => {
    navigator.geolocation.getCurrentPosition((post) => {
    this.getWeather(post.coords.longitude, post.coords.latitude)
    })
  
  }
  render() {
    return (

  <div className="container-fluid text-white my-auto">
    <City></City>
        <div className="container mx-auto my-4 py-4">
          <div className="row justify-content-center text-center">
            
            <h2 className="col-12">{this.state.locationName}</h2>
            <h3 className="col-12 text-danger">{this.state.temp}°F or {(this.state.temp-32)*5/9}°C</h3>
            <h3 className="col-12">{this.state.weather}</h3>
            <div className="weather-icon"><img src={`icons/${this.state.icon}.png`} alt="icon"/></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
