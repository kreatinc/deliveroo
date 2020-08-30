import React from "react";
import NavBar from "components/companyComponents/Navbar";
import "./index.css";
import { Columns, Container } from "react-bulma-components/lib";
import CompanyCard from "components/companyComponents/Card";
import ReviewCard from "components/companyComponents/ReviewCard";
import { useParams } from "react-router-dom";
import Products from "components/companyComponents/Products";
import Commands from "components/companyComponents/Commands";
import Stock from "components/companyComponents/Stock";

const Company = () => {
  let { slug } = useParams();

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
};

export default Company;
