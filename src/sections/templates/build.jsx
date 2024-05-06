import React from 'react';
import Slider from "react-slick";
import {Container,Row,Col} from 'reactstrap'
import DefaultButton from '../../components/DefaultButton';
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    swipeToSlide: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: { slidesToShow: 1 }
        },
        {
            breakpoint: 1024,
            settings: { slidesToShow: 1 }
        }
    ]
};

const Build = () => (
    <section className="saas1 build-bg" id="dashboards">
        <div className="build-right-slider">
            <Slider className="owl-carousel owl-theme sync2" id="sync2" {...settings}>
                <div className="item">
                    <img alt="work-slider" className="img-fluid work-slide" src="/screenshots/10.png" />
                </div>
                <div className="item">
                    <img alt="work-slider" className="img-fluid work-slide" src="/screenshots/11.png" />
                </div>
                <div className="item">
                    <img alt="work-slider" className="img-fluid work-slide" src="/screenshots/12.png" />
                </div>
            </Slider>
        </div>
        <Container>
            <Row>
                <Col lg="6">
                    
                        <div className="item">
                            <div className="build-box">
                                <h3 className="build-head text-white">Strategic Data for Front-line Insights</h3>
                                <p>Dive into the power of data with our dynamic dashboards tailored for front-line logistics, empowering commanders with actionable insights to optimize operations. Our dynamic dashboards simplify complex analytics, offering visual clarity crucial for strategic decision-making in dynamic environments.</p>
                                <ul>
                                    <li><img alt="icon" src="/dot2.png" /><p>Monitor and analyze real-time logistical data, including supply levels, usage reports, and resource allocation on the front-line.</p>
                                </li>
                                    <li><img alt="icon" src="/dot2.png" /><p>Leverage predictive analytics to anticipate logistical needs and mitigate potential bottlenecks, enhancing responsiveness in challenging situations.</p>
                                </li>
                                    <li><img alt="icon" src="/dot2.png" /><p>Customize dashboards with mission-critical filters and interactive features, facilitating rapid decision-making and resource deployment based on evolving front-line conditions.</p>
                                </li>
                                </ul>
                                <DefaultButton link='#screenshots' name='SEE MORE SCREENSHOTS' align='left' color='light'/>
                            </div>
                        </div>
                       
                </Col>
            </Row>
        </Container>

    </section>
)

export default Build;