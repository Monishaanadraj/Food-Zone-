import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import AdminNavbar from '../navbar/navbar'
import style from "./viewfood.module.css"
import { useEffect } from 'react'
import axios from 'axios'


const Viewfood = () => {
  const [food, setFood] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/admin/getAllFood")
      .then(response => {
        setFood(response.data)
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])



  const handleDelete = (foodid) => {
    axios.delete(`http://localhost:3001/admin/deleteFood/${foodid}`)
      .then(response => {
        setFood(response.data)
        console.log(response)
        alert("Deleted Successfully")
      })
      .catch(err => {
        console.log(err)
        alert("Unable to delete")
      })

  }
  return (
    <>
      <AdminNavbar />
      <div className={style.heading} >
        <h1>Menu Details</h1>
      </div>
      <NavLink className={style.add} to="/admin/addFood">Add New Food</NavLink>
      <div className={style.container}>
        {
          food.map(food => {
            const { foodid, name, description, price, category, file } = food
            return (

              <div className={style.single_product}>
                <div className={style.product_content}>
                  <img className={style.product_img} src={file} alt='' />
                  <div className={style.title}>{name}</div>
                  <div className={style.desc}>{description}</div>
                  <div className={style.category}>{category}</div>
                  <div className={style.price}>Rs.{price}</div>
                  <div>
                    <div className={style.cart}>
                      <NavLink className={style.addtocart} to={`/admin/updateFood/${foodid}`}>Update</NavLink>
                      <div className={style.cart}> <button className={style.addtocart} onClick={() => handleDelete(foodid)}>Delete</button></div>
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

export default Viewfood


