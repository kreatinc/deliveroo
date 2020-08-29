import Welcome from "../views/Welcome";
import Home from "../views/Home/";
import Login from "../views/Login";
import Register from "../views/Register";
import Company from "../views/Company";

const routes = [
  { path: "/", component: Welcome },
  { path: "/home/:category?", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/company", component: Company },
];

export default routes;
