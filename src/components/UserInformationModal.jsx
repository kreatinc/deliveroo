import { connect } from "react-redux";
import React, { useState } from "react";
import {
  Modal,
  Button,
  ButtonToolbar,
  Avatar,
  FormGroup,
  ControlLabel,
  Form,
} from "rsuite";

import * as selectors from "../store/reducers";
import * as actions from "../store/actions";
import { useFormik } from "formik";
import { TextField } from "@material-ui/core";
import { Columns } from "react-bulma-components/lib";

const mapStateToProps = (state) => ({
  currentUser: selectors.getCurrentUser(state),
});

let UserInformationForm = ({ currentUser }) => {
  const formik = useFormik({
    initialValues: {
      firstName: currentUser.name,
      email: currentUser.email,
    },
    validate,
    onSubmit: (values) => {
      alert("form submitted");
    },
  });

  if (currentUser) {
    return (
      <Form layout="vertical" onSubmit={formik.handleSubmit} fluid>
        <FormGroup>
          <ControlLabel></ControlLabel>
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
        </FormGroup>

        <FormGroup>
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
        </FormGroup>
        <FormGroup>
          <ButtonToolbar>
            <Button appearance="primary" type="submit">
              Submit
            </Button>
            <UserPasswordModal />
          </ButtonToolbar>
        </FormGroup>
      </Form>
    );
  }
  return null;
};

UserInformationForm = connect(mapStateToProps, actions)(UserInformationForm);

let UserPasswordForm = ({ currentUser }) => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirm: "",
    },
    validate,
    onSubmit: (values) => {
      alert("form submitted");
    },
  });

  return (
    <Form layout="vertical" onSubmit={formik.handleSubmit} fluid>
      <FormGroup>
        <ControlLabel></ControlLabel>
        <TextField
          autoComplete="password"
          name="password"
          variant="outlined"
          required
          fullWidth
          id="password"
          type="password"
          label="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </FormGroup>

      <FormGroup>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="confirm"
          label="Confirm password"
          type="password"
          name="confirm"
          onChange={formik.handleChange}
          value={formik.values.confirm}
        />
      </FormGroup>
      <FormGroup>
        <ButtonToolbar>
          <Button appearance="primary" type="submit">
            Submit
          </Button>
        </ButtonToolbar>
      </FormGroup>
    </Form>
  );
};

const UserPasswordModal = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <ButtonToolbar>
        <Button appearance="link" onClick={() => setShow(true)}>
          Change password
        </Button>
      </ButtonToolbar>

      <Modal size="xs" show={show} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>Edit Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserPasswordForm />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShow(false)} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const UserModal = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <ButtonToolbar>
        <Avatar
          onClick={() => setShow(true)}
          circle
          size="md"
          src="https://lorempixel.com/640/480/?32997"
        />
      </ButtonToolbar>

      <Modal size="sm" show={show} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>User informations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserInformationForm />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShow(false)} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default UserModal;

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "15 characters or less";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid";
  }
  return errors;
};
