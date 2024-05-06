import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Container,Row,Col} from 'reactstrap'
import DefaultButton from '../../components/DefaultButton'

const Download = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    }, []);

    return (
        <section className="app1 download">
            <div id="download" className="anchor"></div>
            <Container>
                <Row>
                    <Col lg="5" md="6" data-aos="fade-right" data-aos-delay="100">
                        <div className="center-content center-mobile info-section1">
                            <img alt="" className="img-fluid" src="/screenshots/17.png" />
                        </div>
                    </Col>
                    <Col lg="6" md="6" className="offset-lg-1">
                        <div className="center-text">
                            <div>
                                <div className="download-img d-flex">
                                    <div className="set-relative">
                                        <img alt="" className=""
                                            src="/beowulf-logo-small.png" style={{width:'50px'}}/>
                                        
                                    </div>
                                    <div className="center-img-content m-l-15">
                                        <h3 className="m-b-5">BULLDOG</h3>
                                        <p className="mb-0">Mobile App</p>
                                    </div>
                                </div>
                                <div className="information">
                                    <p>Get started with enhanced data analysis today by downloading our mobile app. Available on both iOS and Android, it brings powerful insights directly to your fingertips. Experience the convenience of on-the-go analytics and stay informed with real-time data updates.</p>
                                    <DefaultButton link='#contact' name='CONTACT US FOR A DEMO' align='left'/>
                                </div>
                                {/* <div className="link-horizontal">
                                    <ul>
                                        <li>
                                            <a className="icon-btn">
                                            <i aria-hidden="true" className="fa center-content shadow" ><img style={{width:'30px'}} src="/apple-icon.svg" alt="" /></i>
                                                <h6 className="text-center font-primary">android</h6>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="icon-btn">
                                                <i aria-hidden="true" className="fa center-content shadow"><img style={{width:'30px'}} src="/play-store-icon.svg" alt="" /></i>
                                                <h6 className="text-center font-primary">ios</h6>
                                            </a>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}



export default Download;