import React, { useEffect } from "react";
import Table from "./InfoTable";
import { Columns } from "react-bulma-components/lib";
import NavBar from "./Navbar";
import { Container } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "store/actions/companyActions";
import * as selectors from "store/reducers";

const mapStateToProps = (state) => ({
  categories: selectors.getCategories(state),
});

let Products = ({ products, categories, fetchCategories }) => {
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <>
      <NavBar />
      <Container>
        <Table
          title="Products Informations"
          columns={[
            { title: "Price", field: "price" },
            { title: "Title", field: "title" },
            { title: "Quantity", field: "quantity" },
            { title: "Recipe", field: "recipe" },
            { title: "Description", field: "description" },
            {
              title: "Category",
              field: "category",
              lookup: {
                ...categories
                  .map((category) => ({
                    [category.id]: category.title,
                  }))
                  .reduce((acc, curr) => Object.assign(acc, curr), {}),
              },
            },
          ]}
          data={products.map((product) => ({
            price: product.price,
            title: product.title,
            quantity: product.quantity,
            category: product.category.id,
            description: product.description,
            recipe: product.recipe,
          }))}
        />
      </Container>
    </>
  );
};

Products = connect(mapStateToProps, actions)(Products);

export default Products;
