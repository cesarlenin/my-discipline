import React from 'react';
import ReactDOM from 'react-dom';
import ActionForm from './ActionForm';

describe('<ActionForm />', () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <ActionForm/>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});
});