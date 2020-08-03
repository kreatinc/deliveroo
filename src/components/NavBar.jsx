import React from "react";
import NavBar from "react-bulma-components/lib/components/navbar";
import Container from "react-bulma-components/lib/components/container";
import Columns from "react-bulma-components/lib/components/columns";
import { Button } from "react-bulma-components/dist";
import { Link, NavLink } from "react-router-dom";
import Logo from "./homepageComponents/header/Logo";
import logo from "assets/img/logo.png";

const NavBarComponent = () => {
  return (
    <nav className="welcome__nav">
      <NavBar>
        <Container className="welcome__nav">
          <Columns.Column size="three-quarters">
            <Logo logo={logo}></Logo>
          </Columns.Column>
          <Columns.Column>
            <div className="navbar-end">
              <Columns>
                <Columns.Column>
                  <Button className="btn is-large">
                    <NavLink
                      style={{
                        color: "white",
                      }}
                      to="/register"
                    >
                      Sign up
                    </NavLink>
                  </Button>
                </Columns.Column>
                <Columns.Column>
                  <Button className="btn is-large">
                    <NavLink
                      style={{
                        color: "white",
                      }}
                      to="/login"
                    >
                      Login
                    </NavLink>
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
