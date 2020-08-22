import React from "react";
import NavBarComponent from "components/NavBar";
import HomeProduct from "components/HomeProduct";
import { Container, Columns } from "react-bulma-components/lib";
import Card from "react-bulma-components/lib/components/card";
import bannerImg from "../assets/img/bannerImg.png";
import Review from "components/Review";
import { useAuthenticated } from "customHooks";
const Welcome = () => {
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
            </Card>
            <div className="categories-list">
              <Columns>
                <Columns.Column>
                  <HomeProduct />
                </Columns.Column>
                <Columns.Column>
                  <HomeProduct />
                </Columns.Column>
                <Columns.Column>
                  <HomeProduct />
                </Columns.Column>
                <Columns.Column>
                  <HomeProduct />
                </Columns.Column>
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

export default Welcome;
