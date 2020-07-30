import React from "react";
import Card from "react-bulma-components/lib/components/card";
import Button from "./Button";
import sampleImage from "assets/img/test-1.jpg";
const BannerComponent = () => {
  return (
    <Card>
      <header class="card-header">
        <p class="card-header-title">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam,
          necessitatibus.
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div class="card-content">
        <div class="content">
          <img style={{ borderRadius: "20px" }} src={sampleImage}></img>
          <br />
        </div>
        <footer class="card-footer mb-5">
          <Button
            onClick={() => {
              // redirect to sign in/sign up page
            }}
          >
            Take a look
          </Button>
        </footer>
      </div>
    </Card>
  );
};

export default BannerComponent;
