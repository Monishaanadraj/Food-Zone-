import React, { useState } from 'react';
import style from "./contact.module.css";
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/footer';
import Image from "../img/chef_cooking.jpg";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import axios from "axios";
const ContactForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleMessage = (event) => {
        setMessage(event.target.value)
    }

    const handleSubmit = () => {
        if (name === '') return alert('Enter Name')
        if (email === '') return alert('Enter email Id')
        if (!validateEmail(email)) return alert("Invalid Email")
        if (message === '') return alert('Enter Your Message')


        console.log(name, email, message);
        let inputObj = {
            name, email, message

        }

        axios.post("http://localhost:3001/user/message", inputObj)
            .then(response => {
                console.log(response);
                alert("Successfully Sent")
            })
            .catch(err => {
                console.log(err);
                alert("Failed To Send")
            })

    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };



    return (
        <>
            <Navbar />
            <div className={style.container}>
                <h1>Contact Us</h1>
                <div className={style.contact_icons}>
                    <div className={style.icon}>
                        <LocationOnIcon style={{ fontSize: "60px" }} />
                        <span className={style.icons}>  Bangalore</span>
                    </div>
                    <div className={style.icon}>
                        <EmailIcon style={{ fontSize: "60px" }} />
                        <span className={style.icons}>foodzone2816@gmail.com</span>
                    </div>
                    <div className={style.icon}>
                        <CallIcon style={{ fontSize: "60px" }} />
                        <span className={style.icons}> + 1-978-123-4567</span>
                    </div>
                </div>
                <div className={style.contactform}>
                    <div className={style.contact}>
                        <label>Name</label><span>*</span>
                        <input type="text" placeholder="Name" onChange={handleName} value={name} ></input>
                    </div>
                    <div className={style.contact}>
                        <label>Email Id</label><span>*</span>
                        <input type="email" placeholder="Email Id" onChange={handleEmail} value={email} ></input>
                    </div>
                    <div className={style.contact}>
                        <label>Message</label><span>*</span>
                        <textarea type="text" placeholder="Your Message" onChange={handleMessage} value={message}></textarea>
                    </div>
                    <div className={style.contact}>
                        <button className={style.btn} type="submit" onClick={handleSubmit}>Send</button>
                    </div>
                    <div className={style.bannerImage}>
                        <img className={style.bgimage} src={Image} alt="" />
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default ContactForm