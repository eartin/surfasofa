import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import sessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'login',
    navLink: <Link to="/signup">signup instead</Link>,
    demoUser: {username: 'DemoUser', password: 'password'} 
});

const mapDispatchToProps = dispatch => ({
    processForm: formUser => dispatch(login(formUser))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(sessionForm);