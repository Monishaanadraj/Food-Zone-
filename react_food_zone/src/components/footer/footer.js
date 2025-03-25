import React from "react";
import style from "./footer.module.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import { Box, Typography } from '@mui/material';


const Footer = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#1A1A19", color: "white", p: 3 }} >
        <div className={style.head}>
          <div className={style.container}>
            <Typography className={style.container} color={"goldenrod"} variant="h6" component={"div"} sx={{ flexGrow: 1, my: 1 }} >
              <FoodBankIcon />
              Food Zone
            </Typography>
           
            <Box sx={{ my: 1, "& svg": { fontSize: "40px", cursor: "pointer", mr: 1, }, "& svg:hover": { color: "goldenrod", transform: "translateX(5px)", translation: "all 400ms", } }}>
              <div className={style.footer}>
                <h1 className={style.footer} >Follow Us:</h1>
               <span><InstagramIcon className={style.icon}/><h6>Instagram : Foodzone1628</h6></span>
                <span><FacebookIcon className={style.icon}/><h6>Facebook : Foodzone </h6></span>
              </div>
            </Box>
          </div>
          <div className={style.contact}>
            <h5>Contact Info</h5>
            <h3>Location:</h3> <h6>Bangalore</h6>
            <h3>Email:</h3> <h6> foodzone2816@gmail.com</h6>
            <h3>Support:</h3> <h6> + 1-978-123-4567</h6>
          </div>
          <div className={style.openhours}>
            <h6>Open hours</h6>
            <ul className={style.openhours}>
              <li>Monday <span>8:00 AM - 11:00 PM</span></li>
              <li>Tuesday <span>8:00 AM - 11:00 PM</span></li>
              <li>Wednesday <span>8:00 AM - 11:00 PM</span></li>
              <li>Thursday <span>8:00 AM - 11:00 PM</span></li>
              <li>Friday <span>8:00 AM - 11:00 PM</span></li>
              <li>Saturday <span>8:00 AM - 11:00 PM</span></li>
              <li>Sunday <span>8:00 AM - 11:00 PM</span></li>
            </ul>
          </div>
          <div className={style.news}>
            <h2>News Letter</h2>
            <p>Far far away, behind the word mountains,</p>
            <p>far from the countries Vokalia and Consonantia,</p>
            <p>there live the blind texts.</p>
            <div className={style.sub}>
              <input type="text" placeholder="Email Id" />
              <button className={style.btn}>Subscribe</button>
            </div>
          </div>

        </div>

        <Typography variant="h5" sx={{ textAlign: "center", "@media (max-width:600px)": { fontSize: "2rem" }, }}>
          Copyright &copy; 2023 All Rights Reserved
        </Typography >
      </Box>
    </>
  )
}
export default Footer