import React from 'react';
import ReactDOM from 'react-dom';
import HabitForm from './HabitForm';

describe('<HabitForm />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( < HabitForm /> , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});