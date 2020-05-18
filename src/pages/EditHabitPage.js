import React, { Component } from 'react'
import EditHabitForm from '../components/EditHabitForm';
import UserContext from '../components/UserContext'

export class EditHabitPage extends Component {
  static contextType = UserContext;
  render() {
    const { habits } = this.context;
    const shownHabit = habits.find(
      (habit) => habit.id === this.props.match.params.habitId
    );
    return (
      <main>
      <header>
        <h1>Edit Habit</h1>
      </header>
      <section>
          <EditHabitForm habit={shownHabit} />
      </section>
    </main>
    )
  }
}

export default EditHabitPage