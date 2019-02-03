import React from "react";
import {
  Route,
  Switch,
} from 'react-router-dom';
import Splash from './views/Splash';
import Signup from './components/Signup';
import Browse from './components/Browse';
import ItemInfo from './components/ItemInfo';
import NotFound from './components/NotFound';

const AppRouter = () => {
  return <Switch>
      <Route path="/" exact component={Splash} />
      <Route path="/shoppinglist" component={Browse} />
      <Route path="/signup" component={Signup} />
      <Route path="/item/:id" component={ItemInfo} />
      <Route path="*" component={NotFound} />
    </Switch>
};

export default AppRouter;
