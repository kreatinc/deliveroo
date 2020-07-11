import React from "react";
import NavBar from "react-bulma-components/lib/components/navbar";
import Container from "react-bulma-components/lib/components/container";
import Columns from "react-bulma-components/lib/components/columns";
import { Button } from "react-bulma-components/dist";

const NavBarComponent = () => {
  return (
    <nav>
      <NavBar color="danger">
        <Container>
          <Columns.Column size="three-quarters">
            <Button>Logo placeholder</Button>
          </Columns.Column>
          <Columns.Column>
            <div className="navbar-end">
              <Columns>
                <Columns.Column>
                  <Button>Sign up</Button>
                </Columns.Column>
                <Columns.Column>
                  <Button>Login</Button>
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
