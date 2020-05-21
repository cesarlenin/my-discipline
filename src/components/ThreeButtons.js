import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HabitsApiService from '../services/my-discipline-api-service'
import UserContext from './UserContext';

export class ThreeButtons extends Component {
  static contextType = UserContext;

  handleDelete = e => {
    this.context.clearError()
    HabitsApiService.DeleteHabit(this.props.id)
    .then(this.context.removeHabit)
    .catch(this.context.setError)
  }

  render() {
    return ( 
        <div>
        <Link className="link" to={`/EditHabit/${this.props.id}`}>
          edit
        </Link>
        <button
        onClick={() => {this.handleDelete()}}>
          Delete
        </button>
        <Link className="link" to={`/AddAction/${this.props.id}`}>
        Add Action
        </Link>
      </div>

    )
  }
}

export default ThreeButtons