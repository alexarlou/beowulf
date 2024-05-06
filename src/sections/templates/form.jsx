import { useEffect, useState } from 'react'
import {Container,Row,Col} from 'reactstrap'
import ContactForm from '../ContactForm';

const Form = () => (





    <section className="form-section" >
      <div id="contact" className="anchor"></div>
      <div className="animated-bg"><i></i><i></i><i></i></div>

      <Col md="10" className="offset-md-1">
          <div className="title title2">
              <h6 className="font-primary borders main-text text-uppercase"><span>for questions or requests</span></h6>
              <div className="sub-title">
                  <h2 className="title-text text-capitalize text-center">Contact Us</h2>
              </div>

              <div style={{margin:'40px auto 0px auto', maxWidth:'400px'}}><p>If you have any questions please let us know.</p></div>
          </div>
      </Col>
      
      <div className="form">
        <div className="formInner">

          <ContactForm />

        </div>
      </div>

    </section>
)


export default Form;