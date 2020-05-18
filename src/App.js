import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'
import NotFound from './pages/NotFound';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import CreateHabitPage from './pages/CreateHabitPage';
import AddActionPage from './pages/AddActionPage';
import EditHabitPage from './pages/EditHabitPage';
import DetailPage from './pages/DetailPage';
import Nav from './components/Nav/Nav';
import UserContext from './components/UserContext';
import STORE from './dummy-store';
import './App.css'

class App extends Component {
  state = {
    habits: STORE.habits,
    actions: STORE.actions,
  }

  render() {
    return (
      <UserContext.Provider
      value={{
        habits: this.state.habits,
        actions: this.state.actions,
      }}
    >
      <div>
      <Nav/>
      <main className='App__main'>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Home" component={HomePage}/>
          <Route exact path="/createHabit" component={CreateHabitPage} />
          <Route exact path="/AddAction/:habitId" component={AddActionPage} />
          <Route exact path="/EditHabit/:habitId" component={EditHabitPage} />
          <Route exact path="/Detail/:habitId" component={DetailPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
    </UserContext.Provider>
    )
  }
}

export default App
