import React from "react";
import { NavLink } from "react-router-dom";
import NavbarAfterLogin from "../navbarAfterLogin/navbarAfterLogin";
import style from "./homepage.module.css";
import Footer from "../footer/footer";
import bg from "../img/banner1.jpg";




const HomePage = () => {
    return (
        <>
            <div className={style.banner}>
                <NavbarAfterLogin />
                <div className={style.bannerImages} >
                    <div className={style.bannerImage1}>
                        <img className={style.image1} src={bg} alt="" />
                    </div>
                    <div className={style.container}>
                        <div className={style.banner_text}>
                            <h2>Food Zone</h2>
                            <h1>Everything Tastes <span>GOOD..</span> When You're <span>HUNGRY..</span></h1>
                            <h3>A good restaurant is like a vacation; it transports you, and it becomes a lot more than just about the food.</h3>
                            <NavLink className={style.nav_btn} to="/menu">Order Now</NavLink>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
export default HomePage