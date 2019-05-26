import Dashboard from "pages/dashboard/index.jsx";
import Profile from "pages/profile/index.jsx";
import Sample from "pages/sample/index.jsx";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "pe-7s-user",
    component: Profile,
    layout: "/admin"
  },{
    path: "/sample",
    name: "Sample Page",
    icon: "fa fa-hashtag",
    component: Sample,
    layout: "/admin"
  }
];

export default routes;
