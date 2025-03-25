import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import style from "./myreservation.module.css";
import NavbarAfterLogin from '../navbarAfterLogin/navbarAfterLogin';


const Myreservation = () => {
    const [reservation, setReservation] = useState([])

    useEffect(() => {
        const userId = localStorage.getItem("userId")

        axios.get(`http://localhost:3001/user/getMyReservation/${userId}`)
            .then(response => {
                setReservation(response.data)
                console.log(response)
            })

            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <>
            <NavbarAfterLogin />
            <div className={style.heading}>
                <h1>My Reservation</h1>
            </div >

            <div className={style.container}>

                {
                    reservation.map(reservation => {
                        const { Name, PhoneNumber, date, Time, TotalMembers, status } = reservation
                        return (
                            <div className={style.deatails}>
                                <div className={style.single_product}>
                                    <div className={style.product_content}>
                                        <h3>Status : {status}</h3>
                                        <div className={style.title}>Name : {Name}</div>
                                        <div className={style.desc}>Phone Number : {PhoneNumber}</div>
                                        <div className={style.desc}>Date : {date}</div>
                                        <div className={style.price}>Time : {Time}</div>
                                        <div className={style.price}>Total Members : {TotalMembers}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}


export default Myreservation