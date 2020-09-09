import { Container } from "@material-ui/core";
import React from "react";
import { Columns } from "react-bulma-components/lib";
import NavBar from "./Navbar";
import CommandsReviewCard from "./CommandsReviewCard";

// nearly ended products in stock
// shopping list
const Stock = () => {
  return (
    <>
      <NavBar />
      <Container className="welcome__container">
        <Columns>
          <Columns.Column>
            <CommandsReviewCard />
          </Columns.Column>
          <Columns.Column>
            <CommandsReviewCard />
          </Columns.Column>
        </Columns>
        <Columns.Column>
          <CommandsReviewCard />
        </Columns.Column>
      </Container>
    </>
  );
};

export default Stock;
