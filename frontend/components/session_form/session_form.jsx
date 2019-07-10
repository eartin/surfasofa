import React from 'react';
import { withRouter } from 'react-router-dom';

class sessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }

    update(field){
       return e => this.setState({
           [field]: e.target.value
       })
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleDemoUser(e){
        e.preventDefault();
        this.props.processForm(this.props.demoUser);
    }

    renderErrors(){
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    renderEmailField() {
        return ((this.props.formType === 'signup') ? 
            <label>Email
                     <input type="text"
                    className="login-input"
                    value={this.state.email}
                    onChange={this.update('email')}
                />
            </label> : '' 
        )
    }

    renderDemoButton(){
        return ((this.props.formType === 'login') ? 
            <button 
            className="button" 
            onClick={this.handleDemoUser}
            >Demo User
            </button> : 
            ''
        )
    }

    render(){
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    Welcome to SurfaSofa!
                    <br/>
                    Please {this.props.formType} or {this.props.navLink}
                    {this.renderErrors()}
                    <div className="login-form">
                        <label>Username
                            <input type="text"
                            className="login-input"
                            value={this.state.username}
                            onChange={this.update('username')}
                            />
                        </label>
                        <br/>
                        <label>Password
                            <input type="password"
                            className="login-input"
                            value={this.state.password}
                            onChange={this.update('password')}
                            />
                        </label>
                        <br/>
                       {this.renderEmailField() }
                       <br/>
                       <input type="submit" className="login-form-submit" value={this.props.formType}/>
                    </div>
                    { this.renderDemoButton() }
                </form>
            </div>
        )
    }
}

export default withRouter(sessionForm);