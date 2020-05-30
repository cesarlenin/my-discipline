import React from 'react';
import ReactDOM from 'react-dom';
import CreateHabitPage from './CreateHabitPage';
import renderer from 'react-test-renderer';

describe('<CreateHabitPage />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( <CreateHabitPage/> , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders this UI as expected', () => {
    const tree = renderer.create( <CreateHabitPage/> ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});