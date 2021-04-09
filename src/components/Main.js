import React from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';

import Homepage from './Homepage';
import About from './About';
import Samples from './Samples';

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