import Welcome from "../views/Welcome";
import Home from "../views/Home/";
import Login from "../views/Login";
import Register from "../views/Register";

const routes = [
  { path: "/", component: Welcome },
  { path: "/home/:category?", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];

export default routes;
