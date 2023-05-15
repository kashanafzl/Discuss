import React from 'react'
import { Icon } from '@iconify/react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import waji from '../components/asserts/Images/waji.svg'
// import man1 from '../components/asserts/Images/man1.svg'
// import man2 from '../components/asserts/Images/man2.svg'
// import man3 from '../components/asserts/Images/man3.svg'
// import man4 from '../components/asserts/Images/man4.svg'
// import icon1 from '../components/asserts/Images/icon1.svg'
// import icon2 from '../components/asserts/Images/icon2.svg'
// import icon3 from '../components/asserts/Images/icon3.svg'
// import icon4 from '../components/asserts/Images/icon4.svg'
// import icon5 from '../components/asserts/Images/icon5.svg'
// import icon6 from '../components/asserts/Images/icon6.svg'
// import icon7 from '../components/asserts/Images/icon7.svg'
// import icon8 from '../components/asserts/Images/icon8.svg'
// import icon9 from '../components/asserts/Images/icon9.svg'
// import icon10 from '../components/asserts/Images/icon10.svg'


import firstPerson from '../components/asserts/Images/firstPerson.png'
import SecondPerson from '../components/asserts/Images/SecondPerson.png'
import ThirdPerson from '../components/asserts/Images/ThirdPerson.png'
import FourthPerson from '../components/asserts/Images/FourthPerson.png'
import { BiVideo } from 'react-icons/bi'
import { HiOutlineMicrophone } from 'react-icons/hi'
import { BsPinAngle } from 'react-icons/bs'
import { BsThreeDotsVertical } from 'react-icons/bs'
import share from '../components/asserts/Images/share.svg'
// import { TbPhone } from 'react-icons/tb'
import video from '../components/asserts/Images/video.svg'
import mic from '../components/asserts/Images/micc.svg'
import shareScreen from '../components/asserts/Images/shareScreen.svg'
import TwoUsers from '../components/asserts/Images/TwoUsers.svg'
import layOut from '../components/asserts/Images/layOut.svg'
import chat from '../components/asserts/Images/chat.svg'
import record from '../components/asserts/Images/record.svg'
import menu from '../components/asserts/Images/menu.svg'
import { useState } from 'react'
import { GrClose } from 'react-icons/gr'
import daniyal from '../components/asserts/Images/daniyal.png'
import { BiSearch } from 'react-icons/bi'
import hostImg from '../components/asserts/Images/hostImg.png'
import wajahatImg from '../components/asserts/Images/eclipse.png'

import './Users.css'

