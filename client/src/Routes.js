import React from "react";
import {
   Route, Switch
} from 'react-router-dom';
import Splash from './views/Splash';
import Browse from './components/Browse';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import ItemInfo from './components/ItemInfo';

const AppRouter = () => {
  return (
  

  <Switch>
     
        <Route path="/" exact component={Splash} />
        <Route path="/shoppinglist" component={Browse} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/auth/google" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/:id" component={ItemInfo} />
        <Route path="*" component={NotFound} />

    </Switch>
 
  )

};

export default AppRouter;
