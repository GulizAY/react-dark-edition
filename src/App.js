import React, { Component } from 'react';
import './App.css';

//import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/bootstrap_3.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/material-darkedition.css";
import "./assets/css/material-lightedition.css";
import "./assets/css/style.css";
import "./assets/css/pe-icon-7-stroke.css";
import "./assets/css/font-awesome.min.css";

import Root from "pages/shared/root"
import { Toasts } from './components/Alert/Alert.jsx'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <Toasts />
        <Root {...this.props}/>
      </div>
    );
  }
  
}

export default App;