import React, { useEffect, useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import { Button } from "rsuite";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as actions from "store/actions/companyActions";
import ErrorsContainer from "components/ErrorsContainer";
import SignUp from "views/Register";
import { connect } from "react-redux";
import { getNotifications } from "store/reducers";
import { Notification } from "rsuite";

const mapStateToProps = (state) => {
  return {
    notifications: getNotifications(state),
  };
};

let SignUpForm = ({ classes, register, notifications }) => {
  const [spinning, setSpinning] = useState(false);
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      phone: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      setSpinning(true);
      register(values, history);
    },
  });
  useEffect(() => {
    if (notifications) {
      notifications.map((notification) => {
        Notification.info({
          title: "Notification",
          placement: "bottomStart",
          duration: 3000,
          description: notification,
        });
      });
    }
  }, [notifications]);
  return (
    <>
      {Object.keys(formik.errors).length !== 0 && (
        <ErrorsContainer errors={formik.errors} />
      )}
      <form onSubmit={formik.handleSubmit} className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              autoComplete="pnumber"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
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
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
        <Button type="submit" variant="contained" appearance="primary">
          Sign Up
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link to="/company/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

SignUpForm = connect(mapStateToProps, actions)(SignUpForm);

export default SignUpForm;
const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "15 characters or less";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (values.phone.length > 20) {
    errors.phone = "too long";
  } else if (isNaN(values.phone)) {
    errors.phone = "not a number";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 20) {
    errors.password = "characters or less";
  }

  return errors;
};
