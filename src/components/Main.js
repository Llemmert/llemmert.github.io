import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import About from './pages/About';
import Samples from './pages/Samples';

const Main = () => {
    return(
        <Switch> 
            <Route exact path='/' component={Homepage}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/samples' component={Samples}></Route>
        </Switch>
    );
}

export default Main;