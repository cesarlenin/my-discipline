import React, { Component } from 'react'
import UserContext from './UserContext'
import Habit from '../components/Habit/Habit';
import { v4 as uuidv4 } from 'uuid';

export class HabitList extends Component {
  static contextType = UserContext;
  render() {
    
    const {habits} = this.context;
    const habitsList = habits.map(habit=> {
     return <Habit key={uuidv4()} id={habit.id} name={habit.habit_name}/>
   })
    
    return ( 
        <div>
        {habitsList}
        </div>

    )
  }
}

export default HabitList