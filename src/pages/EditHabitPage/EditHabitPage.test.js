import React from 'react';
import ReactDOM from 'react-dom';
import EditHabitPage from './EditHabitPage';
import store from '../../dummy-store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <EditHabitPage
  habit={store.habits[0]}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});