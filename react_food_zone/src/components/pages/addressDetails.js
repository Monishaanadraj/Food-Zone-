import React, { useState } from 'react';
import style from "./addressDetails.module.css";
import Footer from "../footer/footer";
import { NavLink , Navigate } from "react-router-dom";
import { Typography } from '@mui/material';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import axios from "axios";

const AddressDetails = () => {
 
    const [fullname, setfullname] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [place,setPlace] = useState("")
    const [pincode, setPincode] = useState("")
    const [address, setAddress] = useState("")
    const [landmark, setLandmark] = useState("")
    const [isValidUser, setValidUser] = useState(false)

    const handleOrderAddress = () => {
        if (fullname === '') return alert('Enter Name')
        if (PhoneNumber === '') return alert('Enter Phone Number')
        if (place === '') return alert('Enter Place')
        if (pincode === '') return alert('Enter Pincode')
        if (address === '') return alert('Enter Address')
        if (landmark === '') return alert('Enter Landmark')

        console.log(fullname,PhoneNumber,place,pincode,address,landmark);
        const address_ = `${fullname},${place},${address},${landmark},${pincode},PH: ${PhoneNumber}`

        localStorage.setItem("address", address_)
        setValidUser(true)
        // axios.post("http://localhost:3001/user/address", inputObj)
        //     .then(response => {
        //         console.log(response);
        //         setValidUser(true)
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         alert("Failed To proceed")
        //     })

    }

    
    if (isValidUser) {
        return <Navigate to="/payment" />
    }

    return (

        <>
            <div className={style.logincontainer}>
            <Typography color={"goldenrod"} variant="h6" component={"div"} sx={{ flexGrow: 1,  fontSize: "30px" }} >
                <FoodBankIcon style={{ fontSize: "30px" }} />
                Food Zone
            </Typography>
                <div className={style.container}>
                    <div className={style.form}>
                        <div className={style.headding}>
                            <h1>Enter Shipping Address</h1>
                        </div>
                        <div classname={style.content}>
                            <span className={style.content}><NavLink className={style.content} to="/menu">Go Back</NavLink></span>
                        </div>
                        <form className={style.login} action="" method="get">
                            <div className={style.formGroup}>
                                <label>Full Name(First and Last name)</label><span>*</span>
                                <input type="text" id="Email" placeholder="Enter Full Name" value={fullname} onChange={(e)=>setfullname(e.target.value)} />
                            </div>
                            <div className={style.formGroup}>
                                <label>Phone Number</label><span>*</span>
                                <input type="number" placeholder="Phone number" value={PhoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
                            </div>
                            <div className={style.formGroup}>
                                <label>City/Town</label><span>*</span>
                                <input type="text" placeholder="City/Town" value={place} onChange={(e)=>setPlace(e.target.value)} />
                            </div>
                            <div className={style.formGroup}>
                                <label>Pincode</label><span>*</span>
                                <input type="number" placeholder="Pincode" value={pincode} onChange={(e)=>setPincode(e.target.value)} />
                            </div>
                            <div className={style.formGroup}>
                                <label>Address</label><span>*</span>
                                <input type="text" placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)} />
                            </div>
                            <div className={style.formGroup}>
                                <label>Landmark</label><span>*</span>
                                <input type="text" placeholder="Landmark" value={landmark} onChange={(e)=>setLandmark(e.target.value)} />
                            </div>
                            <div className={style.formGroup}>
                               <NavLink><button  className={style.btn} onClick={handleOrderAddress}>Proceed</button> </NavLink>
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

export default AddressDetails