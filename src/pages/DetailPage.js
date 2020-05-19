import React, { Component} from 'react'
import ThreeButtons from '../components/ThreeButtons';
import UserContext from '../components/UserContext'
import Calendar from 'react-calendar';

export class DetailPage extends Component {
  static contextType = UserContext;


  render() {
    const { habits } = this.context;
    const shownHabit = habits.find(
      (habit) => habit.id === this.props.match.params.habitId
    );

    return (
        <main>
          <header>
            <h2>{shownHabit.name}</h2>
          </header>
          <section>
          <Calendar/>
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