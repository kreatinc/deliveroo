import React from "react";
import Table from "./InfoTable";
import NavBar from "./Navbar";
import { Container } from "@material-ui/core";

const Commands = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Table
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
        />
      </Container>
    </>
  );
};

export default Commands;
