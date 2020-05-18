import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import HabitForm from '../components/HabitForm';

export class EditHabitPage extends Component {
  render() {
    return (
      <main>
      <header>
        <h1>Edit Habit</h1>
      </header>
      <section>
        <form className='habit-form'>
          <HabitForm/>
            <Link to='/Home'>
            Submit
            </Link>
        </form>
      </section>
    </main>
    )
  }
}

export default EditHabitPage