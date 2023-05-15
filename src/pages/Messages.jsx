import React from 'react'
import { Icon } from '@iconify/react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import waji from '../components/asserts/Images/waji.svg'
import fullframe from '../components/asserts/Images/fullframe.svg'

import icon1 from '../components/asserts/Images/icon1.svg'
import icon2 from '../components/asserts/Images/icon2.svg'
import icon3 from '../components/asserts/Images/icon3.svg'
import icon4 from '../components/asserts/Images/icon4.svg'
import icon5 from '../components/asserts/Images/icon5.svg'
import icon6 from '../components/asserts/Images/icon6.svg'
import icon7 from '../components/asserts/Images/icon7.svg'
import icon8 from '../components/asserts/Images/icon8.svg'
import icon9 from '../components/asserts/Images/icon9.svg'
import icon10 from '../components/asserts/Images/icon10.svg'
import './Message.css'

import bigman from '../components/asserts/Images/bigman.svg'
import bigman2 from '../components/asserts/Images/bigman2.svg'
import bigman3 from '../components/asserts/Images/bigman3.svg'

export default function Messages() {
  return (
   <>
    <section className='mainusersection'>
      <Container fluid>
        <Row>

       

          <Col md={{span : 3 , offset : 1}}>
            <div className='backarrowdiv'> 
            <Icon icon="bx:arrow-back" />
            <p>Project Discussion Meeting</p>
            </div>
    
          </Col>

          <Col md={{span : 2 , offset : 1}}>
            <div className='timespan'>
              <span>12:18</span>
            </div>
          </Col>

          <Col md={{span : 3 , offset : 2}}>
          
          <div className='wajiside'>
          <div>
            <img className='waji' src={waji} alt="" />
          </div>

          <div className='wajisidebardropdown'>
          <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                 M.Wajahat (You)
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
          </div>

          </div>
    
          </Col>

          </Row>
          </Container>

     
          </section>

          <section className='manssection'>
            <Container>
              <Row>

            

                <Col lg={12} md={12} sm={12}>
                  <div>
                    <img className='bigman'  src={fullframe} alt="" />
                 </div>

                </Col>

             



              </Row>
            </Container>

        

            <Container>
            <Row>

        <Col lg={1} md={12} sm={12}>
          
          </Col>

          <Col lg={5} md={12} sm={12}>

          <div className='icons1'>
            
          <img src={icon1} alt="" />
          <span>999 - 000 - 999 - 00</span>
          <p>Lorem Ipsum Dolor Sit Amet</p>
          </div>

          </Col>

          <Col lg={5} md={12} sm={12}>
          <div className='iconsizemain'>
            <img className='iconsize' src={icon2} alt="" />
            <img className='iconsize' src={icon3} alt="" />
            <img className='iconsize' src={icon4} alt="" />
            <img className='iconsize' src={icon5} alt="" />
            <img className='iconsize' src={icon6} alt="" />
            <img className='iconsize' src={icon7} alt="" />
            <img className='iconsize' src={icon8} alt="" />
            <img className='iconsize' src={icon9} alt="" />
            <img className='iconsize' src={icon10} alt="" />
         

            </div>

          </Col>

          <Col lg={1} md={12} sm={12}>
          
          </Col>


        </Row>
            </Container>

          </section>
   </>
  )
}
