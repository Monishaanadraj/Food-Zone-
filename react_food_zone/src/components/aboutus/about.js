import React from "react";
import Footer from "../footer/footer";
import Navbar from "../Navbar/Navbar";
import style from "./about.module.css";
import About1 from "../img/about_1.jpg";
import About2 from "../img/about_2.jpg";
import AboutChef from "./aboutChef";
import AboutCustomer from "./customerFeedback/customer";


const About = () => {
    return (
        <>
            <div className={style.about}>
                <Navbar />
            </div>
            <div className={style.bannerImage}>
                <img className={style.bgimage1} src={About1} alt="" />
                <img className={style.bgimage2} src={About2} alt="" />
            </div>
            <div className={style.container}>
                <div className={style.content_about}>
                    <h1>About Us</h1>
                    <div>
                        <p>Welcome to our online food ordering website! We are a team of foodies
                            who are passionate about bringing the best restaurant meals straight
                            to your doorstep.Our platform makes it easy for you to browse menus,
                            place orders. Whether you're in the mood for delecious foods we've
                            got you covered.
                        </p>
                        <p>Thank you for choosing us for all of your food delivery needs.
                            We look forward to serving you soon!
                        </p>
                    </div>
                    <h2>Mon-Sun &nbsp; 8AM - 11PM</h2>
                    <h3>+ 1-978-123-4567</h3>
                </div>
            </div>
            <AboutChef />
            <AboutCustomer/>
            <Footer />
        </>

    )
}
export default About