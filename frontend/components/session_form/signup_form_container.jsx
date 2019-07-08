import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import sessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/login">login instead</Link>
});

const mapDispatchToProps = dispatch => ({
    processForm: formUser => dispatch(signup(formUser))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(sessionForm);