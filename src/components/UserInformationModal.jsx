import { connect } from "react-redux";
import React, { useState } from "react";
import {
  Modal,
  Button,
  ButtonToolbar,
  Avatar,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Form,
} from "rsuite";

import * as selectors from "../store/reducers";
import * as actions from "../store/actions";
import { useFormik } from "formik";

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
      <Form layout="horizontal" onSubmit={formik.handleSubmit}>
        <FormGroup>
          <ControlLabel>Username</ControlLabel>
          <FormControl
            name="firstName"
            id="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Email</ControlLabel>
          <FormControl
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
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
  }
  return null;
};

UserInformationForm = connect(mapStateToProps, actions)(UserInformationForm);

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

      <Modal show={show} onHide={() => setShow(false)}>
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

  return errors;
};
