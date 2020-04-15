import React, { Component } from "react";
import { switchDay } from "../../util/utils";

class WeatherCard extends Component {
    render() {
        let startDate = new Date(this.props.dayInfo.startTime);
        let endDate = new Date(this.props.dayInfo.endTime);
        
        let startDay = switchDay(startDate.getDay());
        let endDay = switchDay(endDate.getDay());

        let startTime = startDate.toLocaleTimeString("en-US");
        let endTime = endDate.toLocaleTimeString("en-US");

        let d;
        if (startDay === endDay) {
            d = startDay;
        } else {
            d = startDay + " - " + endDay;
        }

        return (
            <div className="weather-card">
                <div className="weather-time">
                    {d}
                    <br />
                    <p className="start-time">{startTime}</p>                
                    <p className="end-time"> - {endTime}</p>
                </div>
                <div className="weather-description">
                    {this.props.dayInfo.weatherDescription}
                </div>
                <div className="weather-temperature">
                    {this.props.dayInfo.minTemperature} ~ {" "}
                    {this.props.dayInfo.maxTemperature} 
                </div>
                <div className="rain-probability">
                    降雨機率:{this.props.dayInfo.rainProbability}
                </div>
            </div>
        );

    }

}

export default WeatherCard;
