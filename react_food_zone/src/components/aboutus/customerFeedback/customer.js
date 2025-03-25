import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { CustomerData} from './customerData';
import AboutCustomerCard from './customerCard';
import style from './customer.module.css';
const AboutCustomer = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col className={style.Chef_Container}>
                        <div className={style.heading}>
                            <h2>Our Customer</h2>
                        </div>
                    </Col>
                </Row>
                <div className='row'>
                    {
                        CustomerData.map(item => {
                            return (
                                <div className='col-sm-12 col-md-12 col-lg-3 col-xl-3' key={item.id} >
                                    <AboutCustomerCard item={item} />
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        </section >

    )
}
export default AboutCustomer