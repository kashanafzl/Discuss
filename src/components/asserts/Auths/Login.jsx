import React from 'react'
import './Login.css'
import logo from '../Images/logo.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import sign from '../Images/signpic.svg'
import { Icon } from '@iconify/react';


export default function Login() {
  return (
  <>
        <Container>
          
            <Row id='mainsection' >
                <Col id='loginpage' lg={5} md={12} sm={12} className='mt-5' >
                    <img src={logo} alt="" />

                    <div>
                        <p className='fstparagraph'>Welcome Back.</p>
                    </div>
                    <div>
                        <h3 className='loginpara'>Login.</h3>
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

                    <div className='flexforter'>

                    <div className='showlll'>
                    <input  type="checkbox" />
                    <label className='showpassword'> Show Password</label>
                    </div>

                    <div>
                        <p className='forget'>Forgot Password?</p>
                    </div>

                    </div>

                    <div>
                        <button className='loginbtnbutton'>Login</button>
                    </div>

                    <div className='lastlinesign'>
                        <p> Dont Have An Account Yet? <span id='spanee'>SIGN UP</span> </p>
                    </div>
                    {/* <div>
                        <img src={email} alt="" />
                    </div> */}
                </Col>

             
                <Col lg={7} md={12} sm={12} >
                  <img className='signpic' src={sign} alt="" />
                </Col>
            </Row>

        </Container>
  </>
  )
}
