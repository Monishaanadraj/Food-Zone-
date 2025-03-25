import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { ChefData } from './aboutChefData';
import AboutCard from './aboutChefCard';
import style from './chef.module.css';
const AboutChef = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col className={style.Chef_Container}>
                        <div className={style.headding}>
                            <h2>Our Master Chefs</h2>
                        </div>
                    </Col>
                </Row>
                <div className='row'>
                    {
                        ChefData.map(item => {
                            return (
                                <div className='col-sm-12 col-md-12 col-lg-3 col-xl-3' key={item.id} >
                                    <AboutCard item={item} />
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        </section >

    )
}
export default AboutChef