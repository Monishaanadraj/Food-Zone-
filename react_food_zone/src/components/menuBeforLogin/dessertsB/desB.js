import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import style from "./dessert.module.css"
import { useEffect } from 'react'
import axios from 'axios'
import Footer from '../../footer/footer'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Navbar from '../../Navbar/Navbar'


const Viewfood = () => {
  const [food, setFood] = useState([])

  useEffect((category) => {
    const inpobj = {
      category
    }
    axios.get(`http://localhost:3001/user/getDessertsFood/'${category}'`, inpobj)
      .then(response => {
        setFood(response.data)
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])



  return (
    <>
      <Navbar />
      <div className={style.heading} >
        <h1>Desserts</h1>
      </div>
      <div className={style.nav_button}>
        <NavLink className={style.nav_btn} to="/veg_listB">VEG</NavLink>
        <NavLink className={style.nav_btn} to="/non_vegB">NON-VEG</NavLink>
        <NavLink className={style.nav_btn} to="/startersesB">STARTERS</NavLink>
        <NavLink className={style.nav_btn} to="/menuB">All</NavLink>
      </div>

      <div className={style.container}>
        {
          food.map(food => {
            const { name, description, price, file } = food
            return (

              <div className={style.single_product}>
                <div className={style.product_content}>
                  <img className={style.product_img} src={file} alt='' />
                  <div className={style.title}>{name}</div>
                  <div className={style.desc}>{description}</div>
                  <div className={style.cart}>
                    <div className={style.price}>Rs.{price}</div>
                    <div><button><NavLink className={style.addtocart} to="/login">Add To Cart</NavLink></button></div>
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


