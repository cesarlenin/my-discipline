import React, { Component } from 'react'


export class Day extends Component {
  render() {
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return ( 
        <div className='day'>
          {weekday[this.props.day.getDay()]}
          <br/>
          {this.props.day.getDate()}
        </div>
    )
  }
}

export default Day