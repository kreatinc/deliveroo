import React from "react";
import NavBarComponent from "components/NavBar";
import HomeProduct from "components/HomeProduct";
import { Container, Columns } from "react-bulma-components/lib";
import Card from "react-bulma-components/lib/components/card";
import bannerImg from "../assets/img/bannerImg.png";
const Welcome = () => {
  return (
    <div>
      <NavBarComponent />
      <div>
        <Container className="welcomepage-container">
          <Card className="banner-card">
            <Columns>
              <Columns.Column>
                <div className="banner-header">
                  <h1>
                    Choose your joy <span role="img">🍝</span>, we bring it to
                    you
                  </h1>
                </div>
              </Columns.Column>
              <Columns.Column>
                <img src={bannerImg} alt="banner" className="banner-logo"></img>
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
            </Columns>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Welcome;
