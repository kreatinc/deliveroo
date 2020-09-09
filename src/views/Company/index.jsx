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
import { useAuthenticated } from "customHooks";
import { getCompany } from "utils/localStorageHelpers";
import * as actions from "store/actions/companyActions";
import * as selectors from "store/reducers";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  products: selectors.getVisibleProducts(state),
  commands: selectors.getCommands(state),
  latestCommands: selectors.getLatestCommands(state),
  commentsCount: selectors.getCommentsCount(state),
  // customers,
  // likes: selectors.getCompanyLikes(state),
});

let Company = ({
  receiveCompany,
  products,
  commands,
  commentsCount,
  getProducts,
  latestCommands,
  getCommands,
}) => {
  let { slug } = useParams();
  console.log("latestCommands :>> ", latestCommands);

  const isAuthenticated = useAuthenticated("company");

  useEffect(() => {
    if (!isAuthenticated) {
      const company = getCompany();
      if (company && company.email) {
        receiveCompany({ data: company });
      }
    }
  }, []);

  useEffect(() => {
    getProducts();
    getCommands();
  }, []);

  useEffect(() => {}, []);

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
            <CompanyCard title="Products" data={products.length} />
          </Columns.Column>
          <Columns.Column>
            <CompanyCard title="Commands" data={commands.length} />
          </Columns.Column>
          <Columns.Column>
            <CompanyCard title="Comments" data={commentsCount} />
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

Company = connect(mapStateToProps, actions)(Company);

export default Company;
