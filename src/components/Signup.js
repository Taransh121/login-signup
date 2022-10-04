import React from 'react';
import img from './pic2.webp';
import "./signup.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import { useEffect } from 'react';
const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    function onChangeUsername(e) {
        setUsername(e.target.value)
    }
    function onChangePassword(e) {
        setPassword(e.target.value)
    }
    function onChangeConfirmPassword(e) {
        setConfirmPassword(e.target.value)
    }
 
    function onSubmit(e) {
        e.preventDefault()
            localStorage.setItem(username, username);
            localStorage.setItem(username, password);
            localStorage.setItem(username, confirmPassword);
    }
 
    // function getData() {
    //     console.log(localStorage.getItem('username'));
    //     console.log(localStorage.getItem('password'))
    //     console.log(localStorage.getItem('confirmPassword'))
    // }
    return (
        <>
            <form onSubmit={onSubmit}>
                <img src={img} alt="Error" />
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label"></label>
                    <input value={username} onChange={onChangeUsername} type="text" className="form-control" id="Email" placeholder='EMAIL' aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label"></label>
                    <input value={password} onChange={onChangePassword} type="password" className="form-control" placeholder='PASSWORD' id="password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmpassword" className="form-label"></label>
                    <input value={confirmPassword} onChange={onChangeConfirmPassword} type="password" className="form-control" placeholder='CONFIRM PASSWORD' id="confirmpassword" />
                </div>
                <button type="submit" className="btn btn-primary">SIGN UP!</button><br /> <br />
                <Link className="alr" to="/login">Already Registered?</Link> <br />
            </form>
        </>
    )
}
export default Signup;

