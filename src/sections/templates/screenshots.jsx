import React from 'react'
import Slider from "react-slick";
import { Container, Row, Col } from 'reactstrap'

var settings = {
    centerMode: true,
    centerPadding: '140px',
    infinite: true,
    autoplay: true,
    arrows: false,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                centerPadding: "0",
                padding: "0",
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                centerPadding: "160px",
                padding: "20px",
                slidesToScroll: 1,
                centerMode: true,
                autoplay: true,
                dots: true
            }
        }
    ]
};

const ScreenShots = () => {
    return (
        <section className="app1 screenshot bg-theme" id="screenshot">
           <div id="screenshots" className="anchor"></div>
            <Container>
                <Row>
                    <Col md="10" className="offset-md-1">
                      <div className="title title2">
                          <h6 className="font-primary borders main-text text-uppercase"><span>see our</span></h6>
                          <div className="sub-title">
                              <h2 className="title-text text-capitalize text-center">Mobile App Screenshots</h2>
                          </div>

                          <div style={{margin:'40px auto 0px auto', maxWidth:'400px'}}><p>Explore our gallery of mobile app screenshots to see how intuitive design and functionality come together for on-the-go data management.</p></div>
                      </div>
                  </Col>

                </Row>
                <Row className="set-relative">
                    <Col xs="12">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <Slider className="screenshot-slider"  {...settings}>
                                    <div className="item">
                                        <img alt="" className="img-fluid" src="/screenshots/1.png" />
                                    </div>
                                    <div className="item">
                                        <img alt="" className="img-fluid" src="/screenshots/2.png" />
                                    </div>
                                    <div className="item">
                                        <img alt="" className="img-fluid" src="/screenshots/3.png" />
                                    </div>
                                    <div className="item">
                                        <img alt="" className="img-fluid" src="/screenshots/4.png" />
                                    </div>
                                    <div className="item">
                                        <img alt="" className="img-fluid" src="/screenshots/5.png" />
                                    </div>
                                    <div className="item">
                                        <img alt="" className="img-fluid" src="/screenshots/6.png" />
                                    </div>
                                    <div className="item">
                                        <img alt="" className="img-fluid" src="/screenshots/7.png" />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default ScreenShots;