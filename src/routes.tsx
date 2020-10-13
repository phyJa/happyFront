import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

function Routes () {
    
    return(

        <BrowserRouter>

            <Route path="/" component={ Landing } exact />

            <Route path="/app" component={ OrphanagesMap } />

        </BrowserRouter>

    );

}

export default Routes;