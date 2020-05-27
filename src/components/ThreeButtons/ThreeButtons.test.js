import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ThreeButtons from './ThreeButtons';

describe('<ThreeButtons />', () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <BrowserRouter>
      <ThreeButtons/>
      </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});
});