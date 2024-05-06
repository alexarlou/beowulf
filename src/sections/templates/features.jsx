import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Container,Row,Col} from 'reactstrap'
import DefaultButton from '../../components/DefaultButton'
const Features = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, []);
    return (
        <section className="app2 format quality p-t-0">
          <div id="features" className="anchor"></div>

            <Col md="10" className="offset-md-1">
                <div className="title title2">
                    <h6 className="font-primary borders main-text text-uppercase"><span>discover our</span></h6>
                    <div className="sub-title">
                        <h2 className="title-text text-capitalize text-center">Features</h2>
                    </div>

                    <div style={{margin:'40px auto 0px auto', maxWidth:'400px'}}><p>Discover the powerful features designed to enhance your analytical capabilities and streamline decision-making processes.</p></div>
                </div>
            </Col>


            <Container>
                <Row className="features-cont image-top">
                    <Col sm="6"  className="counters set-order-2">
                        <div className="abouts center-text">
                            <div>
                                <div className="format-head-text">
                                    <h3 className="">Insightful Dashboards for Strategic Mastery</h3>
                                </div>
                                <div className="format-sub-text">
                                    <p className="about-para">Unlock the full potential of your data with our advanced analytics dashboard. Experience cutting-edge data visualization techniques that bring clarity to complexity and empower you with actionable insights. Our dashboard is designed to streamline the decision-making process, making it easier to navigate through vast data with precision and ease.</p>
                                    <DefaultButton link='#contact' name='REQUEST A DEMO' align='left'/>
                                </div>
                                
                            </div>
                        </div>
                    </Col>
                    <Col sm="6"  className="counters set-height overflow-hide" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <img alt="" className="img-fluid mobile2" data-aos="fade-left" style={{maxWidth:'350px'}}
                            src="/screenshots/9.png" />
                    </Col>
                </Row>




                <Row className="features-cont image-center">
                <Col sm="6"  className="counters set-height overflow-hide" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <img alt="" className="img-fluid mobile2" data-aos="fade-right" style={{maxWidth:'300px'}}
                            src="/screenshots/16.png" />
                    </Col>
                    <Col sm="6"  className="counters set-order-2">
                        <div className="abouts center-text">
                            <div>
                                <div className="format-head-text">
                                    <h3 className="">Advanced Inventory Management At Your Fingertips</h3>
                                </div>
                                <div className="format-sub-text">
                                    <p className="about-para">Stay connected with expenditures, receipt, and request reports no matter where you are with our application. Access your inventory, receive updates, and make informed decisions directly from your mobile device. Our app ensures you have the necessary tools at your fingertips, offering full functionality and seamless integration with our desktop platforms.</p>
                                    <DefaultButton link='#contact' name='REQUEST A DEMO' align='left'/>
                                </div>
                                
                            </div>
                        </div>
                    </Col>
                  
                </Row>




                <Row className="features-cont image-bot">
                 
                    <Col sm="6"  className="counters set-order-2">
                        <div className="abouts center-text">
                            <div>
                                <div className="format-head-text">
                                    <h3 className="">Tailored Insights with Customizable Reports</h3>
                                </div>
                                <div className="format-sub-text">
                                    <p className="about-para">Create and customize reports that cater specifically to your needs. Our tools allow you to select parameters, define metrics, and format your reports to highlight the most relevant information. Whether it’s for daily briefings or comprehensive quarterly reviews, our customizable reports make it simple to keep stakeholders informed and engaged.</p>
                                    <DefaultButton link='#contact' name='REQUEST A DEMO' align='left'/>
                                </div>
                                
                            </div>
                        </div>
                    </Col>
                    <Col sm="6"  className="counters set-height overflow-hide" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <img alt="" className="img-fluid mobile2" data-aos="fade-left" style={{maxWidth:'400px'}}
                            src="/screenshots/13.png" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


export default Features;