import React, { useState } from "react";
import { useFormik } from "formik";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "store/actions/companyActions";
import { Icon } from "rsuite";
import { ButtonToolbar, FormGroup, Form, Button, Modal } from "rsuite";
import ErrorsContainer from "components/ErrorsContainer";
import { useHistory } from "react-router-dom";
import CompanyInformationModal from "./CompanyInformationModal";
import CompanyPasswordModal from "./CompanyPasswordModal";

let SettingsForm = ({ updatePassword, closeModal, logout }) => {
  const history = useHistory();

  return (
    <>
      <FormGroup>
        <ButtonToolbar>
          <CompanyInformationModal />
          <CompanyPasswordModal />
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
          settings
        </Button>
      </ButtonToolbar>

      <Modal size="xs" show={show} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>Comapny Informations</Modal.Title>
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
