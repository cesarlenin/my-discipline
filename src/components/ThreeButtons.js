import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HabitsApiService from '../services/my-discipline-api-service'
import UserContext from './UserContext';

export class ThreeButtons extends Component {
  static contextType = UserContext;

  handleDelete = e => {
    this.context.clearError()
    let removeHabit= this.context.removeHabit;
    HabitsApiService.deleteHabit(this.props.id)
    .then(()=>removeHabit(this.props.id))
    .catch(error=>this.context.setError(error))
  }

  render() {
    return ( 
        <div>
        <Link className="link" to={`/EditHabit/${this.props.id}`}>
          edit
        </Link>
        <button
        onClick={() => {
          this.handleDelete();
          this.props.history.push('/Home');
          }}>
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