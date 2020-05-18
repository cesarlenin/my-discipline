import React, { Component } from 'react'
import ThreeButtons from '../components/ThreeButtons';
import UserContext from '../components/UserContext'

export class DetailPage extends Component {
  static contextType = UserContext;
  render() {
    const { habits } = this.context;
    const shownHabit = habits.find(
      (habit) => habit.id === this.props.match.params.habitId
    );
    console.log(shownHabit);
    return (
        <main>
          <header>
            <h2>{shownHabit.name}</h2>
          </header>
          <section>
          <p>month calendar goes here</p>
          </section>
        <section>
              <h3>description</h3>
              <p>{shownHabit.description}</p>
        </section>
        <section>
            <h3>goal</h3>
          <p>{shownHabit.goal}</p>
        </section>
        <section className= "aButton">
        <ThreeButtons id={shownHabit.id}/>
        </section>
      </main>
    )
  }
}

export default DetailPage