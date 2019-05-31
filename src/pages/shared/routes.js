import { Paths, Dashboard, Profile
  , PageTemplate } from "components/Navigation/navigation"

const routes = [
  {
    path: Paths.Dashboard,
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: Paths.Layout
  }
  ,{
    path: Paths.Profile,
    name: "Profil",
    icon: "fa fa-user-circle-o",//"pe-7s-user",
    component: Profile,
    layout: Paths.Layout
  }
  ,{
    path: "/sample",
    name: "Sample Page",
    icon: "fa fa-hashtag",
    component: PageTemplate,
    layout: Paths.Layout
  }
];

export default routes;

