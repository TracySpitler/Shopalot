import React from "react";
import {
  Route,
  Switch,
} from 'react-router-dom';
import Login from './views/Login';
import Splash from './views/Splash';
import ShoppingList from './components/ShoppingList';
import NotFound from './components/NotFound'

const AppRouter = () => {
  return <Switch>
      <Route path="/" exact component={Splash} />
      <Route path="/shoppinglist" component={ShoppingList} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="*" component={NotFound} />
    </Switch>
};

export default AppRouter;
