import React from 'react'
import './Login.css'
import logo from '../Images/logo.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import sign from '../Images/loginpic.svg'
import { Icon } from '@iconify/react';


export default function Sign() {
  return (
    <>
    <Container>
      
        <Row id='mainsection' >
            <Col lg={4} md={6} sm={12} className='mt-5' >
                <img src={logo} alt="" />

                <div>
                    <p className='fstparagraph'>Welcome Back.</p>
                </div>
                <div>
                    <h3 className='loginpara'>Signup.</h3>
                </div>
                <div>
                    <p className='secparagraph'>Kindly enter your credentials below to get <br />
                     access to your account.</p>
                </div>

                <div>
                    <label className='labelpara'>Email*</label>
                </div>
                
                <div>
                <Icon className='emailicon' icon="clarity:email-line" />
                <input id='inputicon2' type="text" placeholder='Enter you Email' />
                </div>

                <div>
                    <label className='labelpara1'>Password*</label>
                </div>
                
                <div>
                <Icon  className='emailicon'  icon="akar-icons:lock-off" />
                <input id='inputicon2' type="text" placeholder='Enter you Password' />
                </div>

                <div>
                    <label className='labelpara1'>Confirm Password*</label>
                </div>
                
                <div>
                <Icon  className='emailicon'  icon="akar-icons:lock-off" />
                <input id='inputicon2' type="text" placeholder='Pre-enter you Password' />
                </div>

            

                <div>
                    <button className='loginbtnbutton'>Create Account</button>
                </div>

                <div className='lastlinesignsign'>
                    <p> Already Have An Account Yet? <span id='spanee'>LOGIN</span> </p>
                </div>
                {/* <div>
                    <img src={email} alt="" />
                </div> */}
            </Col>










            <Col lg={7} md={6} sm={12} >
              <img className='signpic01' src={sign} alt="" />
            </Col>
        </Row>

    </Container>
</>
  )
}
