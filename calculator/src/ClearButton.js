import React, { Component } from 'react';
import './ClearButton.css'

class ClearButton extends Component {
  render() {
    return (
      <div className="clear-btn"
      onClick={() => this.props.handelClick()}
      > 
        {this.props.children}
      </div>
    );
  }
}

export default ClearButton;