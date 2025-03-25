import React from "react";
import style from "./signup.module.css";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/footer";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isValidUser, setValidUser] = useState(false)

    const handleRegister = () => {
        if (username === '') return alert('Enter username')
        if (email === '') return alert('Enter email Id')
        if (!validateEmail(email)) return alert("Invalid Email")
        if (password === '') return alert('Enter password')
        if (password !== confirmPassword) return alert("Incorrect Password")
     

        console.log(username, password, email, confirmPassword);
        let inputObj = {
            username, email, password, confirmPassword

        }

        axios.post("http://localhost:3001/user/addNewUser", inputObj)
            .then(response => {
                console.log(response);
                alert("Successfully Registered")
                setValidUser(true)
            })
            .catch(err => {
                console.log(err);
                alert("Failed To Register")
            })

    }
    const handleUsername = (event) => {
        setUsername(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    if (isValidUser) {
        return <Navigate to="/homepage" />
    }
    return (

        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.form}>
                    <div className={style.headding}>
                        <h1>SIGN UP</h1>
                    </div>
                    <div classname={style.content}>
                        <h5 className={style.content}>Already have an account?&nbsp;
                            <span className={style.content}><NavLink className={style.content} to="/login">Log In</NavLink></span>
                        </h5>
                    </div>
                    <form className={style.signUp} action="" method="get">
                        <div className={style.formGroup}>
                            <input type="text" id="userName" placeholder="User Name" onChange={handleUsername} value={username} />
                        </div>
                        <div className={style.formGroup}>
                            <input type="email" placeholder="Email ID" onChange={handleEmail} value={email} />
                        </div>
                        <div className={style.formGroup}>
                            <input type="password" placeholder="Password" onChange={handlePassword} value={password} />
                        </div>
                        <div className={style.formGroup}>
                            <input type="password" placeholder="Confirm Password" onChange={handleConfirmPassword} value={confirmPassword} />
                        </div>
                        <div className={style.formGroup}>
                            <button type="button" className={style.btn} onClick={handleRegister}>REGISTER</button>
                        </div>
                        <div className={style.return}>
                            <NavLink className={style.return} to="/login">Return to login</NavLink>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>

    )
}
export default Signup