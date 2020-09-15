import Product from "components/companyComponents/Product";
import React from "react";
import Card from "react-bulma-components/lib/components/card";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";

let data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Commandes",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "#555",
      data: [0, 10, 5, 2, 20, 30, 45, 60, 3, 17],
    },
  ],
};

const SalesChart = ({ title, items }) => {
  return (
    <Card className="company__card">
      <header className="card-header">
        <h3 style={{ paddingLeft: "20px" }}>{title}</h3>
      </header>
      <div className="chart-holder">
        <Line data={data} />
      </div>
    </Card>
  );
};

export default SalesChart;
