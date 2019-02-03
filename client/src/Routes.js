import React from "react";
import {
  Route,
  Switch,
} from 'react-router-dom';
import Login from './views/Login';
import Splash from './views/Splash';
import ShoppingList from './components/ShoppingList';
import NotFound from './components/NotFound';
import Browse from './components/Browse';
import ItemInfo from './components/ItemInfo';

const AppRouter = () => {
  return <Switch>
      <Route path="/" exact component={Splash} />
      <Route path="/shoppinglist" component={Browse} />
      <Route path="/login" component={Login} />
<<<<<<< HEAD
      <Route path="/signup" component={Signup} />
      <Route path="/:id" component={ItemInfo} />
=======
      <Route path="*" component={NotFound} />
>>>>>>> fb1c9b5ba4cb5c94b5cf56d3ea266262ff533501
    </Switch>
};

export default AppRouter;
