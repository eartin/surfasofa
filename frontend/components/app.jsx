import React from 'react';
import Header from './header/header_container';
import loginFormContainer from './session_form/login_form_container';
import signupFormContainer from './session_form/signup_form_container';
import { Link, Route, Switch } from 'react-router-dom';


const App = () => (
    <div>
        <header>
            <Link className="header-link" to="/">Surfasofa</Link>
            <Header />
        </header>
        <Switch>
        <Route path="/signup" component={signupFormContainer} />
        <Route exact path="/login" component={loginFormContainer} />
        </Switch>
    </div>
);

export default App;


        
