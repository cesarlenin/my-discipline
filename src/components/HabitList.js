import React, { Component } from 'react'
import UserContext from './UserContext'
import Habit from '../components/Habit/Habit';

export class HabitList extends Component {
  static contextType = UserContext;
  render() {
    
    const {habits} = this.context;
    const habitsList = habits.map((habit, index)=> {
     return <Habit key={index} id={habit.id} name={habit.habit_name} {...this.props}/>
   })
    
    return ( 
        <div>
        {habitsList}
        </div>

    )
  }
}

export default HabitList