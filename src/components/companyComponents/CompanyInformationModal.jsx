import { connect } from "react-redux";
import React, { useState } from "react";
import {
  Modal,
  Button,
  ButtonToolbar,
  FormGroup,
  ControlLabel,
  Form,
} from "rsuite";

import * as selectors from "store/reducers";
import * as actions from "store/actions/companyActions";
import { useFormik } from "formik";
import { TextField } from "@material-ui/core";
import ErrorsContainer from "components/ErrorsContainer";

const mapStateToProps = (state) => ({
  currentCompany: selectors.getCurrentCompany(state),
});

let CompanyInformationForm = ({
  currentCompany,
  updateCompanyInformation,
  closeModal,
}) => {
  const formik = useFormik({
    initialValues: {
      title: currentCompany.title,
      email: currentCompany.email,
      phone: currentCompany.phone,
      address: currentCompany.address,
      description: currentCompany.address,
    },
    validate,
    onSubmit: (values) => {
      const isSure = window.confirm(
        "Are you sure you want to perceed with this action ?"
      );

      if (isSure) {
        updateCompanyInformation({
          title: values.title,
          email: values.email,
          phone: values.phone,
          address: values.address,
          description: values.description,
        });
        closeModal();
      }
    },
  });

  if (currentCompany) {
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
              name="title"
              variant="outlined"
              required
              fullWidth
              id="title"
              label="title"
              autoFocus
              onChange={formik.handleChange}
              value={formik.values.title}
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
              autoComplete="fname"
              name="description"
              variant="outlined"
              required
              fullWidth
              id="description"
              label="Description"
              autoFocus
              onChange={formik.handleChange}
              value={formik.values.description}
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
            </ButtonToolbar>
          </FormGroup>
        </Form>
      </>
    );
  }
  return null;
};

CompanyInformationForm = connect(
  mapStateToProps,
  actions
)(CompanyInformationForm);

const UserModal = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <ButtonToolbar>
        <Button onClick={() => setShow(true)}>Edit informations</Button>
      </ButtonToolbar>

      <Modal size="sm" show={show} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>Company informations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CompanyInformationForm closeModal={() => setShow(false)} />
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
  if (!values.title) {
    errors.title = "Required";
  } else if (values.title.length > 25) {
    errors.title = "25 characters or less";
  }
  if (!values.description) {
    errors.description = "Required";
  } else if (values.description.length >= 40) {
    errors.description = "40 characters";
  }
  if (!values.phone) {
    errors.phone = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid";
  }

  return errors;
};
