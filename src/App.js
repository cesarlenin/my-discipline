import React, { Component } from 'react'
import {Switch, BrowserRouter} from 'react-router-dom'
import NotFound from './pages/NotFound/NotFound';
import LandingPage from './pages/LandingPage/LandingPage';
import HomePage from './pages/HomePage/HomePage';
import CreateHabitPage from './pages/CreateHabitPage/CreateHabitPage';
import AddActionPage from './pages/AddActionPage/AddActionPage';
import EditHabitPage from './pages/EditHabitPage/EditHabitPage';
import DetailPage from './pages/DetailPage/DetailPage';
import Nav from './components/Nav/Nav';
import PrivateRoute from './components/Utils/PrivateRoute'
import PublicOnlyRoute from './components/Utils/PublicOnlyRoute'
import {UserContextProvider} from './components/UserContext/UserContext';
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
      <footer className='footer'>@2020 Cesar Morales.</footer>
      </BrowserRouter>
      </UserContextProvider>
    )
  }
}

export default App
