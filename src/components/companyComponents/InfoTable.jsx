import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "id", label: "Id", minWidth: 170 },
  { id: "title", label: "Title", minWidth: 100 },
  {
    id: "quantity",
    label: "Quantity",
    minWidth: 170,
    align: "right",
    // format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "category",
    label: "Category",
    minWidth: 170,
    align: "right",
    // format: (value) => value.toLocaleString("en-US"),
  },
];

const createData = (id, title, quantity, category) => ({
  id,
  title,
  quantity,
  category,
});

const rows = [
  createData(1, "Tortya with fries", 200, "Tortya"),
  createData(2, "Tortya with fries", 20, "Tortya"),
  createData(3, "Tacos with fries", 19, "Tacos"),
  createData(4, "Tortya with fries", 20, "Tortya"),
  createData(5, "Tortya with fries", 18, "Tortya"),
  createData(6, "Tortya with fries", 94, "Tortya"),
  createData(6, "Tortya with fries", 94, "Tortya"),
  createData(6, "Tortya with fries", 94, "Tortya"),
  createData(6, "Tortya with fries", 94, "Tortya"),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: "5%",
    borderStyle: "solid",
    borderColor: "",
  },
  container: {
    maxHeight: 440,
  },
});

export default function MaterialTableDemo() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
