import React, { useEffect } from "react";
import MaterialTable from "material-table";
import * as actions from "store/actions/companyActions";
import { connect } from "react-redux";
import { editProduct } from "services/company";

let MaterialTableDemo = ({
  columns,
  data,
  title,
  addAction,
  editAction,
  removeAction,
}) => {
  return (
    <MaterialTable
      style={{ marginTop: "5%" }}
      title={title}
      columns={columns}
      data={data}
      editable={{
        onRowAdd: (newData) => addAction(newData),
        onRowUpdate: (newData, oldData) => editAction(newData),
        onRowDelete: (oldData) => removeAction(oldData),
      }}
    />
  );
};

MaterialTableDemo = connect(null, actions)(MaterialTableDemo);

export default MaterialTableDemo;
