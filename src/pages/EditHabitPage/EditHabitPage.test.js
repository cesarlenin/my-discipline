import React from 'react';
import ReactDOM from 'react-dom';
import EditHabitPage from './EditHabitPage';
import store from '../../dummy-store';
import renderer from 'react-test-renderer';

describe('<EditHabitPage />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( <EditHabitPage habit = {store.habits[0]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders this UI as expected', () => {
    const tree = renderer.create( 
    <EditHabitPage habit = {store.habits[0]}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});