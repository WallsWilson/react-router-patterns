import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Colors from "./Colors";
import Red from "./Red";
 import Black from "./Black";
 import Green from "./Green";

 function Routes() {
    return (
        <Switch>
            <Route exact path="/colors"><Colors /></Route>
            <Route exact path="/colors/:color"></Route>
        </Switch>
    )
 }

 export default Routes;