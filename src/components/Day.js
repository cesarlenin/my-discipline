import React, { Component } from 'react'
import UserContext from './UserContext';

export class Day extends Component {
  static contextType = UserContext;

  render() {
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    const { actions} = this.context;

    const datesAreOnSameDay = (first, second) =>
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();

    let actionsShown = actions.filter(
      (action) => action.habit_id === this.props.id
      );

    let shownDate = actionsShown.find(
      (action) =>{ 
        return datesAreOnSameDay(this.props.day, new Date(action.date_created))
      }
    );

    if(!shownDate){
      return <div className='day'>
          {weekday[this.props.day.getDay()]}
          <br/>
          {this.props.day.getDate()}
        </div>
    }else{
      return<div className='greenDay'>
          {weekday[this.props.day.getDay()]}
          <br/>
          {this.props.day.getDate()}
        </div>
    }
}
}
export default Day