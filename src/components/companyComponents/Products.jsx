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
        <Table
          columns={{
            columns: [
              { title: "Name", field: "name" },
              { title: "Surname", field: "surname" },
              { title: "Birth Year", field: "birthYear", type: "numeric" },
              {
                title: "Birth Place",
                field: "birthCity",
                lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
              },
            ],
            data: [
              {
                name: "Mehmet",
                surname: "Baran",
                birthYear: 1987,
                birthCity: 63,
              },
              {
                name: "Zerya Betül",
                surname: "Baran",
                birthYear: 2017,
                birthCity: 34,
              },
              {
                name: "Zerya Betül",
                surname: "Baran",
                birthYear: 2017,
                birthCity: 34,
              },
              {
                name: "Zerya Betül",
                surname: "Baran",
                birthYear: 2017,
                birthCity: 34,
              },
              {
                name: "Zerya Betül",
                surname: "Baran",
                birthYear: 2017,
                birthCity: 34,
              },
              {
                name: "Zerya Betül",
                surname: "Baran",
                birthYear: 2017,
                birthCity: 34,
              },
            ],
          }}
        />
      </Container>
    </>
  );
};

export default Products;
