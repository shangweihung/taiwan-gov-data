import React, { Component } from "react";
import Message from "../../util/message";
import WeatherCard from "./weatherCard";
import SelectOption from "../../util/selectOption";
import { filterDatas } from "../../util/utils";

function dataToWeather(data, condition){
    let weatherObj ={
        location: "",
        info: [
            {
              startTime: "",
              endTime: "",
              weatherDescription: "",
              maxTemperature: "",
              minTemperature: "",
              rainProbability: "",
              comfort: ""
            },
            {
              startTime: "",
              endTime: "",
              weatherDescription: "",
              maxTemperature: "",
              minTemperature: "",
              rainProbability: "",
              comfort: ""
            },
            {
              startTime: "",
              endTime: "",
              weatherDescription: "",
              maxTemperature: "",
              minTemperature: "",
              rainProbability: "",
              comfort: ""
            }
          ]
    };
    let weatherDataSite;
    for (let i=0; i<data.length; i++){
        if (data[i].locationName === condition) {
            weatherDataSite = i;
            break
        }
    }



    let dataType;

    for (let i=0; i<data[weatherDataSite].weatherElement.length; i++){
        dataType = data[weatherDataSite].weatherElement[i].elementName;
        weatherObj.location = data[weatherDataSite].locationName;

        for (let j=0; j<data[weatherDataSite].weatherElement[i].time.length; j++){

            if(j<3){
                weatherObj.info[j].startTime = data[weatherDataSite].weatherElement[i].time[j].startTime;
                weatherObj.info[j].endTime = data[weatherDataSite].weatherElement[i].time[j].endTime;
            }

            if(dataType === "Wx") {
                weatherObj.info[j].weatherDescription = data[weatherDataSite].weatherElement[i].time[j].parameter.parameterName;

            } else if (dataType === "MaxT"){
                weatherObj.info[j].maxTemperature = data[weatherDataSite].weatherElement[i].time[j].parameter.parameterName + "℃";

            } else if (dataType === "MinT"){
                weatherObj.info[j].minTemperature = data[weatherDataSite].weatherElement[i].time[j].parameter.parameterName + "℃";
            
            } else if (dataType === "CI"){
                weatherObj.info[j].comfort = data[weatherDataSite].weatherElement[i].time[j].parameter.parameterName;

            } else if (dataType === "PoP"){
                weatherObj.info[j].rainProbability = data[weatherDataSite].weatherElement[i].time[j].parameter.parameterName + "%";
            
            }
        }
    }

        return weatherObj; 
}


class Weather extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: true,
            isError: false,
            city: "臺北市",
            data: ""
        };
        this.onSelectOptonChange = this.onSelectOptonChange.bind(this);
    } 

    onSelectOptonChange(select) {
        this.setState(state => ({
            city: select
        }));
    }

    getWeatherData() {
        const url = "https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-C0032-001?Authorization=rdec-key-123-45678-011121314&format=JSON";

        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(myJson => {
            let result = myJson.cwbopendata.dataset.location;
            this.setState(state => ({
                isLoading: false,
                data: result
            }));
        })
        .catch(error => {
            console.log(error);
        
        })
    }

    componentDidMount() {
        this.getWeatherData();
    }

    render() {
        let weather;
        let message;
        if (this.state.isLoading) {
            console.log("It's loading!!!");
            message = (
                <p id="message">
                  <i className="fas fa-spinner"></i> 載入中
                </p>
              )
            weather = <Message message={message}/>;
        } else {
            if (this.state.isError) {
                console.log("error");
                message = (
                  <p id="message">
                    <i className="fas fa-exclamation-triangle"></i> 伺服器發生問題
                  </p>
                );
                weather = <Message message={message} />;
            } else {
                console.log("Finish loading!!!");
                let weatherData = filterDatas(
                    this.state.data,
                    this.state.city,
                    dataToWeather
                );

                const weatherAllCard = weatherData.info.map((dayInfo, i) => (
                    <WeatherCard key={i} dayInfo={dayInfo} />
                ));

                weather = (
                    <div>
                        <SelectOption
                          optionDatas={this.state.data}
                          defaultSelect={this.state.city}
                          onSelectOptonChange={this.onSelectOptonChange} />
                    
                        <div className="weather">
                            <h3 className="weather-location">{weatherData.location}</h3>
                            <div className="weather-card-container">{weatherAllCard}</div>
                        </div>

                    </div>
                );
            }
        }

        return weather;
    }

}

export default Weather;