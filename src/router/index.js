import React from 'react';
import routes from "./routes"; //all routes

import { Route,   BrowserRouter as Router,
    Switch } from "react-router-dom";
import {ReactTable} from "../ReuseComponents/table";

export const RouterApp = props => {
    return (
        <Router>
            <Switch>
                <Route exact component={ReactTable} path={routes.table} {...props} />
            </Switch>
        </Router>
    )
}

export default RouterApp;