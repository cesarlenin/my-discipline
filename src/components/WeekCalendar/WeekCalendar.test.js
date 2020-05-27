import React from 'react';
import ReactDOM from 'react-dom';
import WeekCalendar from './WeekCalendar';

describe('<WeekCalendar />', () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeekCalendar/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
});