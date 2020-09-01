import React, { useState } from "react";
import { useFormik } from "formik";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "store/actions/companyActions";
import { Icon } from "rsuite";
import { ButtonToolbar, FormGroup, Form, Button, Modal } from "rsuite";
import ErrorsContainer from "components/ErrorsContainer";
import { useHistory } from "react-router-dom";

let SettingsForm = ({ updatePassword, closeModal, logout }) => {
  const history = useHistory();
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
          <ButtonToolbar>
            <Button appearance="primary" type="submit">
              password edit modal
            </Button>
            <Button appearance="primary" type="submit">
              company's info modal
            </Button>
            <Button
              appearance="link"
              onClick={() => {
                logout(history);
                closeModal();
              }}
            >
              Logout
            </Button>
          </ButtonToolbar>
        </FormGroup>
      </Form>
    </>
  );
};

SettingsForm = connect(null, actions)(SettingsForm);

const CompanySettingsModal = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <ButtonToolbar>
        <Button
          appearance="primary"
          onClick={() => setShow(true)}
          style={{ margin: "10px 10px" }}
        >
          <Icon icon="cog" spin style={{ paddingRight: "0px" }} />
          settings
        </Button>
      </ButtonToolbar>

      <Modal size="xs" show={show} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>Edit Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SettingsForm closeModal={() => setShow(false)} />
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

export default CompanySettingsModal;

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
