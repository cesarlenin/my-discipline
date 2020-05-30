import React from 'react';
import ReactDOM from 'react-dom';
import AddActionPage from './AddActionPage';
import renderer from 'react-test-renderer';

describe('<AddActionPage />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( <
      AddActionPage / > , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders this UI as expected', () => {
    const tree = renderer.create( <AddActionPage/> ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});