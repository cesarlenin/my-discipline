import React, { Component } from 'react';
import Day from '../Day/Day';
import UserContext from '../UserContext/UserContext';
import './WeekCalendar.css';

export class WeekCalendar extends Component {
  static contextType = UserContext;
  render() {
    let daysHTML = [];

    for (let index = 6; index >= 0; index--) {
      let newDay = new Date();
      newDay.setDate(newDay.getDate() - index);

      daysHTML.push( < Day key = { index} id = { this.props.id } day = { newDay }/>);
    }
    return ( 
      <div className = 'weekCalendar' > {
        daysHTML
      } 
      </div>
    )
  }
}

export default WeekCalendar;