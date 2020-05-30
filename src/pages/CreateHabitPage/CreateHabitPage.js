import React, {Component} from 'react';
import HabitForm from '../../components/HabitForm/HabitForm';
import BackButton from '../../components/BackButton/BackButton';
import './CreateHabitPage.css'
export class CreateHabitPage extends Component {

  render() {
    return ( 
      <section>
        <header>
          <h1> Create Habit </h1> 
        </header> 
        <BackButton {...this.props}/> 
        <section className = 'createHabit' >
          <HabitForm {...this.props}/> 
        </section> 
      </section>
    )
  }
}

export default CreateHabitPage;