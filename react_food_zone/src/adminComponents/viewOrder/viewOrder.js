import React, { useState } from 'react'
import { useEffect } from 'react'
import AdminNavbar from "../../adminComponents/navbar/navbar";
import style from "./viewOrder.module.css"
import axios from 'axios'


const ViewOrder = () => {
    const [Order, setOrder] = useState([])

    useEffect(() => {
        getOrders()
    }, [])

    const getOrders = () => {
        axios.get("http://localhost:3001/admin/getAllOrder")
            .then(response => {
                setOrder(response.data)
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }


    const handleCancel = (id) => {
        axios.put(`http://localhost:3001/admin/cancelOrder/${id}`)
            .then(response => {
                getOrders()
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleConfirm = (id) => {
        axios.put(`http://localhost:3001/admin/confirmOrder/${id}`)
            .then(response => {
                getOrders()
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
                <h1>Order Details</h1>
            </div>
            {
                Order.map(Order => {
                    const { foodItems, totalAmount, mode, status, address, orderid } = Order
                    return (
                        <div className={style.container}>
                            <div className={style.single_product}>
                                <div className={style.product_content}>
                                    <h3 type="status">Status : {status}</h3>
                                    <div className={style.title}>Food name : {foodItems}</div>
                                    <div className={style.desc}>Quantity : {mode}</div>
                                    <div className={style.category}>Total Amount : {totalAmount}</div>
                                    <div className={style.category}>Address : {address}</div>
                                    <div>
                                        <div className={style.cart}>
                                            {
                                                status === "PENDING" &&
                                                <>
                                                    <button className={style.addtocart} onClick={() => handleConfirm(orderid)}>Confirm</button>
                                                    <button className={style.addtocart} onClick={() => handleCancel(orderid)}>Cancel</button>
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
        </>
    )
}

export default ViewOrder