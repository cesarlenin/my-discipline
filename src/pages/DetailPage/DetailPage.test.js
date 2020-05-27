import React from 'react';
import ReactDOM from 'react-dom';
import DetailPage from './DetailPage';
import store from '../../dummy-store';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import UserContext, { UserContextProvider } from '../../components/UserContext/UserContext'

describe('<DetailPages />', () => { 

  // console.log(store)
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <UserContext.Provider
    value={store}
    >
    <BrowserRouter>
  <DetailPage
  match={{params: {habitId: 2}, isExact: true, path: "", url: ""}}
  />
  </BrowserRouter>
  </UserContext.Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

});