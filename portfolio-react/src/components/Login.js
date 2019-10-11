import React, { Component } from 'react';
import axios from "axios";
import '../scss/Login.scss';

class Login extends Component {
    constructor(props) {
        super(props);

        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = { 
            username: "",
            password: "",
            isAuthenticated: false,
            error: undefined
         }
    }

    onUsernameChange(e) {
        this.setState({
            username: e.target.value
        });
    }

    onPasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        const user = {
            username: this.state.username,
            password: this.state.password
        };

        axios.post("http://localhost:5000/api/users/login", user)
            .then(() => {this.setState({
                isAuthenticated: true
            })})
            .then(() => {this.props.history.push('/admin')})
            .catch(error => {
                alert("Invalid Username and/or password");
            })
    }


            


        


    
    
    render() { 
        return ( 
            <div className="container-fluid login-main">
                <div className="row h-100 justify-content-center align-items-center">
                    <form onSubmit={this.onSubmit} className="login-form col-lg-4">
                        <div>
                            <label>Username</label>
                            <input type="text" 
                                className="form-control" 
                                autoFocus placeholder="Enter username"
                                onChange={this.onUsernameChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" 
                                className="form-control" 
                                placeholder="Password"
                                onChange={this.onPasswordChange}
                                />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>    
            </div>
         );
    }
}
 
export default Login;
