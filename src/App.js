import React, { Component } from 'react'
import {Switch, BrowserRouter} from 'react-router-dom'
import NotFound from './pages/NotFound';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import CreateHabitPage from './pages/CreateHabitPage';
import AddActionPage from './pages/AddActionPage';
import EditHabitPage from './pages/EditHabitPage';
import DetailPage from './pages/DetailPage';
import Nav from './components/Nav/Nav';
import PrivateRoute from './components/Utils/PrivateRoute'
import PublicOnlyRoute from './components/Utils/PublicOnlyRoute'
import {UserContextProvider} from './components/UserContext';
import './App.css'

class App extends Component {
  render() {
    return (
      <UserContextProvider>
      <BrowserRouter>
      <Nav/>
      <main className='App__main'>
        <Switch>
          <PublicOnlyRoute exact path="/" component={LandingPage} />
          <PrivateRoute exact path="/Home" component={HomePage}/>
          <PrivateRoute exact path="/createHabit" component={CreateHabitPage} />
          <PrivateRoute exact path="/AddAction/:habitId" component={AddActionPage} />
          <PrivateRoute exact path="/EditHabit/:habitId" component={EditHabitPage} />
          <PrivateRoute exact path="/Detail/:habitId" component={DetailPage} />
          <PublicOnlyRoute component={NotFound} />
        </Switch>
      </main>
      </BrowserRouter>
      </UserContextProvider>
    )
  }
}

export default App
