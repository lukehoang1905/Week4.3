
import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';


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
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  // <div className="container-fluid text-white my-auto">
  //       <div className="container mx-auto my-4 py-4">
  //         <div className="row justify-content-center text-center">
  //           <input className="input-group"/>
  //           <h2 className="col-12">{this.state.locationName}</h2>
  //           <h3 className="col-12 text-danger">{this.state.temp}°F or {(this.state.temp-32)*5/9}°C</h3>
  //           <h3 className="col-12">{this.state.weather}</h3>
  //           <div className="weather-icon"><img src={`icons/09d.png`} alt="icon"/></div>
  //         </div>
  //       </div>
  //     </div>
    );
  }
}

export default App;
