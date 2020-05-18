import React, { Component } from 'react'
import { Link} from 'react-router-dom'

export class HabitForm extends Component {
  render() {
    return (
        <form className='habit-form'>
              <div>
              <label htmlFor="name">name</label>
              <input  type="text" name='ame' id='name' defaultValue={this.props.habit.name}/>
              </div>

              <div>
              <label htmlFor="description">description</label>
              <input type="text" name='description' id='description' defaultValue={this.props.habit.description}  />
              </div>

              <div>
              <label htmlFor="Goal">Goal</label>
              <input type="number" name='Goal' id='Goal' min="1" max="7" defaultValue={this.props.habit.goal}/>
              </div>

              <Link to='/Home'>
            Submit
            </Link>
        </form>
    )
  }
}

export default HabitForm