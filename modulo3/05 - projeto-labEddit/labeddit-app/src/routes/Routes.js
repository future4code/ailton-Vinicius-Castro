import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import  FeedPage  from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";

const Routes = (props) => {
   return(
    <BrowserRouter>
       <Switch>
           <Route component = { FeedPage }  exact path="/feed"/>
           <Route component = { LoginPage }  exact path="/" />
           <Route component = { PostPage }  path="/post/" />
           <Route component = { RegistrationPage }  path="/signup" />
        </Switch>
    </BrowserRouter>
   )
}

export default Routes;