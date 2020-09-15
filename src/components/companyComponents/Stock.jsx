import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { Columns } from "react-bulma-components/lib";
import NavBar from "./Navbar";
import CommandsReviewCard from "./CommandsReviewCard";
import * as actions from "store/actions/companyActions";
import * as selectors from "store/reducers";
import { connect } from "react-redux";
import RunoutReviewCard from "./RunoutReviewCard";

// nearly ended products in stock
// shopping list
const Stock = ({ runout }) => {
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
          <CommandsReviewCard title="Sales Chart" />
        </Columns.Column>
      </Container>
    </>
  );
};

export default Stock;
