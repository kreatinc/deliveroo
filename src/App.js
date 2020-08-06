import React from "react";
import routes from "./router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-bulma-components/lib";
import history from "utils/history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          {routes.map((route, i) => (
            <Route exact path={route.path} key={i}>
              <route.component></route.component>
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
