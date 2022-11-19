import React from "react";
import Header from "./components/header";
import CheckBoxParams from "./components/outputparams";
import Form from "./components/requestform";
import Title from "./components/title";
import './App.css';



const API_KEY = "5c1402ae3facc971d73fd79b685a7f21";

function convTS(ts){
  var date = new Date();
  date.setTime(ts*1000);
  return date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
}


class App extends React.Component{

  state = {
    desc: undefined,
    img: undefined,
    temp: undefined,
    feels: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    humidity: undefined,
    visibility: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  getWeather = async (e) => {
      e.preventDefault();
      let city = e.target.elements.city.value;
      
      
      if(city){
        console.log(city); 
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();
        if (data.cod !== '404'){

        var sunrise_date = convTS(data.sys.sunrise);
        var sunset_date = convTS(data.sys.sunset);

        let pressure = data.main.pressure;
        let pressureInMmHg = Math.floor(pressure * 0.75006);


        this.setState({
          desc: data.weather[0].description,
          img: data.weather[0].icon,
          temp: data.main.temp,
          feels: data.main.feels_like,
          city: data.name,  
          country: data.sys.country,
          pressure: pressureInMmHg,
          humidity: data.main.humidity,
          visibility: data.visibility,
          sunrise: sunrise_date,
          sunset: sunset_date,
          error: ""
        });
      } else{
        this.setState({
          desc: undefined,
          img: undefined,
          temp: undefined,
          feels: undefined,
          city: undefined,
          country: undefined,
          pressure: undefined,
          humidity: undefined,
          visibility: undefined,
          sunrise: undefined,
          sunset: undefined,
          error: "Invalid city name",
        });
      }

      } else {
        this.setState({
          desc: undefined,
          img: undefined,
          temp: undefined,
          feels: undefined,
          city: undefined,
          country: undefined,
          pressure: undefined,
          humidity: undefined,
          visibility: undefined,
          sunrise: undefined,
          sunset: undefined,
          error: "No city name entered"
        });
      }
  }

  render(){
    return(
      <div className="page">
        <Header />
        <Title />
        <Form callWeather={this.getWeather} />
        <CheckBoxParams
        desc={this.state.desc}
        img={this.state.img}
        temp={this.state.temp}
        feels={this.state.feels}
        city={this.state.city}
        country={this.state.country}
        pressure={this.state.pressure}
        humidity={this.state.humidity}
        visibility={this.state.visibility}
        sunrise={this.state.sunrise}
        sunset={this.state.sunset}
        error={this.state.error}
        />
      </div>
    );
  }
}

export default App;