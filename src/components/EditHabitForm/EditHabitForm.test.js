import React from 'react';
import ReactDOM from 'react-dom';
import EditHabitForm from './EditHabitForm';
import store from '../../dummy-store'

describe('<EditHabitForm />', () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditHabitForm
  habit={store.habits[0]}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});
});