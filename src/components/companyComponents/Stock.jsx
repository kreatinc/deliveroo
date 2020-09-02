import { Container } from "@material-ui/core";
import React from "react";
import { Columns } from "react-bulma-components/lib";
import NavBar from "./Navbar";
import ReviewCard from "./ReviewCard";

// nearly ended products in stock
// shopping list
const Stock = () => {
  return (
    <>
      <NavBar />
      <Container className="welcome__container">
        <Columns>
          <Columns.Column>
            <ReviewCard />
          </Columns.Column>
          <Columns.Column>
            <ReviewCard />
          </Columns.Column>
        </Columns>
        <Columns.Column>
          <ReviewCard />
        </Columns.Column>
      </Container>
    </>
  );
};

export default Stock;
