import React from "react";
import { Switch, Route } from "react-router-dom";

import KidView from './components/KidView'
import StandardView from './components/StandardView'
import Login from './components/Login'
import Welcome from './components/Welcome'

export default (
    <Switch>
        <Route exact path='/' component={Welcome}/>
        <Route path='/standard-view' component={StandardView}/>
        <Route path='/login' component={Login}/>
        <Route path='/kid-view' component={KidView}/>
    </Switch>
)