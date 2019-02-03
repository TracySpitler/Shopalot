import React from "react";
import {
   Route, Switch
} from 'react-router-dom';
import Splash from './views/Splash';
import ShoppingList from './components/ShoppingList';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

const AppRouter = () => {
  return (
  

  <Switch>
     
       
        <Route path="/" exact component={Splash} />
        <Route path="/shoppinglist" component={ShoppingList} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="*" component={NotFound} />

    </Switch>
 
  )

};

export default AppRouter;
