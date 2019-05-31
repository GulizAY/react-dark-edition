import React from "react"
import { Route, Redirect } from "react-router-dom"
import apiServices from "services/index"
import jwt_decode from "jwt-decode"
import { Paths, Layout } from "components/Navigation/navigation"

function controlUserAuth(props) {
  //console.log(props)
  let result = false;
  
  if (localStorage.getItem('userToken')) {
    return true; // Attention:  logged in successfully without api 

    var token = localStorage.getItem('userToken');
    var _result = apiServices.accountService.controlTokenExpiry(token);
    if (!_result) {
      result = true;
      var decoded = jwt_decode(token);
      //console.log(decoded)
      props.companyId = parseInt(decoded.CompanyId);
      props.currentUserId = parseInt(decoded.UserId);
      props.currentUserTypeId = parseInt(decoded.UserTypeId);
      if (props.currentUserTypeId == 1 || props.currentUserTypeId == 2)
        props.isAdmin = true;
      else
        props.isAdmin = false;

      if (props.currentUserTypeId == 3 || props.currentUserTypeId == 4)
        props.isCoach = true;
      else
        props.isCoach = false;
    }
  }

  return result;
}

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        controlUserAuth(props)
            ? <Layout {...props} />
            : <Redirect to={{ pathname: Paths.Login }} />
    )} />
)
