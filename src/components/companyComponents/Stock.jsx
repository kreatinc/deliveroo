import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { Columns } from "react-bulma-components/lib";
import NavBar from "./Navbar";
import RunoutReviewCard from "./RunoutReviewCard";
import SalesChart from "./SalesChart";

// nearly ended products in stock
// shopping list
const Stock = ({ runout, commands }) => {
  return (
    <>
      <NavBar />
      <Container className="welcome__container">
        <Columns>
          <Columns.Column>
            <RunoutReviewCard title="Nearly out of stock" items={runout} />
          </Columns.Column>
        </Columns>
        <Columns.Column>
          <SalesChart title="Commands Chart" />
        </Columns.Column>
      </Container>
    </>
  );
};

export default Stock;
