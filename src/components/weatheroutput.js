import React from "react";
import './styles/output.css';



class WeatherOut extends React.Component{
    
    render(){

        return(
            <div className="weather" style={{textAlign: "center", marginTop: "30px"}}>
                {this.props.city &&
                <div className = "out" style={{textAlign: "center", marginTop: "30px"}}>
                
                <div className="col2">
                <h3 className="weatherdescription">{this.props.desc}</h3>

                <img src={require(`./icons/${this.props.icon}.png`)} alt="icon" className="weathericon"/>
                </div>
                <div className="col2">
                <p>Location: {this.props.city}, {this.props.country}</p>
                <p>Temperature: {this.props.temp} <span>&#8451;</span></p>
                </div>
                
                <div className="col2">
                {this.props.fe &&
                <p>Feels like: {this.props.feels} <span>&#8451;</span></p>
                }

                {this.props.pr &&
                <p>Pressure: {this.props.pressure} mmHg</p>
                }
                </div>

                <div className="col2">
                {this.props.vi &&
                <p>Visibility: {this.props.visibility} m</p>
                }

                {this.props.hu &&
                <p>Humidity: {this.props.humidity}%</p>
                }
                </div>
                
                <div className="col2">
                {this.props.sr &&
                <p>Sunrise: {this.props.sunrise}</p>
                }
                {this.props.ss &&
                <p>Sunset: {this.props.sunset}</p>
                }
                </div>
                </div>
                }
                <p className="error">{this.props.error}</p>
                
            </div>

        )
    }
}
export default WeatherOut;