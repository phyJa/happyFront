import React from 'react';

// Switch does not allow that more than one route is shown on the screen
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Landing from './pages/Landing';

import OrphanagesMap from './pages/OrphanagesMap';

import Orphanage from './pages/Orphanage';

import CreateOrphanage from './pages/CreateOrphanage';

function Routes () {
    
    return(

        <BrowserRouter>

            <Switch> 

                <Route path="/" component={ Landing } exact />

                <Route path="/app" component={ OrphanagesMap } />

                <Route path="/orphanages/create" component={ CreateOrphanage } />

                <Route path="/orphanages/:id" component={ Orphanage } />

            </Switch>

        </BrowserRouter>

    );

}

export default Routes;