import React from 'react';
import Header from './header/header_container';
import loginFormContainer from './session_form/login_form_container';
import signupFormContainer from './session_form/signup_form_container';
import { Link, Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HostingIndexContainer from './hostings/hosting_index_container';
import hosting_index_container from './hostings/hosting_index_container';


const App = () => (
    <div>
        <header>
            <Link className="header-link" to="/">Surfasofa</Link>
            <Header />
        </header>
        <Switch>
        <AuthRoute exact path="/signup" component={signupFormContainer} />
        <AuthRoute exact path="/login" component={loginFormContainer} />
        <Route exact path="/" component={ HostingIndexContainer } />
        </Switch>
    </div>
);

export default App;


        
