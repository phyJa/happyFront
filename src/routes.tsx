import React from 'react';

// Switch does not allow that more than one route is shown on the screen
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

function Routes () {
    
    return(

        <BrowserRouter>

            <Switch> 

                <Route path="/" component={ Landing } exact />

                <Route path="/app" component={ OrphanagesMap } />

            </Switch>

        </BrowserRouter>

    );

}

export default Routes;