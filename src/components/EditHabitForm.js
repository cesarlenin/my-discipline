import React, { Component } from 'react'
import UserContext from '../components/UserContext';
import ValidationError from './ValidationError';
import HabitsApiService from '../services/my-discipline-api-service'

export class HabitForm extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: this.props.habit.habit_name,
        touched: false,
      },
      description: {
        value: this.props.habit.description,
        touched: false,
      },
      goal: {
        value: this.props.habit.goal,
        touched: false,
      },
    };
  }

  handleSubmit = e => {
    this.context.clearError()
    HabitsApiService.editHabit(this.state.name.value, this.state.description.value, this.state.goal.value,this.props.match.params.habitId)
    .then(data=>this.context.setHabits(data))
    .catch(error=>this.context.setError(error))
  }

  validateName() {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return 'Name is required';
    } else if (name.length < 3) {
      return 'Name must be at least 3 characters long';
    }
  }
  updateName(name) {
    this.setState({ name: { value: name, touched: true } });
  }
  validateDescription() {
    const description = this.state.description.value.trim();
    if (description.length === 0) {
      return 'description is required';
    } else if (description.length < 3) {
      return 'description must be at least 3 characters long';
    }
  }
  updateDescription(description) {
    this.setState({ description: { value: description, touched: true } });
  }
  validateGoal() {
    const goal = Number(this.state.goal.value);
    if (!goal) {
      return 'goal has to be a number';
    }
    else if (goal<=0) {
      return 'goal must from 1 to 7 days';
    } else if (goal>7) {
      return 'goal must from 1 to 7 days';
    }
  }
  updateGoal(goal) {
    this.setState({ goal: { value: goal, touched: true } });
  }
  render() {
    const nameError = this.validateName();
    const contentError = this.validateDescription();
    const goalError = this.validateGoal();
    return (
        <form className='habit-form'
        onSubmit={() => {
          this.handleSubmit();
          this.props.history.push('/Home');
        }}>
              <div>
              {this.state.name.touched && <ValidationError message={nameError} />}
              <label htmlFor="name">name</label>
              <input  type="text" name='name' id='name' defaultValue={this.props.habit.habit_name}
              onChange={(e) => this.updateName(e.target.value)}
              />
              </div>

              <div>
              {this.state.description.touched && <ValidationError message={contentError} />}
              <label htmlFor="description">description</label>
              <input type="text" name='description' id='description' defaultValue={this.props.habit.description}  
              onChange={(e) => this.updateDescription(e.target.value)}
              />
              </div>

              <div>
              {this.state.goal.touched && <ValidationError message={goalError} />}
              <label htmlFor="Goal">Goal</label>
              <input type="number" name='Goal' id='Goal' min="1" max="7" defaultValue={this.props.habit.goal}
              onChange={(e) => this.updateGoal(e.target.value)}
              />
              </div>

              <button type="submit" value="Submit" disabled={
            (this.validateName() && this.state.name.touched) ||
            (this.validateDescription() && this.state.description.touched) ||
            (this.validateGoal() && this.state.goal.touched)
            }>
            Submit
            </button>
        </form>
    )
  }
}

export default HabitForm