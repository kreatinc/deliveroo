import React, { useEffect } from "react";
import MaterialTable from "material-table";
import * as actions from "store/actions/companyActions";
import { connect } from "react-redux";

let MaterialTableDemo = ({ columns, data, title, addProduct }) => {
  return (
    <MaterialTable
      style={{ marginTop: "5%" }}
      title={title}
      columns={columns}
      data={data}
      editable={{
        onRowAdd: (newData) => {
          addProduct(newData);
        },
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            // setTimeout(() => {
            //   resolve();
            //   if (oldData) {
            //     setState((prevState) => {
            //       const data = [...prevState.data];
            //       data[data.indexOf(oldData)] = newData;
            //       return { ...prevState, data };
            //     });
            //   }
            // }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            // setTimeout(() => {
            //   resolve();
            //   setState((prevState) => {
            //     const data = [...prevState.data];
            //     data.splice(data.indexOf(oldData), 1);
            //     return { ...prevState, data };
            //   });
            // }, 600);
          }),
      }}
    />
  );
};

MaterialTableDemo = connect(null, actions)(MaterialTableDemo);

export default MaterialTableDemo;
