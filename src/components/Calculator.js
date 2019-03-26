import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Row, Col, Form, Dropdown, DropdownButton, Button
} from "react-bootstrap";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calculator: false,
      expectedReturns: null,
    };
    this.showCalculator = this.showCalculator.bind(this);
  }

  showCalculator = () => {
    this.setState({ calculator: !this.state.showCalculator })
  }

  calculateInvestment = () => {
    const amt = 1000;
    const age = 18;
    const targetAge = 25
    const year = targetAge - 18;
    const returnRate = 0.035;
    const expectedReturns =  amt * Math.pow((1 + returnRate),year) - amt
    this.setState({
      calculator: true,
      expectedReturns: expectedReturns,
    });

  }

  render() {
    return (
      <div>
        <div>
        <Button onClick={this.showCalculator}>Investment helper</Button>
      </div>
      <div>
        <Form onSubmit={this.calculateInvestment}>
        <Form.Group as={Row} controlId="targetAmount">
          <Form.Label column sm="2">
          Target:
          </Form.Label>
          <Col sm="2">
            <Form.Control plaintext/>
          </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="targetAge">
          <Form.Label column sm="2">
            Target age:
          </Form.Label>
          <Col sm="2">
            <Form.Control plaintext/>
          </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="etifunds">
            <Form.Label column sm="2">Fund Name:</Form.Label>
            <Col sm="1.5">
              <Form.Control as="select">
                <option>STI</option>
                <option>SPDR</option>
              </Form.Control>
            </Col>
          </Form.Group>
        </Form>
        <Button variant="primary" type="submit" onClick="calculateInvestment">
         Submit
        </Button>
        <p>Returns: {this.state.expectedReturns}</p>
      </div>
      </div>
    );
  }
}


