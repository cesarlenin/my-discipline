import React from 'react';
import ReactDOM from 'react-dom';
import LogInform from './LogInform';

describe('<LogInform />', () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LogInform/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
});