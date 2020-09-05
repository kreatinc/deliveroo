import React from "react";
import { Columns } from "react-bulma-components/lib";
import Card from "react-bulma-components/lib/components/card";

const CompanyCard = ({ title = "commands", data = "16" }) => {
  return (
    <Card className="company__card">
      <header className="card-header">
        <h3 style={{ paddingLeft: "5px" }}>{title}</h3>
        <a href="#" className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div className="card-content">
        <h2 className="statistic">{data}</h2>
      </div>
    </Card>
  );
};

export default CompanyCard;
