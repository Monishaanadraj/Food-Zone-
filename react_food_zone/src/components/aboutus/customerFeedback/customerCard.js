import React from 'react'
import style from './customer.module.css';

const AboutCustomerCard = (props) => {
    const { title, imgUrl,desc} = props.item
    return (
        <div className={style.container}>
            <div className={style.single_product}>
                <div className={style.product_img}>
                    <img className={style.product_img} src={imgUrl} alt="" />
                </div>
                <div className={style.product_content}>
                    <h6 className={style.title}>{title}</h6>
                    <div className={style.desc}>{desc}</div>
                </div>
            </div>
        </div>
    )
}
export default AboutCustomerCard