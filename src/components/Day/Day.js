import React, { Component } from 'react';
import UserContext from '../UserContext/UserContext';
import './Day.css';

export class Day extends Component {
  static contextType = UserContext;

  render() {
    let weekday = new Array(7);
    weekday[0] = 'Sun';
    weekday[1] = 'Mon';
    weekday[2] = 'Tue';
    weekday[3] = 'Wed';
    weekday[4] = 'Thu';
    weekday[5] = 'Fri';
    weekday[6] = 'Sat';

    const {
      actions
    } = this.context;

    const datesAreOnSameDay = (first, second) =>
      first.getFullYear() === second.getFullYear() &&
      first.getMonth() === second.getMonth() &&
      first.getDate() === second.getDate();

    let actionsShown = actions.filter(
      (action) => action.habit_id === this.props.id
    );

    let shownDate = actionsShown.find(
      (action) => {
        return datesAreOnSameDay(this.props.day, new Date(action.date_created));
      }
    );

    if (!shownDate) {
      return <div className = 'day' > 
      {weekday[this.props.day.getDay()]} 
      <br/> 
      {this.props.day.getDate()} 
      </div>
    } else {
      return <div className = 'greenDay' > 
      {weekday[this.props.day.getDay()]} 
      <br/> 
      {this.props.day.getDate()} 
      </div>
    }
  }
}
export default Day;