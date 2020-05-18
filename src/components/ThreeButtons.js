import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class ThreeButtons extends Component {
  render() {
    return ( 
        <div>
        <NavLink className="link" to={`/EditHabit/${this.props.id}`}>
          edit
        </NavLink>
        <button>Delete</button>
        <NavLink className="link" to={`/AddAction/${this.props.id}`}>
        Add Action
        </NavLink>
      </div>

    )
  }
}

export default ThreeButtons