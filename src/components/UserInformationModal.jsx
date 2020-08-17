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
import UserPasswordModal from "./UserPasswordModal";
import ErrorsContainer from "./ErrorsContainer";

const mapStateToProps = (state) => ({
  currentUser: selectors.getCurrentUser(state),
});

let UserInformationForm = ({
  currentUser,
  updateUserInformation,
  closeModal,
}) => {
  const formik = useFormik({
    initialValues: {
      firstName: currentUser.name,
      email: currentUser.email,
      phone: currentUser.phone,
      address: currentUser.address,
    },
    validate,
    onSubmit: (values) => {
      const isSure = window.confirm(
        "Are you sure you want to perceed with this action ?"
      );

      if (isSure) {
        updateUserInformation({
          name: values.firstName,
          email: values.email,
          phone: values.phone,
          address: values.address,
        });
        closeModal();
      }
    },
  });

  if (currentUser) {
    return (
      <>
        {Object.keys(formik.errors).length !== 0 && (
          <ErrorsContainer errors={formik.errors} />
        )}
        <Form
          layout="vertical"
          onSubmit={formik.handleSubmit}
          style={{ marginTop: "5%" }}
          fluid
        >
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
              id="phone"
              label="Phone number"
              name="phone"
              autoComplete="phone"
              autoFocus
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
          </FormGroup>

          <FormGroup>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="address"
              label="Address"
              name="address"
              autoComplete="address"
              autoFocus
              onChange={formik.handleChange}
              value={formik.values.address}
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
      </>
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

      <Modal size="sm" show={show} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>User informations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserInformationForm closeModal={() => setShow(false)} />
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
