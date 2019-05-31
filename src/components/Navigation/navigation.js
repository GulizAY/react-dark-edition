// screens
import Unauthorized  from "pages/shared/unauthorized.jsx"; // 401: unauthorized 
import PageNotFound from "pages/shared/pageNotFound.jsx"; // 404: page not found
import Layout from "pages/shared/_layout.jsx"; // _layout
import Login from "pages/authentication/login/index.jsx"; // login
import Dashboard from "pages/dashboard/index.jsx"; // giris
import Profile from "pages/profile/index.jsx"; // profil

import PageTemplate from "pages/shared/_template.jsx"; // sample page


// screen paths
const Paths = {
  NotFound: "/pageNotFound",
  Login : "/login",
  Logout : "/login",
  Layout : "",
  Profile : "/profile",
  Dashboard : "/dashboard",
  PageTemplate: "/sample"
}

export { Paths, Unauthorized, PageNotFound, Layout, Login, Dashboard, Profile, PageTemplate };