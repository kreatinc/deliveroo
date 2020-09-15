import React, { useState } from "react";
import { useFormik } from "formik";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "store/actions/companyActions";
import {
  ButtonToolbar,
  ControlLabel,
  FormGroup,
  Form,
  Button,
  Modal,
} from "rsuite";
import ErrorsContainer from "components/ErrorsContainer";

let CompanyPasswordForm = ({ updatePassword, closeModal }) => {
  const formik = useFormik({
    initialValues: {
      old_password: "",
      password: "",
      confirm: "",
    },
    validate,
    onSubmit: (values) => {
      const isSure = window.confirm(
        "Are you sure you want to perceed with this action ?"
      );

      if (isSure) {
        updatePassword(values.old_password, values.password, values.confirm);
        closeModal();
      }
    },
  });

  return (
    <>
      {Object.keys(formik.errors).length !== 0 && (
        <ErrorsContainer errors={formik.errors} />
      )}
      <Form
        layout="vertical"
        onSubmit={formik.handleSubmit}
        style={{ marginTop: "5%" }}
      >
        <FormGroup>
          <ControlLabel></ControlLabel>

          <TextField
            autoComplete="password"
            name="old_password"
            variant="outlined"
            fullWidth
            required
            id="old_password"
            type="password"
            label="Old password"
            onChange={formik.handleChange}
            value={formik.values.old_password}
          />
        </FormGroup>
        <FormGroup>
          <TextField
            autoComplete="password"
            name="password"
            variant="outlined"
            fullWidth
            required
            id="password"
            type="password"
            label="New password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </FormGroup>

        <FormGroup>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            required
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
    </>
  );
};

CompanyPasswordForm = connect(null, actions)(CompanyPasswordForm);

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
          <CompanyPasswordForm closeModal={() => setShow(false)} />
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

export default UserPasswordModal;

const validate = (values) => {
  const errors = {};
  if (!values.old_password) {
    errors.old_password = "Required";
  } else if (values.old_password.length > 15) {
    errors.old_password = "15 characters or less";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if (values.password !== values.confirm) {
    errors.password = "Not matching";
  }
  return errors;
};
