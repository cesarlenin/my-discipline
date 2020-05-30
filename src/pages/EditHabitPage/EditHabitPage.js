import React, { Component } from 'react';
import EditHabitForm from '../../components/EditHabitForm/EditHabitForm';
import UserContext from '../../components/UserContext/UserContext'
import BackButton from '../../components/BackButton/BackButton';
import './EditHabitPage.css';

export class EditHabitPage extends Component {
  static contextType = UserContext;
  render() {
    const {
      habits
    } = this.context;
    
    const shownHabit = habits.find(
      (habit) => habit.id === Number(this.props.match.params.habitId)
    );
    return ( 
      <section >
        <header >
          <h1 > Edit Habit </h1> 
        </header> 
        <BackButton {...this.props}/> 
        <section className = 'edit' >
          <EditHabitForm habit = {shownHabit} {...this.props}/> 
        </section> 
      </section>
    )
  }
}

export default EditHabitPage;