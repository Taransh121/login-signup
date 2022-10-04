import React from 'react'
import img from './pic2.webp';
import { Link } from 'react-router-dom';
import "./login.css";
// import { Alert } from './Alert';


const Login = () => {
    const [errorMessage, setErrorMessage] = React.useState("");
    function onLogin(e) {
        e.preventDefault();
        let username = document.getElementsByClassName("username");
        let userValue = username.Email.value;
        // console.log(userValue);
        // localStorage.getItem('email')
        let pw = document.getElementsByClassName("pw");
        let pwValue = pw.password.value;
        // console.log(pwValue);
        if (localStorage.getItem(userValue) !== null && localStorage.getItem(userValue) === pwValue) {
            console.log("Login successfull");    
            setErrorMessage("Login Successfull")        
        }
        else{
            console.log("Login failed");
            setErrorMessage("Invalid Credentials")        
        }
    }
    return (
        <>
            <form onSubmit={onLogin}>
               <h1>{errorMessage && <div className="error alert"> {errorMessage} </div>}</h1> 
                <img src={img} alt="Error" />
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label"></label>
                    <input type="text" className="form-control username" id="Email" placeholder='USERNAME' aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label"></label>
                    <input type="password" className="form-control pw" placeholder='PASSWORD' id="password" />
                </div>
                <button type="submit"  className="btn btn-primary">LOGIN</button><br /> <br />
                <Link className="fp" to="#">Forgot Password?</Link>
                <Link className="signupp" to="/">Sign Up!</Link>
            </form>
        </>
    )
}
export default Login;
