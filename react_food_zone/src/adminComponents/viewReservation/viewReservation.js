import React, { useState } from 'react'
import { useEffect } from 'react'
import AdminNavbar from "../../adminComponents/navbar/navbar";
import style from "./viewReservation.module.css"
import axios from 'axios'




const ViewReservation = () => {
    const [reservation, setReservation] = useState([])

    useEffect(() => {
        getReserve()
    }, [])

    const getReserve = () => {
        axios.get("http://localhost:3001/admin/getAllReservation")
        .then(response => {
            setReservation(response.data)
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    }


    const handleCancel = (id) => {
        axios.put(`http://localhost:3001/admin/cancelReservation/${id}`)
        .then(response => {
            getReserve()
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleConfirm = (id) => {
        axios.put(`http://localhost:3001/admin/confirmReservation/${id}`)
        .then(response => {
            getReserve()
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            < AdminNavbar />
            <div className={style.heading}>
                <h1>Reservation Details</h1>
            </div>
            <div className={style.container}>
                {
                    reservation.map(reservation => {
                        const { reservationId, status, Name, PhoneNumber, date, Time, TotalMembers } = reservation
                        return (
                            <div className={style.details_container}>
                                <div className={style.single_product}>
                                    <div className={style.product_content}>
                                        <h3 type="status">Status : {status}</h3>
                                        <div className={style.title}>Name : {Name}</div>
                                        <div className={style.desc}>Phone Number : {PhoneNumber}</div>
                                        <div className={style.desc}>Date : {date}</div>
                                        <div className={style.price}>Time : {Time}</div>
                                        <div className={style.price}>Total Members : {TotalMembers}</div>
                                        <div>
                                            <div className={style.cart}>
                                                {
                                                    status === "PENDING" &&
                                                    <>
                                                        <button className={style.addtocart} onClick={() => handleConfirm(reservationId)}>Confirm</button>
                                                        <button className={style.addtocart} onClick={() => handleCancel(reservationId)}>Cancel</button>
                                                    </>
                                                }
                                            </div>
                                        </div>
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

export default ViewReservation