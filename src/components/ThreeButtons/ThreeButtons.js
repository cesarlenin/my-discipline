import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HabitsApiService from '../../services/my-discipline-api-service'
import UserContext from '../UserContext/UserContext';
import './ThreeButtons.css'

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
        <section className ='buttons'>
        <Link className= 'backGreen' to={`/EditHabit/${this.props.id}`}>
          edit
        </Link>
        <Link className= 'backBlue' to={`/AddAction/${this.props.id}`}>
        Add Action
        </Link>
        <button className= 'button backRed'
        onClick={() => {
          this.handleDelete();
          this.props.history.push('/Home');
          }}>
          Delete
        </button>
      </section>

    )
  }
}

export default ThreeButtons