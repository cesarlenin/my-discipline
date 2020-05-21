import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// import TokenService from '../../services/token-service'
import UserContext from '../UserContext'

export default function PublicOnlyRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        <UserContext.Consumer>
           {context=>
            context.authToken
            ? <Redirect to={'/Home'} />
          : <Component {...componentProps} />
        }
        </UserContext.Consumer>   
      )}
    />
  )
}
