import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

export default class Barchart extends Component {
  render() {
    return (
      <div className="border border-primary w-25">
        <div className="m-2">
          <h2>Bar Example (custom size)</h2>
          <Bar
            data={data}
            width={50}
            height={100}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </div>
        <div className="m-4" style={{ textAlign: "center", marginTop: 13 }}>
          <Button>保存</Button>
        </div>
      </div>
    );
  }
}
