import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import style from "./addToCart.module.css";
import { Navigate } from 'react-router-dom';
import NavbarAfterLogin from '../navbarAfterLogin/navbarAfterLogin';
import Footer from "../footer/footer";


const AddToCart = (props) => {
  const [food, setFood] = useState([])
  const [qty_, setQty] = useState(1)
  const [totalAmount, setTotalAmount] = useState(0)
  const [payment, setPayment] = useState(false)


  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const ids = localStorage.getItem("cartids").split(",")
    const arr = []
    let sum = 0
    for (const id of ids) {
      const response = await axios.get(`http://localhost:3001/user/getSelectedFood/${id}`)
      const data = response.data
      const userData = data[0]
      const obj = { name: userData.name, price: userData.price, file: userData.file, foodid: userData.foodid, qty: 1 }
      sum += parseInt(userData.price) * 1
      arr.push(obj)
    }
    setTotalAmount(sum)
    setFood(arr)
    localStorage.setItem("totalAmount", sum)
   
  }


  const handleRemove = (foodid) => {
    const ids = localStorage.getItem("cartids").split(",")
    const updatedArr = ids.filter(id => id.toString() !== foodid.toString())
    localStorage.setItem("cartids", updatedArr)
    getData()
  }

  const handleSelect = (e, foodid) => {
    const value = e.target.value
    const foodarray = food
    const arr = []
    let sum = 0

    for (let item of foodarray) {
      const obj = { name: item.name, price: item.price, file: item.file, foodid: item.foodid, qty: item.foodid == foodid ? value : item.qty }
      sum += parseInt(item.price) * parseInt(obj.qty)
      arr.push(obj)
    }
    console.log(arr)
    setFood(arr)
    setTotalAmount(sum)
    localStorage.setItem("totalAmount", sum)

  }

  const handlePay = () => {
    localStorage.setItem("items", JSON.stringify(food))
    setPayment(true)
  }

  if (payment) {
    return <Navigate to="/addressDetails" />
  }



  return (
    <>
      <NavbarAfterLogin />
      <div className={style.heading}>
        <h1>Cart</h1>
      </div>
      <div className={style.payment}>
        <span className={style.total}>Total Amount : {totalAmount}</span>
        <span><button className={style.pay} onClick={handlePay}>Pay now</button></span>
      </div>
      <div className={style.container}>
        {
          food.map(item => {
            const { name, price, file, foodid, qty } = item
            return (
              <>
                <div className={style.single_product}>
                  <div className={style.product_content}>
                    <img className={style.product_img} src={file} />
                    <div className={style.title}>{name}</div>
                    <div className={style.price} >Rs.{price}</div>
                    <div className={style.content}>
                      <div className={style.content}>
                        <h3> Qty. <span>
                          <select className={style.select} value={qty} onChange={(e) => handleSelect(e, foodid)}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                          </select></span></h3>
                      </div>
                      <div className={style.cart}>
                        <button className={style.addtocart} onClick={() => handleRemove(foodid)}>Remove</button>
                      </div>
                    </div>
                  </div>
                </div>

              </>
            )
          })
        }
      </div>

      <Footer />
    </>
  )
}

export default AddToCart