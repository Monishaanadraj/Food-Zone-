import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import style from "./myOrders.module.css"
import { useState } from 'react';
import NavbarAfterLogin from '../navbarAfterLogin/navbarAfterLogin';

const MyOrders = () => {
  const [order, setOrder] = useState([])

  useEffect(() => {
    const userId = localStorage.getItem("userId")

    localStorage.setItem("cartids", "")
    localStorage.setItem("items", [])
    localStorage.setItem("totalAmount", 0)
    localStorage.setItem("address", "")

    axios.get(`http://localhost:3001/user/getMyOrder/${userId}`)
      .then(response => {
        setOrder(response.data)
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
        <h1>My Orders</h1>
      </div >
      {
        order.map(order => {
          const { totalAmount, foodItems, mode, status, address } = order

          return (
            <div className={style.deatails}>
              <div className={style.single_product}>
                <div className={style.product_content}>
                  <h3>Status : {status}</h3>
                  <div className={style.container}>
                    <h5 className={style.title}> Food Items : <span className={style.content}> {foodItems}</span></h5>
                    <h5 className={style.title}> Total Amount : <span className={style.content}>{totalAmount}</span></h5>
                    <h5 className={style.title}> Mode : <span className={style.content}> {mode}</span></h5>
                    <h5 className={style.title}> Address : <span className={style.content}> {address}</span></h5>
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

export default MyOrders