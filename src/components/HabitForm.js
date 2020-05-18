import React, { Component } from 'react'

export class HabitForm extends Component {
  render() {
    return (
        <div>
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
        </div>
    )
  }
}

export default HabitForm