import React from "react";
import NavBar from "components/companyComponents/Navbar";
import "./index.css";
import { Columns, Container } from "react-bulma-components/lib";
import CompanyCard from "components/companyComponents/Card";
import ReviewCard from "components/companyComponents/ReviewCard";
import { useHistory, useParams } from "react-router-dom";
import Products from "components/companyComponents/Products";
import Commands from "components/companyComponents/Commands";
import Stock from "components/companyComponents/Stock";
import Login from "components/companyComponents/Login";
import Register from "components/companyComponents/Register";
import { useAuthenticatedCompany } from "customHooks";

const Company = () => {
  let { slug } = useParams();

  const isAuthenticated = useAuthenticatedCompany();
  const history = useHistory();

  if (isAuthenticated) {
    if (slug && slug === "products") {
      return <Products />;
    }
    if (slug && slug === "commands") {
      return <Commands />;
    }
    if (slug && slug === "stock") {
      return <Stock />;
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
  }

  if (slug && slug === "login") {
    return <Login />;
  }
  if (slug && slug === "register") {
    return <Register />;
  }
  history.push("/company/login");
};

export default Company;
