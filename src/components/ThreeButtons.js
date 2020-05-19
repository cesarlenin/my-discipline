import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class ThreeButtons extends Component {
  render() {
    return ( 
        <div>
        <Link className="link" to={`/EditHabit/${this.props.id}`}>
          edit
        </Link>
        <button>Delete</button>
        <Link className="link" to={`/AddAction/${this.props.id}`}>
        Add Action
        </Link>
      </div>

    )
  }
}

export default ThreeButtons