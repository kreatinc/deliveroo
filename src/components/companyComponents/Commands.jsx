import React from "react";
import Table from "./InfoTable";
import NavBar from "./Navbar";
import { Container } from "@material-ui/core";

const Commands = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Table />
      </Container>
    </>
  );
};

export default Commands;
