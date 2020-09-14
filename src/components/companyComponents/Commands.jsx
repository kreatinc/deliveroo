import React from "react";
import Table from "./InfoTable";
import NavBar from "./Navbar";
import { Container } from "@material-ui/core";

const DELIVERY_STATE = {
  WAITING: "waiting",
  DELIVERED: "delivered",
  REJECTED: "rejected",
};

const Commands = ({ commands }) => {
  return (
    <>
      <NavBar />
      <Container>
        <Table
          title="Commands informations"
          columns={[
            { title: "Price", field: "price" },
            { title: "Quantity", field: "quantity" },
            { title: "Description", field: "description" },
            { title: "Address", field: "address" },
            {
              title: "Delivery state",
              field: "delivery",
              lookup: {
                [DELIVERY_STATE.WAITING]: "Waiting",
                [DELIVERY_STATE.DELIVERED]: "Delivered",
                [DELIVERY_STATE.REJECTED]: "Rejected",
              },
            },
          ]}
          data={commands.map((command) => ({
            price: command.price,
            quantity: command.quantity,
            description: command.description,
            address: command.address,
            delivery: command.delivery_state,
          }))}
        />
      </Container>
    </>
  );
};

export default Commands;
