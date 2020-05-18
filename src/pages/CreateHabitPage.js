import React, { Component } from 'react'
import { Link} from 'react-router-dom'

export class CreateHabitPage extends Component {
  render() {
    return (
    <main>
      <header >
        <h1>Create Habit</h1>
      </header>
        <section>
        <form className='signup-form'>
            <div>
              <label htmlFor="name">name</label>
              <input placeholder='read a book' type="text" name='ame' id='name' />
            </div>
            <div>
              <label htmlFor="description">description</label>
              <input type="text" name='description' id='description' placeholder='description' />
            </div>
            <div>
              <label htmlFor="Goal">Goal</label>
              <input type="number" name='Goal' id='Goal' min="1" max="7"/>
            </div>
            <Link to='/Home'>
            Submit
            </Link>
        </form>
      </section>
      </main>
    )
  }
}

export default CreateHabitPage