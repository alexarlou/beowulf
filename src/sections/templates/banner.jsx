import React from 'react'
import Tilt from 'react-parallax-tilt';
import {Container,Row,Col} from 'reactstrap'
import DefaultButton from '../../components/DefaultButton';
const Banner = () => (
    <section className="app1 header" id="home">
        <div className="app1-header bg">
            <Container>
                <Row>
                    <Col lg="12" md="12">

                        <div className="center-text header-centered">
                            <div>
                                <div className="header-text">
                                    <h1 style={{textTransform: 'uppercase'}}>Delivering Solutions, <nobr>Where It’s Needed Most</nobr></h1>
                                </div>
                                <div className="header-sub-text">
                                    <p className="text-white p-light">Beowulf is a data science company focused on solving high impact problems by integrating national strategic analysis, observational research, cultural intelligence & machine learning.</p>
                                    <DefaultButton link='#introduction' name='LEARN MORE' align='center' color='light'/>
                                </div>

                                {/* <div className="link-horizontal">
                                    <ul>
                                        <li>
                                            <a className="icon-btn">
                                                <i aria-hidden="true" className="fa fa-android center-content"></i>
                                                <h6 className="text-center text-white">android</h6>
                                            </a>
                                        </li>
                                        <li className="borders-right p-0"></li>
                                        <li>
                                            <a className="icon-btn">
                                                <i aria-hidden="true" className="fa fa-apple center-content"></i>
                                                <h6 className="text-center text-white">ios</h6>
                                            </a>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </Col>
                   {/* <div className="rotate col-auto">
                        <Tilt perspective="20000" transitionSpeed="3000">
                            <img alt="" className="img-fluid" src="/images/app_landing1/preview_movie.png" />
                        </Tilt>
                    </div>
                     <Col className="squares">
                        <img alt="" className="img-fluid img-1 set-abs" src="/images/app_landing1/Ellipse.png" />
                        <img alt="" className="img-fluid img-2 set-abs" src="/images/app_landing1/Ellipse.png" />
                    </Col> */}
                    
                </Row>
               
            </Container>
            <div className="animation-circle-inverse col-auto">
                <i></i>
                <i></i>
                <i></i>
            </div>
        </div>
    </section>
)


export default Banner;