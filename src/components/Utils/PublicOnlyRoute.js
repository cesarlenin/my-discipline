import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../UserContext/UserContext';

export default function PublicOnlyRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render = {componentProps => (
        <UserContext.Consumer>
           {context=>
            context.authToken
            ? <Redirect to = {'/Home'} />
          : <Component {...componentProps} />
        }
        </UserContext.Consumer>   
      )}
    />
  )
}
