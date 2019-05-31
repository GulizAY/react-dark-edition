import React, { Component } from 'react';
import './App.css';

//import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/bootstrap_3.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/material-darkedition.css";
import "./assets/css/style.css";
import "./assets/css/pe-icon-7-stroke.css";
import "./assets/css/font-awesome.min.css";

//import { BrowserRouter as Router, HashRouter, Route, Switch, Redirect } from "react-router-dom";
//import { Paths, Login, Layout } from "components/Navigation/navigation"
import Root from "pages/shared/root"

class App extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      // <Router>
      //   <Switch>
      //     <Route path={Paths.Layout} render={props => <Layout {...props} />} />
      //     <Redirect from="/" to={Paths.Layout + Paths.Dashboard} />
      //   </Switch>
      // </Router>
      <Root {...this.props}/>
    );
  }
  
}

export default App;