export default function Users() {

  const [showchat,setshowchat]=useState(false);
const [showParticipants, setshowParticipants]=useState(false);
const [showInvite , setshowInvite]=useState(false);
const [message, setMessage]=useState("");
const [newMessage , setNewMessage]=useState([]);

const handleOnSubmit=(e)=>{
    e.preventDefault();
    const userMessage={message}
    if(message){
        setNewMessage((ms)=>[...ms,userMessage])
        setMessage("")
    }
}

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

          <div id='maincontainerfluidflex' className="container-fluid">
      <div className='Container'>
         <div className="firstrow">
         <div className='firstPersonDiv'>
                <img src={ firstPerson } alt="" className='firstPerson'/>
                <p className='user'>You</p>
                <div className="rightIcons">
                    <span className='camera'>
                        <BiVideo/>
                    </span>
                    <span className='mic'>
                        <HiOutlineMicrophone/>
                    </span>
                    <span className='pin'>
                        <BsPinAngle/>
                    </span>
                    <span className='dots'>
                        <BsThreeDotsVertical/>
                    </span>
                </div>
            </div>
            <div className='SecondPersonDiv'>
                <img src={ SecondPerson } alt="" className='secondPerson'/>
                <p className='user'>Masab Mehmood</p>
                <div className="rightIcons">
                    <span className='camera'>
                        <BiVideo/>
                    </span>
                    <span className='mic'>
                        <HiOutlineMicrophone/>
                    </span>
                    <span className='pin'>
                        <BsPinAngle/>
                    </span>
                    <span className='dots'>
                        <BsThreeDotsVertical/>
                    </span>
                </div>
            </div>
            <div className='thirdPersonDiv'>
                <img src={ ThirdPerson } alt="" className='ThirdPerson'/>
                <p className='user'>Maham Bhabi</p>
                <div className="rightIcons">
                    <span className='camera'>
                        <BiVideo/>
                    </span>
                    <span className='mic'>
                        <HiOutlineMicrophone/>
                    </span>
                    <span className='pin'>
                        <BsPinAngle/>
                    </span>
                    <span className='dots'>
                        <BsThreeDotsVertical/>
                    </span>
                </div>
            </div>
            <div className='fourthPersonDiv'>
                <img src={ FourthPerson } alt="" className='FourthPerson'/>
                <p className='user'>Daniyal Nasir</p>
                <div className="rightIcons">
                    <span className='camera'>
                        <BiVideo/>
                    </span>
                    <span className='mic'>
                        <HiOutlineMicrophone/>
                    </span>
                    <span className='pin'>
                        <BsPinAngle/>
                    </span>
                    <span className='dots'>
                        <BsThreeDotsVertical/>
                    </span>
                </div>
            </div>
         </div>
            
        <div className="operationDiv">
        <img src={ share } alt="" className='connect'
          onClick={()=>{
            setshowInvite(!showInvite)
           }}
        />
        <div className="meetingID">
            <p>999 - 000 - 999 - 00</p>
            <span>Lorem Ipsum Dolor Sit Amet</span>
        </div>
        <div className="rightOperations">
            <div className="phone">
            {/* <TbPhone/> */}
            </div>   
               <img src={ video } alt="" className='videoCamera'/>
               <img src={ mic } alt="" className='videoCamera'/>
               <img src={ shareScreen } alt="" className='videoCamera'/>
               <img src={ TwoUsers } alt="" className='videoCamera'
               onClick={()=>{
                setshowParticipants(!showParticipants)
               }}
               />
               <img src={ layOut } alt="" className='videoCamera'/>

               <img src={ chat } alt="" className='chat' onClick={()=>{
                setshowchat(!showchat)
               }}/>
               <img src={ record } alt="" className='videoCamera'/>
               <img src={ menu } alt="" className='videoCamera'/>
        </div>
        </div>


        </div>
        {
            showchat && <div className="chat-container">
            <div className="MeetingChat">
                <div className="meetingText">
                <h3>Meeting Chat</h3>
                <p>Lorem Ipsum Dolor Sit Amet</p>
                </div>
                <GrClose/>
            </div>
            <hr className='lineHR' />
    
            <div className="chat-area">
                <div className="daniyalChat">
                <img src={daniyal} alt="" className="dani" />
                <div className='User-name'>
                    <p>Daniyal Nasir</p>
                    <span>10:58 Am</span>
                </div>
                </div>
                <div className="sentMessage">
                <p>Wajahat! Here is the link</p>
                   <p><u>www.loremipsumdolorametcons.com</u></p>
                </div>

                <div className="wajahatChat">
                <div className='wajiUser-name'>
                    <p>You</p>
                    <span>10:58 Am</span>
                </div>
                <img src={wajahatImg} alt="" className="wajii" />
                </div>
                {
                    newMessage.map((m)=> <div className="WajisentMessage">
                <p>{m.message}</p>
                
                </div>)
                }
               

            



                
            </div>
            <hr className='messageHR' />

  <div className="formDiv">
  <form onSubmit={handleOnSubmit}>
    <input type="text" id="fname" name="message" placeholder="Enter a message to send" onChange={(e)=>setMessage(e.target.value)}/>
    </form>
    <button><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.91245 9.99999H3.00045L1.02345 2.13499C1.01079 2.08928 1.00308 2.04234 1.00045 1.99499C0.978447 1.27399 1.77245 0.773987 2.46045 1.10399L21.0004 9.99999L2.46045 18.896C1.78045 19.223 0.996447 18.737 1.00045 18.029C1.00247 17.9657 1.01359 17.9031 1.03345 17.843L2.50045 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 </button>
  </div>
        </div>
        }
        {
        showParticipants && <div className="addParticipant">
        <div className="Participants">
        <div className="ParticipantsText">
        <h3><span>04</span> Participants</h3>
        <p>Lorem Ipsum Dolor Sit Amet</p>
      <div className="partipipantDiv">
      <div className="searchSvg">
            <BiSearch/>
        </div>
      <form action="/action_page.php">
         <input type="text" id="fname" name="firstname" placeholder="Search Participants"/>

        </form>
       
      </div>
        </div>
        <div className="closeSvg">
        <GrClose/>
        </div>
    </div>
    <hr className='lineHR' />

   <div className="participantsLists">
   <div className="participantsTile">
        <img src={hostImg} alt="" className='firstParticipant'/>
        <div className="hostInfo">
            <p>M. Wajahat (You)</p>
            <span>Host</span>
        </div>
        <div className="hostActions">
            <span className='cross'>
                <GrClose/>
            </span>
            <span className='threeDots'>
                <BsThreeDotsVertical/>
            </span>
        </div>
        
    </div>
    <hr className='lineHR' />
    <div className="participantsTile">
        <img src={hostImg} alt="" className='firstParticipant'/>
        <div className="hostInfo">
            <p>M. Wajahat (You)</p>
            <span>Host</span>
        </div>
        <div className="hostActions">
            <span className='cross'>
                <GrClose/>
            </span>
            <span className='threeDots'>
                <BsThreeDotsVertical/>
            </span>
        </div>
        
    </div>
    <hr className='lineHR' />

    <div className="participantsTile">
        <img src={hostImg} alt="" className='firstParticipant'/>
        <div className="hostInfo">
            <p>M. Wajahat (You)</p>
            <span>Host</span>
        </div>
        <div className="hostActions">
            <span className='cross'>
                <GrClose/>
            </span>
            <span className='threeDots'>
                <BsThreeDotsVertical/>
            </span>
        </div>
        
    </div>
    <hr className='lineHR' />

    <div className="participantsTile">
        <img src={hostImg} alt="" className='firstParticipant'/>
        <div className="hostInfo">
            <p>M. Wajahat (You)</p>
            <span>Host</span>
        </div>
        <div className="hostActions">
            <span className='cross'>
                <GrClose/>
            </span>
            <span className='threeDots'>
                <BsThreeDotsVertical/>
            </span>
        </div>
        
    </div>
    <hr className='lineHR' />

    <div className="participantsTile">
        <img src={hostImg} alt="" className='firstParticipant'/>
        <div className="hostInfo">
            <p>M. Wajahat (You)</p>
            <span>Host</span>
        </div>
        <div className="hostActions">
            <span className='cross'>
                <GrClose/>
            </span>
            <span className='threeDots'>
                <BsThreeDotsVertical/>
            </span>
        </div>
        
    </div>
    <hr className='lineHR' />
    <div className="participantsTile">
        <img src={hostImg} alt="" className='firstParticipant'/>
        <div className="hostInfo">
            <p>M. Wajahat (You)</p>
            <span>Host</span>
        </div>
        <div className="hostActions">
            <span className='cross'>
                <GrClose/>
            </span>
            <span className='threeDots'>
                <BsThreeDotsVertical/>
            </span>
        </div>
        
    </div>
    <hr className='lineHR' />
    <div className="participantsTile">
        <img src={hostImg} alt="" className='firstParticipant'/>
        <div className="hostInfo">
            <p>M. Wajahat (You)</p>
            <span>Host</span>
        </div>
        <div className="hostActions">
            <span className='cross'>
                <GrClose/>
            </span>
            <span className='threeDots'>
                <BsThreeDotsVertical/>
            </span>
        </div>
        
    </div>
    <hr className='lineHR' />
   </div>
   <hr className='messageHR' />
   <button>INVITE PEOPLE</button>
        </div>
        }
        {
            showInvite &&  <div className="shareMeeting">
            <div className="heading">
            <div className="onleft">
            <h4>Share Meeting / Invite People</h4>
            <p>Share this meeting link with others you want in the meeting</p>
            </div>
            <div className="onright">
            <GrClose/>
            </div>
            </div>
            <hr className='hr-line'/>
            <div className="copyLink">
             <form action="">
                 <input type="text" placeholder='Code' />
                 <button>COPY CODE</button>
             </form>
            </div>
            <hr class="hr-text" data-content="OR" className='or-hr'/>
            <div className="invite-email">
             <p>Or invite using their <span>Email Address</span> instead.</p>
             <form action="">
                 <input type="text" placeholder='Invite' />
                 <button>INVITE</button>
             </form>
            </div>
            <hr className='hr-line'/>
            <div className="lastText">
            <p>People who use this meeting link must get your permission before 
             joining in.</p>
            </div>
         </div>
        }


      </div>


      </>
  )
}
