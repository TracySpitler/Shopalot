import React from "react";
import {
  Route,
  Switch,
} from 'react-router-dom';
import Splash from './views/Splash';
import Signup from './components/Signup';
import Browse from './components/Browse';
import ItemInfo from './components/ItemInfo';
import Checkout from './components/Checkout';
import NotFound from './components/NotFound';

const AppRouter = () => {
  return <Switch>
      <Route path="/" exact component={Splash} />
      <Route path="/browse" component={Browse} />
      <Route path="/signup" component={Signup} />
      <Route path="/item/:id" component={ItemInfo} />
      <Route path="/checkout" component={Checkout} />
      <Route path="*" component={NotFound} />
    </Switch>
};

export default AppRouter;
