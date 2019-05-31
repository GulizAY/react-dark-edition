import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './login_style.css'
import apiServices from 'services'
import { Paths } from "components/Navigation/navigation"

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      redirectToDashboard: false,
      authenticated: props.authenticated
    }
  }

  usernameChanged(e) {
    this.setState({
      username: e.target.value
    })
  }

  passwordChanged(e) {
    this.setState({
      password: e.target.value
    })
  }

  onLoginClick() {
    // HTTP Call
    const user = {
      username: this.state.username,
      password: this.state.password
    }

    // TODO: u can own api for login
    this.setState({
      redirectToDashboard: true,
      authenticated: true
    })
    // apiServices.accountService.login(user.username, user.password)
    //   .then(res => {
    //     if (res.isSucceed) {
    //       //redirect 
    //       this.setState({
    //         redirectToDashboard: true,
    //         authenticated: true
    //       })
    //     }
    //   });
  }


  render() {

    if (this.state.redirectToDashboard) {
      console.log("redirect to ", Paths.Layout + Paths.Dashboard)
      return (
        <Redirect from="/" to={Paths.Layout + Paths.Dashboard} />
      )
    }

    return (

      <div className="simpleslide100">
        <img src={require('assets/img/sidebar-7.jpg')} className="simpleslide100-item bg-img1" />
        <div className="login-container">
          <div className="loginform-container">
            <div className="form-group">
              <div className="login-logo">
                <div className="row">
                  <div className="col-lg-3">
                    <img src={require("assets/img/logo.png")} />
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="username"><b>Kullanıcı Adı</b></label>
              <input type="text" className="form-control" placeholder="Kullanıcı adı/ e-posta" value={this.state.username} onChange={this.usernameChanged.bind(this)} required />
            </div>
            <div className="form-group">
              <label htmlFor="password"><b>Şifre</b></label>
              <input type="password" className="form-control" placeholder="Şifre" value={this.state.password} onChange={this.passwordChanged.bind(this)} required />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-warning float-right" onClick={this.onLoginClick.bind(this)}>Giriş Yap</button>
            </div>
            <label>
              {/* <input type="checkbox" checked="checked" name="remember" /> Remember me  */}
            </label>
          </div>
        </div>
      </div>

    );
  }
}

export default Login;