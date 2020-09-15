import React, { useEffect } from "react";
import NavBar from "components/companyComponents/Navbar";
import "./index.css";
import { Columns, Container } from "react-bulma-components/lib";
import CompanyCard from "components/companyComponents/Card";
import CommandsReviewCard from "components/companyComponents/CommandsReviewCard";
import CommentsReviewCard from "components/companyComponents/CommentsReviewCard";
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
import { Notification } from "rsuite";

const mapStateToProps = (state) => ({
  products: selectors.getVisibleProducts(state),
  runOutProducts: selectors.getRunOutProducts(state),
  commands: selectors.getCommands(state),
  latestCommands: selectors.getLatestCommands(state),
  comments: selectors.getComments(state),
  notifications: selectors.getNotifications(state),

  // customers,
  // likes: selectors.getCompanyLikes(state),
});

let Company = ({
  receiveCompany,
  products,
  commands,
  comments,
  getProducts,
  latestCommands,
  getCommands,
  getRunOutProducts,
  runOutProducts,
  notifications,
}) => {
  let { slug } = useParams();

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
    if (notifications) {
      notifications.map((notification) => {
        Notification.info({
          title: "Notification",
          placement: "bottomStart",
          duration: 3000,
          description: notification,
        });
      });
    }
  }, [notifications]);

  useEffect(() => {
    getRunOutProducts();
    getProducts();
    getCommands();
  }, [getCommands, getProducts, getRunOutProducts]);

  console.log("commands :>> ", commands);

  if (slug && slug === "products") {
    return <Products products={products} />;
  }
  if (slug && slug === "commands") {
    return <Commands commands={commands} />;
  }
  if (slug && slug === "stock") {
    return <Stock runout={runOutProducts} />;
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
            <CompanyCard title="Comments" data={comments.length} />
          </Columns.Column>
          <Columns.Column>
            <CompanyCard title="Total likes" data={20} />
          </Columns.Column>
        </Columns>
        <div style={{ marginTop: "5%" }}>
          <Columns>
            <Columns.Column className="is-two-forth">
              <CommandsReviewCard
                title="Latest commands"
                items={latestCommands}
              />
            </Columns.Column>
            <Columns.Column>
              <CommentsReviewCard title="Latest comments" items={comments} />
            </Columns.Column>
          </Columns>
        </div>
      </Container>
    </div>
  );
};

Company = connect(mapStateToProps, actions)(Company);

export default Company;
