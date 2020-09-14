import Table from "./InfoTable";
import React from "react";
import { Columns } from "react-bulma-components/lib";
import NavBar from "./Navbar";
import { Container } from "@material-ui/core";

const Products = ({ products }) => {
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
            { title: "Category", field: "category" },
            { title: "Recipe", field: "recipe" },
            // {
            //   title: "Birth Place",
            //   field: "birthCity",
            //   lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
            // },
          ]}
          data={products.map((product) => ({
            price: product.price,
            title: product.title,
            quantity: product.quantity,
            category: product.category.title,
            recipe: product.recipe,
          }))}
        />
      </Container>
    </>
  );
};

export default Products;
