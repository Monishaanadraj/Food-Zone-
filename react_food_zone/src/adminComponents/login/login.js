import React from "react";
import style from "./login.module.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Typography } from '@mui/material';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import axios from "axios"



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
        axios.post("http://localhost:3001/admin/adminlogin", inputobj)
            .then(response => {
                console.log(response)
                alert("Login Successfull")
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
        return <Navigate to="/admin/viewfood" />
    }

    return (

        <>
            <div className={style.logincontainer}>
                <Typography color={"goldenrod"} variant="h6" component={"div"} sx={{ flexGrow: 1, fontSize: "30px" }} >
                    <FoodBankIcon style={{ fontSize: "30px" }} />
                    Food Zone
                </Typography>
                <div className={style.container}>
                    <div className={style.form}>
                        <div className={style.headding}>
                            <h1>LOG IN</h1>
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
                        </form>
                    </div>
                </div>

            </div>
            <div>
            </div>
        </>
    )
}
export default Login