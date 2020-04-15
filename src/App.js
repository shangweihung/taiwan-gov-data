import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom"; 
import Main from "./contents/main";
import Holiday from "./contents/data/holiday/holiday";
import Weather from "./contents/data/weather/weather";
import './App.css';
import { Navbar, Nav } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      webModel: "國定假日"
    };
  }

  render() {
    return (
      <HashRouter>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/"><i class="far fa-flag"></i> 政府資料開放平台 </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/holiday">國定假日</Nav.Link>
              <Nav.Link href="/weather">天氣預報</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="container">
          <Route exact path="/" component={Main} />
          <Route exact path="/holiday" component={Holiday} />
          <Route exact path="/weather" component={Weather} />
        </div>
        
      </HashRouter>
    );
  }
}

export default App;
