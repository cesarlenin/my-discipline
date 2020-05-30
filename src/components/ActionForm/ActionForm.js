import React, { Component } from 'react'
import UserContext from '../UserContext/UserContext';
import ValidationError from '../ValidationError/ValidationError';
import HabitsApiService from '../../services/my-discipline-api-service'
import './ActionForm.css'

export class ActionForm extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      date: {
        value: '',
        touched: false,
      }
    };
  }

  handleSubmit = e => {
    this.context.clearError()
    HabitsApiService.postAction(this.state.date.value, this.props.match.params.habitId)
    .then((res)=>this.context.addAction(res))
    .catch((error)=>this.context.setError(error))
  }

  validateDate() {
    const date = this.state.date.value;
    if (!date) {
      return 'date is required';
    } 
  }
  updateDate(date) {
    this.setState({ date: { value: date, touched: true } });
  }
  render() {
    const dateError = this.validateDate();
    return (
        <form className='add-action-form'
        onSubmit={() => {
          this.handleSubmit();
          this.props.history.push('/Home');
        }}>
          {this.state.date.touched && <ValidationError message={dateError} />}
					<label htmlFor="date">what day did you complete your habit?</label>
          <br/>
          <input type="date" name='date' id='date' 
          onChange={(e) => this.updateDate(e.target.value)}
          />
          <br/>

          <button type="submit" value="Submit" 
          disabled={ this.validateDate()}
          >
          Submit
          </button>
        </form>
    )
  }
}

export default ActionForm