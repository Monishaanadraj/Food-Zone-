import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import style from "./home.module.css";
import Footer from "../footer/footer";
import bg from "../img/banner1.jpg";


const Home = () => {
    useEffect(() => {
        localStorage.setItem("cartids", "")
        localStorage.setItem("items", [])
        localStorage.setItem("totalAmount", 0)
        localStorage.removeItem("userId")
    }, [])

    return (
        <>
            <div className={style.banner}>
                <Navbar />
                <div className={style.bannerImages} >
                    <div className={style.bannerImage1}>
                        <img className={style.image1} src={bg} alt="" />
                    </div>
                    <div className={style.container}>
                        <div className={style.banner_text}>
                            <h2>Food Zone</h2>
                            <h1>Everything Tastes <span>GOOD..</span> When You're <span>HUNGRY..</span></h1>
                            <h3>A good restaurant is like a vacation; it transports you, and it becomes a lot more than just about the food.</h3>
                            <NavLink className={style.nav_btn} to="/menuB">Order Now</NavLink>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
export default Home