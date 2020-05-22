import React, { Component} from 'react'
import ThreeButtons from '../components/ThreeButtons';
import UserContext from '../components/UserContext'
import WeekCalendar from '../components/WeekCalendar';

export class DetailPage extends Component {
  static contextType = UserContext;


  render() {
    const {habits, actions} = this.context;
    const shownHabit = habits.find(
      (habit) => habit.id === Number( this.props.match.params.habitId)
    );

    const datesAreOnSameDay = (first, second) =>
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();

    let progress= 0;

    let actionsShown = actions.filter(
      (action) => action.habit_id ===  Number( this.props.match.params.habitId)
      );

    for (let index = 6; index >= 0; index--) {
        let newDay= new Date();
        newDay.setDate(newDay.getDate()-index);
        let shownDate = actionsShown.find(
          (action) =>{ 
            return datesAreOnSameDay(newDay, new Date(action.date_created))
          }
        );
        if(shownDate){
          progress++
        }
    }
    
    return (
        <main>
          <header>
            <h2>{shownHabit.habit_name}</h2>
          </header>
          <section>
          <WeekCalendar id={shownHabit.id}/>
          </section>
        <section>
              <h3>description</h3>
              <p>{shownHabit.description}</p>
        </section>
        <section>
          <h3>goal</h3>
          <p>{shownHabit.goal} times a week</p>
          <br/>
          {(progress>=shownHabit.goal)? 
          <h4>congratulations you're doing great</h4>:
          <h4>keep working on it you can do it</h4>
          }
        </section>
        <section className= "aButton">
        <ThreeButtons id={shownHabit.id} {...this.props}/>
        </section>
      </main>
    )
  }
}

export default DetailPage