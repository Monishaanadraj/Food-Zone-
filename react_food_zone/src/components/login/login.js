import React from "react";
import style from "./login.module.css";
import Navbar from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";
import Footer from "../footer/footer";
import { useState } from "react";
import axios from "axios"
import { Navigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isValidUser, setValidUser] = useState(false)

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleLoginButton = (e) => {
        if (email === '') return alert("Enter EmailID")
        if (!validateEmail(email)) return alert("Invalid Email")
        if (password === '') return alert("Enter Password")
       
        console.log(email, password)
        const inputobj = {
            email, password
        }
        axios.post(`http://localhost:3001/user/login/`, inputobj)
            .then(response => {
                localStorage.setItem("userId",response.data[0].userId)
                console.log(response)
                setValidUser(true)
            })
            .catch(err => {
                console.log(err);
                alert("Invalid Email or Password")
            })

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
            <div className={style.logincontainer}>
                <div className={style.container}>
                    <div className={style.form}>
                        <div className={style.headding}>
                            <h1>LOG IN</h1>
                        </div>
                        <div classname={style.content}>
                            <h5 className={style.content}>Need an account?&nbsp;
                                <span className={style.content}><NavLink className={style.content} to="/signup">Sign Up</NavLink></span>
                            </h5>
                        </div>
                        <form className={style.login} action="" method="get">
                            <div className={style.formGroup}>
                                <label>Email Id</label><span>*</span>
                                <input type="text" id="Email" placeholder="Enter Email" value={email} onChange={handleEmail} />
                            </div>
                            <div className={style.formGroup}>
                                <label>Password</label><span>*</span>
                                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className={style.formGroup}>
                                <button type="button" className={style.btn} onClick={handleLoginButton}>LOG IN</button>
                            </div>
                            <div className={style.password}>
                                <NavLink className={style.password} to="/passwordReset">Forgot Password?</NavLink>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
export default Login