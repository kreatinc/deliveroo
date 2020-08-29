import React from "react";
import { Columns } from "react-bulma-components/lib";
import Card from "react-bulma-components/lib/components/card";

const CompanyCard = () => {
  return (
    <Card>
      <header className="card-header">
        <p className="card-header-title">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam,
          necessitatibus.
        </p>
        <a href="#" className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div className="card-content"></div>
    </Card>
  );
};

export default CompanyCard;
