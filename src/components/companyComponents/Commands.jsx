import React from "react";
import Table from "./InfoTable";
import NavBar from "./Navbar";
import { Container } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "store/actions/companyActions";

const DELIVERY_STATE = {
  WAITING: "waiting",
  DELIVERED: "delivered",
  REJECTED: "canceled",
};

let Commands = ({ commands, editCommand, removeCommand, addCommand }) => {
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
              field: "delivery_state",
              lookup: {
                [DELIVERY_STATE.WAITING]: "waiting",
                [DELIVERY_STATE.DELIVERED]: "delivered",
                [DELIVERY_STATE.REJECTED]: "canceled",
              },
            },
          ]}
          data={commands.map((command) => ({
            id: command.command_group_id,
            price: command.price,
            quantity: command.quantity,
            description: command.description,
            address: command.address,
            delivery_state: command.delivery_state,
          }))}
          editAction={editCommand}
          removeAction={removeCommand}
        />
      </Container>
    </>
  );
};

Commands = connect(null, actions)(Commands);

export default Commands;
