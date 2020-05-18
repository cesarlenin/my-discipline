import React, { Component } from 'react'
import { Link} from 'react-router-dom'

export class ThreeButtons extends Component {
  render() {
    return ( 
        <div>
        <Link to='/EditHabit'>
          edit
        </Link>
        <button>Delete</button>
        <Link to='/AddAction'>
        Add Action
        </Link>
      </div>

    )
  }
}

export default ThreeButtons