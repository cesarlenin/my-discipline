import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import NotFound from './pages/NotFound';
import LandingPage from './pages/LandingPage';
import Nav from './components/Nav/Nav';
import './App.css'

class App extends Component {
  state = {

  }

  render() {
    return (
      <div>
      <header className='App__header'>
      <Nav/>
      </header>
      <main className='App__main'>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          {/* <Route exact path="/Home" component={HomePage}/>
          <Route exact path="/Detail/:habitId" component={DetailPage} />
          <Route exact path="/createHabit" component={CreateHabitPage} />
          <Route exact path="/EditHabit/:habitId" component={EditHabitPage} />
          <Route exact path="/AddAction/:habitId" component={AddActionPage} /> */}
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
    )
  }
}

export default App
