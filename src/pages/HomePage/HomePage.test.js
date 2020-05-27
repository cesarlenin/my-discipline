import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';
import store from '../../dummy-store';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe('<HomePage />', () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
  <HomePage
  habit={store.habits}
  />
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders this UI as expected', () => {
  const tree = renderer.create(
<BrowserRouter>
  <HomePage
  habits={store.habits}
  />
  </BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});

});