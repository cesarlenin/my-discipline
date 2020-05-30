import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from '../../dummy-store';
import Habit from './Habit';

describe('<Habit />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
      <Habit
        id = {store.habits[0].id}
        name = {store.habits[0].habit_name}
      />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});