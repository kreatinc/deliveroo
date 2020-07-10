import React from "react";
import routes from "./router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Button } from "react-bulma-components/dist";
import "react-bulma-components/lib";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <Route exact path={route.path} key={i}>
              <Button color="danger">Test</Button>
              <route.component></route.component>
              {/* component's views will go here */}
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
