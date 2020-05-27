import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from '../../dummy-store'
import HabitList from './HabitList';

describe('<HabitList />', () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HabitList/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
});