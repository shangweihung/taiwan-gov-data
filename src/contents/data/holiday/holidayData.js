import React, { Component } from "react";


class HolidayData extends Component {
    render() {
        const allHolidayData = this.props.holidayData;
        const displayRows = [];

        for(let i=0; i<allHolidayData.length; i++){
            if (allHolidayData[i].holidayCategory === "補行上班日") {
                displayRows.push(
                    <tr key={allHolidayData[i].date} className="work-day">
                        <td>{allHolidayData[i].date}</td>
                        <td>{allHolidayData[i].name}</td>
                        <td>{allHolidayData[i].holidayCategory}</td>
                        <td>{allHolidayData[i].description}</td>
                    </tr>
                );

            } else {
                displayRows.push(
                    <tr key={allHolidayData[i].date}>
                        <td>{allHolidayData[i].date}</td>
                        <td>{allHolidayData[i].name}</td>
                        <td>{allHolidayData[i].holidayCategory}</td>
                        <td>{allHolidayData[i].description}</td>
                    </tr>
                );

            }
        }

        return displayRows;
    }
}


export default HolidayData;