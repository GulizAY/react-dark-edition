import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import routes from "./routes";
import { PrivateRoute } from "components/Navigation/privateroute"
import { AuthenticationRoute } from "components/Navigation/authenticationroute"
import { Paths, Login, Layout } from "components/Navigation/navigation"
import PageNotFound from "./pageNotFound"


class Root extends Component {
  constructor(props) {
    super(props);
  }

  getAppRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === Paths.Layout) {
        return (
          <PrivateRoute
            path={prop.layout + prop.path}
            component={Layout}
            key={key}
          />
        );
      } else {
        return <Route component={ PageNotFound } />;
      }
    });
  };

  render() {
    return (
        <HashRouter>
          <Switch>
            <AuthenticationRoute path={Paths.Login} component={Login} />
            {/* <PrivateRoute path={Paths.Layout} component={Layout} exact /> */}
            <Switch>
              {this.getAppRoutes(routes)}
              <Redirect from="/" to={Paths.Layout + Paths.Dashboard} />
            </Switch>
          </Switch>
        </HashRouter>
    );
  }

}

export default Root;