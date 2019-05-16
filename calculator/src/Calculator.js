import React, { Component } from 'react'
import Button from './components/Button'
import './Calculator.css'
import Input from './Input.js'
import ClearButton from './ClearButton.js';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    }
  }
  addToInput = val => {
    this.setState({
      input: this.state.input + val
    });
  }
  addZeroToInput = val => {
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  }
  addDecimal = val => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val })
    }
  }
  clearinput = () => this.setState({ input: "" })
  add = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "plus";
  }
  evaluate = () => {
    this.state.currentNumber = this.state.input;
    if (this.state.operator == "plus") {
      this.setState({ input: parseInt(this.state.previousNumber) + parseInt(this.state.currentNumber) })
    }
    if (this.state.operator == "subs") {
      this.setState({ input: parseInt(this.state.previousNumber) - parseInt(this.state.currentNumber) })
    }
    if (this.state.operator == "mul") {
      this.setState({ input: parseInt(this.state.previousNumber) * parseInt(this.state.currentNumber) })
    }
    if (this.state.operator == "divide") {
      this.setState({ input: parseInt(this.state.previousNumber) / parseInt(this.state.currentNumber) })
    }
  }
  sub = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "subs";

  }
  mul = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "mul";

  }
  divide=()=>{
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "divide";

  }
  render() {
    return (
      <div className="app">
        <div className="calc-wrap">
          <div className="row">
            <Input >{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handelClick={this.addToInput}>7</Button>
            <Button handelClick={this.addToInput}>8</Button>
            <Button handelClick={this.addToInput}>9</Button>
            <Button handelClick={this.divide}>/</Button>
          </div>
          <div className="row">
            <Button handelClick={this.addToInput}>4</Button>
            <Button handelClick={this.addToInput}>5</Button>
            <Button handelClick={this.addToInput}>6</Button>
            <Button handelClick={this.mul}>*</Button>
          </div>
          <div className="row">
            <Button handelClick={this.addToInput}>1</Button>
            <Button handelClick={this.addToInput}>2</Button>
            <Button handelClick={this.addToInput}>3</Button>
            <Button handelClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handelClick={this.addDecimal}>.</Button>
            <Button handelClick={this.addZeroToInput}>0</Button>
            <Button handelClick={this.evaluate} >=</Button>
            <Button handelClick={this.sub}>-</Button>
          </div>
          <div className="row">
            <ClearButton handelClick={this.clearinput}>Clear</ClearButton>
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator;
