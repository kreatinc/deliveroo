import React, { useEffect } from "react";
import NavBarComponent from "components/NavBar";
import HomeProduct from "components/HomeProduct";
import { Container, Columns } from "react-bulma-components/lib";
import { Button } from "react-bulma-components/dist";
import Card from "react-bulma-components/lib/components/card";
import bannerImg from "../assets/img/bannerImg.png";
import Review from "components/Review";
import { useAuthenticated } from "customHooks";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as selectors from "store/reducers";
import * as actions from "store/actions/userActions";

const mapStateToProps = (state) => ({
  products: selectors.getVisibleProducts(state),
});

let Welcome = ({ fetchProducts, products }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("products :>> ", products);
  const isAuthenticated = useAuthenticated();
  if (!isAuthenticated) {
    return (
      <div>
        <NavBarComponent />
        <div>
          <Container className="welcome__container">
            <Card className="banner-card">
              <Columns>
                <Columns.Column>
                  <div className="banner__header">
                    <h1>
                      Choose your joy <span role="img">🍝</span>, we bring it to
                      you
                    </h1>
                  </div>
                </Columns.Column>
                <Columns.Column>
                  <img
                    src={bannerImg}
                    alt="banner"
                    className="banner-logo"
                  ></img>
                </Columns.Column>
              </Columns>
              <Columns>
                <Columns.Column></Columns.Column>
                <Columns.Column className="is-full">
                  <Button className="btn is-large">
                    <NavLink
                      style={{
                        color: "white",
                      }}
                      to="/login/company"
                    >
                      Company space &rarr;
                    </NavLink>
                  </Button>
                </Columns.Column>
              </Columns>
            </Card>
            <div className="categories-list">
              <Columns>
                {products.map(
                  (product, i) =>
                    i <= 3 && (
                      <Columns.Column>
                        <HomeProduct product={product} key={i} />
                      </Columns.Column>
                    )
                )}
              </Columns>
              <hr></hr>
              <p className="heading-2">What our clients say about us</p>
              <Columns>
                <Columns.Column>
                  <Review></Review>
                </Columns.Column>
                <Columns.Column>
                  <Review></Review>
                </Columns.Column>
                <Columns.Column>
                  <Review></Review>
                </Columns.Column>
                <Columns.Column>
                  <Review></Review>
                </Columns.Column>
              </Columns>
            </div>
          </Container>
        </div>
      </div>
    );
  }
};

Welcome = connect(mapStateToProps, actions)(Welcome);

export default Welcome;
