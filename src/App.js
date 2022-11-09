import React from "react";
import Header from "./components/header";
import Form from "./components/requestform";
import WeatherOut from "./components/weatheroutput";

const API_KEY = "5c1402ae3facc971d73fd79b685a7f21";

class App extends React.Component{

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  getWeather = async (e) => {
      e.preventDefault();
      var city = e.target.elements.city.value;
      
      
      if(city){
        console.log(city);
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();

        var sunrise = data.sys.sunrise;
        var date = new Date();
        date.setTime(sunrise*1000);
        var sunrise_date = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

        var sunset = data.sys.sunset;
        date = new Date();
        date.setTime(sunset*1000);
        var sunset_date = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

        let pressure = data.main.pressure;
        let pressureInMmHg = Math.floor(pressure * 0.75006);

        this.setState({
          temp: data.main.temp,
          city: data.name,  
          country: data.sys.country,
          pressure: pressureInMmHg,
          sunrise: sunrise_date,
          sunset: sunset_date,
          error: ""
        });
      } else {
        this.setState({
          temp: undefined,
          city: undefined,
          country: undefined,
          pressure: undefined,
          sunrise: undefined,
          sunset: undefined,
          error: "Invalid city name"
        });
      }
  }

  render(){
    return(
      <div>
        <Header />
        <Form callWeather={this.getWeather} />
        <WeatherOut 
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          pressure={this.state.pressure}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;