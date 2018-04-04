import React, { Component } from "react";
import { Navbar, NavbarBrand, NavItem, NavLink, Collapse } from "mdbreact";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Map from "./components/Map/Map";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import MoodditText from "./components/SVG/MoodditText";
import './App.css'
// import SvgReddit from "./components/SVG/SvgReddit";
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true
    };
  }

  test() {
    console.log('success')
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>

            <div className="customNav">
            <Link className="moodit_logo" to="/">Home</Link>
            <div className="nav_links" >
              <ul>
              <li><Link to="/login">My Emotions</Link></li>
              <li><Link to="/map">Mood Map</Link></li>
              </ul>
            </div>
            </div>

            
            <Switch>
              <Route component={Home} exact path="/" />
              <Route component={Login} path="/login" />
              <Route component={Profile} path="/profile" />
              <Route component={Map} path="/map" />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
