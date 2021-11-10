import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState } from "react";
import initializeAuthentication from '../../firebase/firebase.init';
import useAuth from "../../hooks/useAuth";

initializeAuthentication();
const Register = () => {

    const { registerNewUser, setUserName, logOut } = useAuth();
    const { signInWithGoogle } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const history = useHistory();


    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push('/home');
            })
    }
    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }
        else {
            registerNewUser(name, email, password)
                .then(result => {
                    history.push('/login');
                    setUserName(name);
                    logOut();

                })
        }

    }

    return (
        <div className="mx-5 my-5 reg-box">
            <form onSubmit={handleRegistration}>
                <h3 className="text-primary">Please Register</h3>
                <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
                    </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" className="btn btn-primary">Register</button>


            </form>
            <br /><br /><br />
            <p>Aready Registered? <Link to="/login">Sign In</Link></p>
            <div>--------------------------------</div>
            <br /><br /><br />
            <button onClick={handleGoogleLogin}>Google Sign In</button>
        </div>
    );
};

export default Register;