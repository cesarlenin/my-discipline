import React from 'react';
import ReactDOM from 'react-dom';
import DetailPage from './DetailPage';
import store from '../../dummy-store';
import { BrowserRouter} from 'react-router-dom';
import UserContext from '../../components/UserContext/UserContext'
import renderer from 'react-test-renderer';

describe('<DetailPages />', () => { 

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <UserContext.Provider value={store}>
    <BrowserRouter>
  <DetailPage
  match={{params: {habitId: 1}, isExact: true, path: "", url: ""}}
  />
  </BrowserRouter>
  </UserContext.Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders this UI as expected', () => {
  const tree = renderer.create(
<UserContext.Provider value={store}>
    <BrowserRouter>
  <DetailPage
  match={{params: {habitId: 1}, isExact: true, path: "", url: ""}}
  />
  </BrowserRouter>
  </UserContext.Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});

});