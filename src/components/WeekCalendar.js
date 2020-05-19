import React, { Component } from 'react'
import Day from './Day';

export class WeekCalendar extends Component {
  render() {
    let daysHTML= [];

    for (let index = 6; index >= 0; index--) {
        let newDay= new Date();
        newDay.setDate(newDay.getDate()-index) ;
        daysHTML.push(<Day day={newDay}/>);
    }
    return ( 
        <div className="weekCalendar">
            {daysHTML}
        </div>
    )
  }
}

export default WeekCalendar