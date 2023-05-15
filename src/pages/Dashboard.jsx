import React from 'react'
import './Dashboard.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';

import waji from '../components/asserts/Images/waji.svg'
import form from '../components/asserts/Images/from.svg'
import to from '../components/asserts/Images/to.svg'

import redvideo from '../components/asserts/Images/redpic.svg'

import { Icon } from '@iconify/react';


export default function Dashboard() {
  return (
    <>
      <Container fluid>
        <Row>

          <Col md={3}  >
          </Col>

          <Col md={9} >

            <div className='navbardivmain'>
            <div>

            </div>

            <div className='navbardivmain'>
              <input  type="text" placeholder='Meeting Code' />
              <span>Join</span>
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  Start A Meeting
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Icon icon="charm:search" />
              <Icon icon="bx:bell" />
              <img className='waji' src={waji} alt="" />
            </div>

            </div>

          </Col>


        </Row>
      </Container>


      {/* main div container */}

      <section className='maincontent'>
      <Container fluid>
        <Row>
          <Col md={3} >
            <h5>Upcoming Meetings</h5>
          </Col>
           
          
          <Col md={{span : 5 , offset : 3}}>

            <div className='uncomingmeetiondashboard' >
          

            <div className='uncomingmeetiondashboard'>
              <img src={form} ajnlt="" />
              <img src={to} alt="" />
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                 FILTER
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  Start Meeting
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


      <section  className='meetingtime'>
      <Container fluid>
      <Row >
        
        <Col md={4} >
          <div className='projectandtime'>
          <div>
          <span className='timespan'>5:00 AM  -  7:00 AM</span>
          </div>
       
            <div>
            <p className='peojectdiscussp'>Project Discussion</p>
            <span className='projectspan'>Meeting ID: <small>999 000 999 00</small> </span>
            </div>
            </div>

        </Col>

     

        <Col md={{ span: 4, offset: 4 }} >
          
            <div className='deletedicons'>
              <div> 
          
              </div>
              <div className='deleicons'>  
              <Icon className='penicon' icon="ant-design:edit-outlined" />
              <Icon className='deleteicon' icon="ant-design:delete-outlined" />
              </div>
        
            </div>
        </Col>
  
      </Row>
      </Container>
      </section>

      <section  className='meetingtime'>
      <Container fluid>
      <Row >
        
        <Col md={4} >
          <div className='projectandtime'>
          <div>
          <span className='timespan'>5:00 AM  -  7:00 AM</span>
          </div>
       
            <div>
            <p className='peojectdiscussp'>Project Discussion</p>
            <span className='projectspan'>Meeting ID: <small>999 000 999 00</small> </span>
            </div>
            </div>

        </Col>

     

        {/* <Col md={ 4 , { offset: 4 } } > */}
        <Col md={{ span: 4, offset: 4 }}>
            <div className='deletedicons'>
              <div> 
          
              </div>
              <div className='deleicons'>  
              <Icon className='penicon' icon="ant-design:edit-outlined" />
              <Icon className='deleteicon' icon="ant-design:delete-outlined" />
              </div>
        
            </div>
        </Col>
  
      </Row>
      </Container>
      </section>


      <section  className='meetingtime'>
      <Container fluid>
      <Row >
        
        <Col md={4} >
          <div className='projectandtime'>
          <div>
          <span className='timespan'>5:00 AM  -  7:00 AM</span>
          </div>
       
            <div>
            <p className='peojectdiscussp'>Project Discussion</p>
            <span className='projectspan'>Meeting ID: <small>999 000 999 00</small> </span>
            </div>
            </div>

        </Col>

     

        <Col md={{ span: 4, offset: 4 }} >
            <div className='deletedicons'>
              <div> 
          
              </div>
              <div className='deleicons'>  
              <Icon className='penicon' icon="ant-design:edit-outlined" />
              <Icon className='deleteicon' icon="ant-design:delete-outlined" />
              </div>
        
            </div>
        </Col>
  
      </Row>
      </Container>
      </section>



      <section  className='meetingtime'>
      <Container fluid>
      <Row >
        
        <Col md={4} >
          <div className='projectandtime'>
          <div>
          <span className='timespan'>5:00 AM  -  7:00 AM</span>
          </div>
       
            <div>
            <p className='peojectdiscussp'>Project Discussion</p>
            <span className='projectspan'>Meeting ID: <small>999 000 999 00</small> </span>
            </div>
            </div>

        </Col>

     

        <Col md={{ span: 4, offset: 4 }} >
            <div className='deletedicons'>
              <div> 
          
              </div>
              <div className='deleicons'>  
              <Icon className='penicon' icon="ant-design:edit-outlined" />
              <Icon className='deleteicon' icon="ant-design:delete-outlined" />
              </div>
        
            </div>
        </Col>
  
      </Row>
      </Container>
      </section>




      <section  className='meetingtime'>
      <Container fluid>
      <Row >
        
        <Col md={4} >
          <div className='projectandtime'>
          <div>
          <span className='timespan'>5:00 AM  -  7:00 AM</span>
          </div>
       
            <div>
            <p className='peojectdiscussp'>Project Discussion</p>
            <span className='projectspan'>Meeting ID: <small>999 000 999 00</small> </span>
            </div>
            </div>

        </Col>

     

        <Col md={{ span: 4, offset: 4 }} >
            <div className='deletedicons'>
              <div> 
          
              </div>
              <div className='deleicons'>  
              <Icon className='penicon' icon="ant-design:edit-outlined" />
              <Icon className='deleteicon' icon="ant-design:delete-outlined" />
              </div>
        
            </div>
        </Col>
  
      </Row>
      </Container>
      </section>




      <section  className='meetingtime'>
      <Container fluid>
      <Row >
        
        <Col md={4} >
          <div className='projectandtime'>
          <div>
          <span className='timespan'>5:00 AM  -  7:00 AM</span>
          </div>
       
            <div>
            <p className='peojectdiscussp'>Project Discussion</p>
            <span className='projectspan'>Meeting ID: <small>999 000 999 00</small> </span>
            </div>
            </div>

        </Col>

     

        <Col md={{ span: 4, offset: 4 }}>
            <div className='deletedicons'>
              <div> 
          
              </div>
              <div className='deleicons'>  
              <Icon className='penicon' icon="ant-design:edit-outlined" />
              <Icon className='deleteicon' icon="ant-design:delete-outlined" />
              </div>
        
            </div>
        </Col>
  
      </Row>
      </Container>
      </section>


      </section>

       
    </>
  )
}
