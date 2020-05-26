import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ThreeButtons from '../ThreeButtons/ThreeButtons';
import WeekCalendar from '../WeekCalendar/WeekCalendar';
import './Habit.css'

export class Habit extends Component {
  render() {
    
    return ( 
        <section className="list">
        <Link className="links" to={`/Detail/${this.props.id}`}>
        <h2>{this.props.name}</h2>
        </Link>
        <WeekCalendar id={this.props.id}/>
        <div className= "threeButtons">
        <ThreeButtons id={this.props.id} {...this.props}/>
        </div>
      </section>

    )
  }
}

export default Habit