import React from "react";
import NavBar from "react-bulma-components/lib/components/navbar";
import Container from "react-bulma-components/lib/components/container";
import Columns from "react-bulma-components/lib/components/columns";
import { Button } from "react-bulma-components/dist";
import { Link } from "react-router-dom";

const NavBarComponent = () => {
  return (
    <nav>
      <NavBar>
        <Container>
          <Columns.Column size="three-quarters">
            <Button className="is-large">Logo placeholder</Button>
          </Columns.Column>
          <Columns.Column>
            <div className="navbar-end">
              <Columns>
                <Columns.Column>
                  <Button className="is-large">
                    <Link to="/register">Sign up</Link>
                  </Button>
                </Columns.Column>
                <Columns.Column>
                  <Button className="is-large">
                    <Link to="/login">Login</Link>
                  </Button>
                </Columns.Column>
              </Columns>
            </div>
          </Columns.Column>
        </Container>
      </NavBar>
    </nav>
  );
};

export default NavBarComponent;
