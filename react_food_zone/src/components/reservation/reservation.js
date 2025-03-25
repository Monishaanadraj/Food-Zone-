import React, { useEffect, useState } from 'react';
import style from "./reservation.module.css"
import Footer from "../footer/footer";
import Image from "../img/table.jpg";
import axios from 'axios';
import NavbarAfterLogin from '../navbarAfterLogin/navbarAfterLogin';
import $ from 'jquery'

const Reservation = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneno, setPhoneno] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [members, setMembers] = useState("")

  useEffect(() => {
    var dtToday = new Date();
    
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    
    var maxDate = year + '-' + month + '-' + day;

    // or instead:
    // var maxDate = dtToday.toISOString().substr(0, 10);


    $('#rdate').attr('min', maxDate);

  },[])

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePhno = (e) => {
    setPhoneno(e.target.value)
  }
  const handleDate = (e) => {
    setDate(e.target.value)
  }
  const handleTime = (e) => {
    setTime(e.target.value)
  }
  const handleTotalMembers = (e) => {
    setMembers(e.target.value)
  }

  const handleButton = () => {
    if (name === '') return alert('Enter Name')
    if (email === '') return alert('Enter email Id')
    if (!validateEmail(email)) return alert("Invalid Email")
    if (phoneno === '') return alert('Enter Phone number')
    if (date === '') return alert('Enter Date')
    if (time === '') return alert('Enter Time')
    if (members === '') return alert('Enter Total Members')

    console.log(name, email, phoneno, date, time, members);
    const userId = localStorage.getItem("userId")
    let inputObj = {
      name, email, phoneno, date, time, members,userId
    }

    axios.post("http://localhost:3001/user/makeReservation", inputObj)
      .then(response => {
        console.log(response);
        alert("Sent a Request for Reservation")
      })
      .catch(err => {
        console.log(err);
        alert("Failed To Make Reservation")
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
      <NavbarAfterLogin />
      <div className={style.headding}>
        <h5>Make Reservation</h5>
        <h1>Book A Table</h1>
      </div>
      <div className={style.bannerImage}>
        <img className={style.bgimage} src={Image} alt="" />
        <div className={style.text}>
          <p>If you're not in a good mood, the only thing you should make is a reservation.</p>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.content}>
          <label>Name</label>
          <input type="text" placeholder="Your Name" onChange={handleName} value={name} />

          <label>Email Id</label>
          <input type="email" placeholder="Email Id" onChange={handleEmail} value={email} />

          <label>Phone Number</label>
          <input type="number" placeholder="Phone Number" onChange={handlePhno} value={phoneno} />

          <label>Date</label>
          <input type="date" max="31-01-2023" id="rdate" placeholder="Date" onChange={handleDate} value={date} />

          <label>Time</label>
          <input type="time" placeholder="Time" style={{ fontsize: "300px" }} onChange={handleTime} value={time} />

          <label>Total Members</label>
          <select style={{ width: "480px", height: "60px" }} placeholder="Total members" onChange={handleTotalMembers} value={members}>
            <option>Choose</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
          <button className={style.btn} onClick={handleButton}>Make a Reservation</button>
          <h1><span>*</span>To cancel Reservation Contact Us : + 1-978-123-4567</h1>
        </div>
        
      </div>

      <Footer />
    </>
  )
}

export default Reservation