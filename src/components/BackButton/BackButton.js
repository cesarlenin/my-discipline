import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BackButton.css';

export class BackButton extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.props.history.goBack();
  }
  render() {
    return ( 
    <div className = 'back' >
      <button onClick = {this.goBack}>
         Go Back 
      </button>
    </div>
    )
  }
}

export default BackButton;