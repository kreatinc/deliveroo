import React, { useState } from "react";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import { Button } from "rsuite";
import { Grid, Box } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import ErrorsContainer from "components/ErrorsContainer";
import { connect } from "react-redux";
import * as actions from "store/actions/companyActions";

let LoginForm = ({ classes, login }) => {
  const [spinning, setSpinning] = useState(false);
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      setSpinning(true);
      login(values, history);
    },
  });
  return (
    <>
      {Object.keys(formik.errors).length !== 0 && (
        <ErrorsContainer errors={formik.errors} />
      )}
      <form onSubmit={formik.handleSubmit} className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Button type="submit" variant="contained" appearance="primary">
          Sign in
        </Button>
        <Grid container style={{ marginTop: "5%" }}>
          <Grid item>
            <Link to="/company/register" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}></Box>
      </form>
    </>
  );
};

LoginForm = connect(null, actions)(LoginForm);

export default LoginForm;

const validate = (values) => {
  const errors = {};
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 10) {
    errors.password = "Must be 10 characters or more";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid";
  }

  return errors;
};
