import React, { Component } from 'react'
import { Link} from 'react-router-dom'

export class ActionForm extends Component {
  render() {
    return (
        <form className='add-action-form'>
				<div>
					<label htmlFor="date">date</label>
              <input type="date" name='ame' id='name' />
            </div>
            <div>
              <p>did you complete your habit:</p>
              <input type="radio" id="yes" name="bool" value="true"/>
              <label htmlFor="yes">yes</label>
              <input type="radio" id="no" name="bool" value="false"/>
              <label htmlFor="no">no</label>
            </div>
            <Link to='/Home'>
            submit
            </Link>
        </form>
    )
  }
}

export default ActionForm