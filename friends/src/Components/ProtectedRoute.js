import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...rest}) {

    let loggedIn = localStorage.getItem("token");

    return (
        <Route 
            {...rest}
            render={(props) => {
                if(loggedIn) {
                    return <Component {...props} />
                } else {
                    return <Redirect to="/login" />, console.log("There was an error with authentication.")
                }
            }}
        />
    )
}