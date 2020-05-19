import React, { Component } from 'react'
import Day from './Day';
import UserContext from './UserContext';

export class WeekCalendar extends Component {
  static contextType = UserContext;
  render() {
    let daysHTML= [];
    // let color;
    // var date = new Date();
    // date.toUTCString();
    // console.log(date )

    //find props.id
    // props.id=== context.actions.id &&  newDay===dateCreated
    //if bool true color=green
    for (let index = 6; index >= 0; index--) {
        let newDay= new Date();
        newDay.setDate(newDay.getDate()-index);
        daysHTML.push(<Day key={index} day={newDay} />
          );
    }
    return ( 
        <div className="weekCalendar">
            {daysHTML}
        </div>
    )
  }
}

export default WeekCalendar