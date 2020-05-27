import React from 'react';
import ReactDOM from 'react-dom';
import Day from './Day';
import { BrowserRouter} from 'react-router-dom';
import UserContext from '../UserContext/UserContext';
import store from '../../dummy-store';

describe('<Day />', () => {

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <UserContext.Provider value={store}>
      <BrowserRouter>
  <Day
  id= {store.habits[0].id}
  day={new Date()}
  />
  </BrowserRouter>
  </UserContext.Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
});