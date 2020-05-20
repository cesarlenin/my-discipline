import React, { Component } from 'react'

const UserContext = React.createContext({
    habits: [],
    actions: [],
    error: null,
    setHabits: () => {},
    setActions: () => {},
    setError: () => {},
    clearError: () => {},
  });


export default UserContext

export class UserContextProvider extends Component {
    state = {
        habits: [],
        actions: [],
        error: null,
    };
  
    setHabits = habits => {
      this.setState(habits)
    }
  
    setActions = actions => {
      this.setState(actions)
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
      }
    
    clearError = () => {
        this.setState({ error: null })
    }
  
    render() {
      const value = {
        habits: this.state.habits,
        actions: this.state.actions,
        error: this.state.error,
        setError: this.setError,
        clearError: this.clearError,
        setHabits: this.setHabits,
        setActions: this.setActions,
      }
      return (
        <UserContext.Provider value={value}>
          {this.props.children}
        </UserContext.Provider>
      )
    }
  }
  