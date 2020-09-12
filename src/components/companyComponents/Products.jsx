import Table from "./InfoTable";
import React from "react";
import { Columns } from "react-bulma-components/lib";
import NavBar from "./Navbar";
import { Container } from "@material-ui/core";

const Products = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Table />
      </Container>
    </>
  );
};

export default Products;
