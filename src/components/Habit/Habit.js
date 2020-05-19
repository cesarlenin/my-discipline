import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import ThreeButtons from '../ThreeButtons';
import WeekCalendar from '../WeekCalendar';

export class Habit extends Component {
  render() {
    
    return ( 
        <section>
        <header>
        <NavLink className="links" to={`/Detail/${this.props.id}`}>
        <h2>{this.props.name}</h2>
        </NavLink>
        </header>
        <WeekCalendar/>
        <div className= "habit">
        <ThreeButtons id={this.props.id}/>
        </div>
      </section>

    )
  }
}

export default Habit