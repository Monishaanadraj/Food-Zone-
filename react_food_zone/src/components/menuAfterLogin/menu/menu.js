import React, { useState } from 'react'
import Footer from '../../footer/footer'
import { NavLink } from 'react-router-dom'
import NavbarAfterLogin from '../../navbarAfterLogin/navbarAfterLogin'
import style from "./menu.module.css"
import { useEffect } from 'react'
import axios from 'axios'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';


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

  const handleAddToCart = (id) => {
    if(localStorage.getItem("cartids")) { 
      const ids = localStorage.getItem("cartids").split(",");
      if(ids.includes(id.toString())) return alert("Already added to cart")
      ids.push(id)
      localStorage.setItem("cartids", ids)
    }else{
      localStorage.setItem("cartids", id)
    }
    return alert("Added to cart")
  }

  return (
    <>
      <NavbarAfterLogin />
      <div className={style.heading} >
        <h1>Menu</h1>
      </div>
      <div className={style.nav_button}>
        <NavLink className={style.nav_btn} to="/veg_list">VEG</NavLink>
        <NavLink className={style.nav_btn} to="/non_veg">NON-VEG</NavLink>
        <NavLink className={style.nav_btn} to="/des">DESSERTS</NavLink>
        <NavLink className={style.nav_btn} to="/starterses">STARTERS</NavLink>
      </div>
      <div className={style.container}>
      {
        food.map(food => {
          const { foodid, name, description, price, file } = food
          return (
              <div className={style.single_product}>
                <div className={style.product_content}>
                  <img className={style.product_img} src={file} alt='' />
                  <div className={style.title}>{name}</div>
                  <div className={style.desc}>{description}</div>
                  <div className={style.cart}>
                    <div className={style.price}>Rs.{price}</div>
                    <div><button className={style.addtocart} onClick={() => handleAddToCart(foodid)}> Add To Cart</button></div>
                  </div>
                  <div className={style.rating}>
                    <StarRateIcon style={{ fontSize: "30px" }} />
                    <StarRateIcon style={{ fontSize: "30px" }} />
                    <StarRateIcon style={{ fontSize: "30px" }} />
                    <StarHalfIcon style={{ fontSize: "30px" }} />
                    <StarBorderIcon style={{ fontSize: "30px" }} />
                  </div>
                </div>
              </div>
          )
        })
      }
      </div>
      <Footer />
    </>
  )
}

export default Viewfood


