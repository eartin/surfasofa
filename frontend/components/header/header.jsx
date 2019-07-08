import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Header = ({currentUser, logout}) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <NavLink className="button" activeClassName="curr" to="/login">LOGIN</NavLink>
            &nbsp; &nbsp; 
            <NavLink className="button" activeClassName="curr" to="/signup">SIGNUP</NavLink>
        </nav>
    );

    const greetingHeader = () => (
        <nav>
            <h2 className="header-name">Welcome { currentUser.username }!</h2>
            &nbsp;
            <button className="button" onClick= {logout} >LOGOUT</button>
        </nav>
    );

    return currentUser ? greetingHeader() : sessionLinks()
};

export default withRouter(Header);