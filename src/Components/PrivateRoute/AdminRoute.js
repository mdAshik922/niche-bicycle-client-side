import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const AdminRoute = ({children, ...rest}) => {

    const {user, admin, isLoding}=useAuth();
    if(isLoding){
      return "loading"
    };
        return (
            <Route
          {...rest}
          render={({ location }) =>
            user.email && admin ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: location }
                }}
              />
            )
          }
        />
        );
    };
export default AdminRoute;