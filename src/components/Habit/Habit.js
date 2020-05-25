import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import ThreeButtons from '../ThreeButtons';
import WeekCalendar from '../WeekCalendar';

export class Habit extends Component {
  render() {
    
    return ( 
        <section className="list">
        <NavLink className="links" to={`/Detail/${this.props.id}`}>
        <h2>{this.props.name}</h2>
        </NavLink>
        <WeekCalendar id={this.props.id}/>
        <div className= "threeButtons">
        <ThreeButtons id={this.props.id} {...this.props}/>
        </div>
      </section>

    )
  }
}

export default Habit