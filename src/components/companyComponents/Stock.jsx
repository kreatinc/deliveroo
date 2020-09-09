import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { Columns } from "react-bulma-components/lib";
import NavBar from "./Navbar";
import CommandsReviewCard from "./CommandsReviewCard";
import * as actions from "store/actions/companyActions";
import * as selectors from "store/reducers";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  products: selectors.getVisibleProducts(state),
});

// nearly ended products in stock
// shopping list
let Stock = ({ products, getRunOutProducts }) => {
  useEffect(() => {
    getRunOutProducts();
  }, [getRunOutProducts]);

  console.log("products :>> ", products);
  return (
    <>
      <NavBar />
      <Container className="welcome__container">
        <Columns>
          <Columns.Column>
            <CommandsReviewCard title="Nearly out of stock" />
          </Columns.Column>
          <Columns.Column>
            <CommandsReviewCard title="Shopping List" />
          </Columns.Column>
        </Columns>
        <Columns.Column>
          <CommandsReviewCard title="Sales Chart" />
        </Columns.Column>
      </Container>
    </>
  );
};

Stock = connect(mapStateToProps, actions)(Stock);

export default Stock;
