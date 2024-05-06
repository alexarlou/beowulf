import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

const Video = () => {
    const [modal, setModal] = useState(false);
    const [activeImage, setActiveImage] = useState(0);
    const images = ["/feature3.png", "/feature2.png"];

    const toggle = () => setModal(!modal);

    const nextImage = () => {
        setActiveImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setActiveImage((prev) => (prev - 1 + images.length) % images.length);
    };
    return (
        <section className="app1 videos bg-theme">
            <Container>
                <Row>
                    <Col md="5" sm="12">
                        <div className="center-content">
                            <div className="video w-100">
                                <a className="button center-content" onClick={toggle}>
                                    <img alt="video" className="img-fluid" src="/images/app_landing1/playl-1.png" />
                                </a>
                            </div>
                            <Modal isOpen={modal} toggle={toggle} centered={true} size="lg">
                                <ModalHeader toggle={toggle} className="modal-no-header close-up"></ModalHeader>
                                <ModalBody className="iframe-modal">
                                    <img alt="" className="service-img img-fluid" src={images[activeImage]} />
                                    <div className="modal-navigation">
                                        <Button onClick={prevImage}>Previous</Button>
                                        <Button onClick={nextImage}>Next</Button>
                                    </div>
                                </ModalBody>

                            </Modal>
                        </div>
                    </Col>
                    <Col lg="6" md="7" sm="12" className="offset-lg-1 counters video-description">
                        <h3 className="m-b-30 text-white">Discover The New App</h3>
                        <div className="m-b-35">
                            <p className="p-light">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            </p>
                            <p className="p-light">
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur.
                            </p>
                            <p className="p-light">
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="link-horizontal">
                            <ul>
                                <li>
                                    <a className="icon-btn">
                                        <i aria-hidden="true" className="fa fa-android center-content shadow"></i>
                                        <h6 className="text-center text-white">android</h6>
                                    </a>
                                </li>
                                <li className="borders-right p-0"></li>
                                <li>
                                    <a className="icon-btn">
                                        <i aria-hidden="true" className="fa fa-apple center-content shadow"></i>
                                        <h6 className="text-center text-white">ios</h6>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}



export default Video;