import React from "react";
import {
  Route,
  Switch,
} from 'react-router-dom';
import Splash from './views/Splash';
import Signup from './components/Signup';
import Browse from './components/Browse';
import ItemInfo from './components/ItemInfo';

const AppRouter = () => {
  return <Switch>
      <Route path="/" exact component={Splash} />
      <Route path="/shoppinglist" component={Browse} />
      <Route path="/signup" component={Signup} />
      <Route path="/:id" component={ItemInfo} />
    </Switch>
};

export default AppRouter;
