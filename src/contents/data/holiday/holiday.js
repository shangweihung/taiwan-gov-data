import React, { Component } from "react";
import Message from "../../util/message";
import SearchInput from "../../util/searchInput";
import { filterDatas, switchDay } from "../../util/utils";
import HolidayData from "./holidayData";

function dataToHoliday(allHolidayData, year){
    let displayData = [];
    for (let i=0; i<allHolidayData.length; i++){
        if (
            new Date(allHolidayData[i].date) >= new Date("1/1/"+year) &&
            new Date(allHolidayData[i].date) <= new Date("12/31/" + year) &&
            allHolidayData[i].holidayCategory !== "星期六、星期日"
        ) {
            let holidayInfo = {
                date: "",
                name: "",
                holidayCategory: "",
                description: ""
            };

            let d = new Date(allHolidayData[i].date);
            holidayInfo.date = allHolidayData[i].date + " " + switchDay(d.getDay());
            holidayInfo.name = allHolidayData[i].name;
            holidayInfo.holidayCategory = allHolidayData[i].holidayCategory;
            holidayInfo.description = allHolidayData[i].description;

            displayData.push(holidayInfo);
        }
    }

    return displayData;
}

class Holiday extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading: true,
            isError: false,
            year: new Date().getFullYear(),
            data: ""
        }
        this.handleYear = this.handleYear.bind(this);
    }

    handleYear(input){
        if (input.length === 4) {
            this.setState(state =>({
                year: input
            }));
        } else if (input === "" && input === undefined) {
            const now = new Date();
            this.setState(state =>({
                year: now.getFullYear()
            }));
        } else {
            this.setState(state =>({
                year: "error"
            }));
        }

    }

    getHolidayDatas() {
        const url =  "https://cors-anywhere.herokuapp.com/http://data.ntpc.gov.tw/api/v1/rest/datastore/382000000A-000077-002";

        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(myJson => {
            let resultDates = myJson.result.records;
            this.setState(state => ({
                isLoading: false,
                data: resultDates
            }));
        })
        .catch(error => {
            console.log(error);
        })
    }

    componentDidMount() {
        this.getHolidayDatas();
    }

    render() {
        let holidayData = this.state.data;
        let holiday;
        let message;

        if (this.state.isLoading) {
            console.log("It's loading!!!");
           
            message = (
              <p id="message">
                <i className="fas fa-spinner"></i> 載入中
              </p>
            )
            holiday = <Message message={message}/>;
            
        } else {

            if (this.state.isError) {
                console.log("error");
                message = (
                  <p id="message">
                    <i className="fas fa-exclamation-triangle"></i> 伺服器發生問題
                  </p>
                );
                holiday = <Message message={message} />;
            } else {

                console.log("Finish loading!!!");
                holidayData = filterDatas(
                    this.state.data,
                    this.state.year,
                    dataToHoliday
                );

                if (holidayData.length>0) {
                    const tableHeader = (
                        <tr>
                            <th>日期</th>
                            <th>名稱</th>
                            <th>類型</th>
                            <th>其他</th>
                        </tr>
                    )


                    holiday = (
                        <div>
                            <SearchInput
                                placeHolder="查詢年份: e.g.2020"
                                onFilterTextChange={this.handleYear} />
        
                            <table className="holiday-table">
                                <tbody>
                                    {tableHeader}
                                    <HolidayData holidayData={holidayData} />
                                </tbody>
                            </table>
                        </div>
                    );
                    
                } else {
                    message = (
                        <p id="message">
                        <i className="fas fa-file"></i> 查無資料
                        </p>
                    );
                    holiday =  (
                        <div>
                            <SearchInput
                                placeHolder="查詢年份: e.g.2020"
                                onFilterTextChange={this.handleYear} />
                            <Message message={message}/>
                        </div>
                    );
                }
            }
        }

        return holiday;
    }

}


export default Holiday;