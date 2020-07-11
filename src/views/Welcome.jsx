import React from "react";
import NavBarComponent from "components/NavBar";
import HomeProduct from "components/HomeProduct";
import { Container, Columns } from "react-bulma-components/lib";

const Welcome = () => {
  return (
    <div>
      <NavBarComponent />
      <Container className="mt-2">
        <Columns>
          <Columns.Column>
            <HomeProduct />
          </Columns.Column>
          <Columns.Column>
            <HomeProduct />
          </Columns.Column>
          <Columns.Column>
            <HomeProduct />
          </Columns.Column>
          <Columns.Column>
            <HomeProduct />
          </Columns.Column>
        </Columns>
      </Container>
    </div>
  );
};

export default Welcome;
