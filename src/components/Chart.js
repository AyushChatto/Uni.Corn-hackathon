import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Bar, Line, Pie, Scatter, Area } from "react-chartjs-2";
import axios from 'axios';
import transactionData from './transactionData';

class Chart extends Component {
  constructor(props) {
    super(props);
    let url =
      "http://api-gateway-dbs-techtrek.ap-southeast-1.elasticbeanstalk.com/customers/limzeyang";

    this.state = {
      data: {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [
          {
            label: "Spending",
            backgroundColor: "rgba(255,0,255,0.75)",
            data: [4, 5, 1, 10, 32, 2, 12]
          },
          {
            label: "Savings",
            backgroundColor: "rgba(0,255,0,0.75)",
            data: [14, 15, 21, 0, 12, 4, 2]
          }
        ]
      }
    };
  }

  getActualData = () => {
    let response = transactionData;
    let credits = [];
    let debits = [];
    response.forEach(x => {
      if (x.type == "CREDIT") {
        credits.push(parseInt(x.amount));
      } else {
        debits.push(parseInt(x.amount));
      }
    });
    for (let i = 0; i < 27; i++) {
      debits[i] = debits[i] + debits[i + 9] + debits[i + 18];
    }
    return {
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        datasets: [
          {
            label: "Spending",
            backgroundColor: "rgba(255,0,255,0.75)",
            data: debits
          },
          {
            label: "Savings",
            backgroundColor: "rgba(0,255,0,0.75)",
            data: credits
          }
        ]
      }
    };;
  }

  render() {
    return (
      <Container>
        <div style={{ position: "relative", width: 600, height: 550 }}>
          <h3>Transaction Report</h3>
          <Line options={{ responsive: true }} data={this.getActualData().data} />
        </div>
      </Container>
    );
  }
}

export default Chart;
