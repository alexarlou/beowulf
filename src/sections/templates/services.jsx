import React from 'react'
import {Container,Row,Col} from 'reactstrap'
const Services = () => (
    <section className="app1 services" id="service">
        <div id="introduction" className="anchor"></div>

        <Container>
    


                <Col md="10" className="offset-md-1">
                <div className="title title2">
                    <h6 className="font-primary borders main-text text-uppercase"><span>learn more</span></h6>
                    <div className="sub-title">
                        <h2 className="title-text text-capitalize text-center">Introducing Bulldog</h2>
                    </div>

                </div>
            </Col>




            <Row>
                
                <Col md="4">
                    <div className="service service-overlay">
                        <div className="img-block">
                            <img alt="" className="service-img img-fluid" src="/feature1-white.png" />
                        </div>
                        <div className="service-feature">
                            <h4 className="feature-text">LOGISTICS AND PLANNING</h4>
                            <p>Streamline your operations with our advanced logistics and planning tools. Enhance efficiency with real-time scheduling and resource management.</p>

                        </div>
                    </div>
                </Col>
                <Col md="4">
                    <div className="service service-overlay">
                        <div className="img-block">
                            <img alt="" className="service-img img-fluid" src="/feature2-white.png" />
                        </div>
                        <div className="service-feature">
                            <h4 className="feature-text">REPORTING AND ANALYSIS</h4>
                            <p>Gain actionable insights with our comprehensive reporting features. Analyze performance, track progress, and make data-driven decisions.</p>
                        </div>
                    </div>
                </Col>
                <Col md="4">
                    <div className="service service-overlay">
                        <div className="img-block">
                            <img alt="" className="service-img img-fluid" src="/feature3-white.png" />
                        </div>
                        <div className="service-feature">
                            <h4 className="feature-text">MOBILE COMPATIBLE</h4>
                            <p>Stay connected and manage your campaigns on the go. Our mobile-compatible platform ensures you have full control, anytime and anywhere.</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <div style={{margin:'40px auto 0px auto', maxWidth:'700px', textAlign:'center'}}><p>Bulldog is a tactical to operational reporting system providing unit inventory accountability, and predictive analysis across all classes of supply. The system is comprised of a an end user application accessible via mobile devices or laptops and an administrative/reporting dashboard for real-time analysis and predictive modeling</p></div>

        </Container>
    </section>
)


export default Services;