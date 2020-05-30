import React from 'react';
import ReactDOM from 'react-dom';
import NotFound from './NotFound';
import renderer from 'react-test-renderer';

describe('<NotFound />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( < NotFound /> , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders this UI as expected', () => {
    const tree = renderer.create( < NotFound /> ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});