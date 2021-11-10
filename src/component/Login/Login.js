import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const { signInWithGoogle } = useAuth();
    const { processLogin } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleLogin = e => {
        if (email && password) {
            e.preventDefault();
            processLogin(email, password)
                .then(result => {
                    history.push(redirect_url);
                })
                .catch(error => {
                    setError('Username or Password is wrong');
                })

        }
        else {
            setError('Fields Empty')
        }
    }
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }
    return (
        <div>
            <div className="row align-items-center">
                <div className="col-md-5">
                    <img className="img-fluid" src="login.jpg" alt="" />
                </div>
                <div className="col-md-7">
                    <div className="loginDiv">
                        <h2>Login</h2>
                        <form className="loginForm">
                            <input type="email" name="email" id="email" onBlur={handleEmailChange} placeholder="Your Email" required />
                            <br />
                            <input type="password" name="password" id="password" onBlur={handlePasswordChange} placeholder="Your Password" required />
                            <br />
                            <button className="btn-regular" onClick={handleLogin}>LogIn</button>
                            <br />
                            <span>{error}</span>
                        </form>
                        <p className="text">New to Stay Healty website? <Link to="/register">Create Account</Link></p>
                        <div>-------------------or---------------</div>
                        <button className="btn-regular"
                            onClick={handleGoogleLogin}>Google Sign In</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;