import React, { Component } from 'react';
import './App.css';

import AdminLayout from "pages/shared/_layout.jsx";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./assets/sass/bootstrap_4.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/material-darkedition.css";
import "./assets/css/style.css";
import "./assets/css/pe-icon-7-stroke.css";
//import "./assets/css/font-awesome.min.css";

class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </Router>
    );
  }
  
}

export default App;
