import React, { Component } from 'react'

const UserContext = React.createContext({
    habits: [],
    actions: [],
    authToken: null,
    error: null,
    setHabits: () => {},
    setActions: () => {},
    setAuthToken: () => {},
    setError: () => {},
    clearError: () => {},
    clearAuthToken: () => {},
  });


export default UserContext

export class UserContextProvider extends Component {
    state = {
        habits: [],
        actions: [],
        authToken: null,
        error: null,
    };
  
    setHabits = habits => {
      this.setState({
        habits: habits
      })
    }
  
    setActions = actions => {
      this.setState({
        actions: actions
      })
    }

    setAuthToken = authToken => {
      this.setState({
        authToken: authToken
      })
    }

    setError = error => {
        console.error(error)
        this.setState({
          error: error
        })
      }
    
    clearError = () => {
        this.setState({ error: null })
    }
    clearAuthToken = () => {
      this.setState({ authToken: null })
  }

    render() {
      const value = {
        habits: this.state.habits,
        actions: this.state.actions,
        error: this.state.error,
        authToken: this.state.authToken,
        setError: this.setError,
        clearError: this.clearError,
        setHabits: this.setHabits,
        setActions: this.setActions,
        setAuthToken:this.setAuthToken,
        clearAuthToken:this.clearAuthToken
      }
      return (
        <UserContext.Provider value={value}>
          {this.props.children}
        </UserContext.Provider>
      )
    }
  }
  