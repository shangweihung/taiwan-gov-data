import React, { Component } from "react";


export class Main extends Component {
  render() {
    

    return (
      <div>
          <h2 style={{fontSize:50}}>It's a React practice project for Taiwan Government Open Data. </h2>
          <br /><br />
          <ul>
            <li><a href="https://data.ntpc.gov.tw/">新北市政府資料開放平台</a></li>
            <li><a href="https://opendata.cwb.gov.tw/index">氣象資料開放平台</a></li>
          </ul>
      </div>
    );
  }
}

export default Main;
