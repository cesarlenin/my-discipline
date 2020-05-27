import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './dummy-store';
import renderer from 'react-test-renderer';
import HomePage from './pages/HomePage/HomePage';
import DetailPage from './pages/DetailPage/DetailPage';

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
    <App>
      <HomePage
      habits={store.habits}
      actions={store.habits}
      />
      <DetailPage
      habits={store.habits}
      actions={store.habits}
      />
    </App>
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });



