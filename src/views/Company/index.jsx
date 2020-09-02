import React, { useEffect } from "react";
import NavBar from "components/companyComponents/Navbar";
import "./index.css";
import { Columns, Container } from "react-bulma-components/lib";
import CompanyCard from "components/companyComponents/Card";
import ReviewCard from "components/companyComponents/ReviewCard";
import { useHistory, useLocation, useParams } from "react-router-dom";
import Products from "components/companyComponents/Products";
import Commands from "components/companyComponents/Commands";
import Stock from "components/companyComponents/Stock";
import Login from "components/companyComponents/Login";
import Register from "components/companyComponents/Register";
import { useAuthenticatedCompany } from "customHooks";
import { getCompany } from "utils/localStorageHelpers";
import * as actions from "store/actions/companyActions";
import { connect } from "react-redux";

let Company = ({ receiveCompany }) => {
  let { slug } = useParams();

  const isAuthenticated = useAuthenticatedCompany();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      const company = getCompany();
      if (company && company.email) {
        receiveCompany({ data: company });
      }
    }
  }, []);

  if (slug && slug === "products") {
    return <Products />;
  }
  if (slug && slug === "commands") {
    return <Commands />;
  }
  if (slug && slug === "stock") {
    return <Stock />;
  }

  if (slug && slug === "login") {
    return <Login />;
  }
  if (slug && slug === "register") {
    return <Register />;
  }

  return (
    <div>
      <NavBar />
      <Container className="welcome__container">
        <Columns>
          <Columns.Column>
            <CompanyCard />
          </Columns.Column>
          <Columns.Column>
            <CompanyCard />
          </Columns.Column>
          <Columns.Column>
            <CompanyCard />
          </Columns.Column>
          <Columns.Column>
            <CompanyCard />
          </Columns.Column>
        </Columns>
        <div style={{ marginTop: "5%" }}>
          <Columns>
            <Columns.Column>
              <ReviewCard />
            </Columns.Column>
            <Columns.Column>
              <ReviewCard />
            </Columns.Column>
          </Columns>
        </div>
      </Container>
    </div>
  );
};

Company = connect(null, actions)(Company);

export default Company;
