import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';
import { BsFillChatDotsFill } from 'react-icons/bs';


const Contact = () => {
  return (
   <section className="c-wrapper">
    <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="c-left flexColStart">
            <span className='orangeText'>Our Contacts</span>
            <span className='primaryText'>Easy to Contact us</span>
            <span className='secondaryText'>We make it easy to get in touch with us, ensuring prompt and helpful responses to all your inquiries</span>
            <div className="flexColStart contactModes">
              {/* First row */}
              <div className="flexColStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdCall size={25}/>
                    </div>
                    <div className="flexColStart detail">
                      <span className='primaryText'>Call</span>
                      <span className='seconaryText'>8277002313</span>
                    </div>
                  </div>

                  <div className="flexCenter button">Call Now</div>
                </div>
                
                
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25}/>
                    </div>
                    <div className="flexColStart detail">
                      <span className='primaryText'>Chat</span>
                      <span className='seconaryText'>8277002313</span>
                    </div>
                  </div>

                  <div className="flexCenter button">Chat Now</div>
                </div>
                

                {/* Second row */}
                
                <div className="flexStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25}/>
                    </div>
                    <div className="flexColStart detail">
                      <span className='primaryText'>Video Call</span>
                      <span className='seconaryText'>8277002313</span>
                    </div>
                  </div>

                  <div className="flexCenter button">Video Call Now</div>
                </div>
                </div>

                
                <div className="flexColCenter mode">
                  
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <HiChatBubbleBottomCenter size={25}/>
                    </div>
                    <div className="flexColStart detail">
                      <span className='primaryText'>Message</span>
                      <span className='seconaryText'>8277002313</span>
                    </div>
                  </div>

                  <div className="flexCenter button">Message Now</div>
                </div>
                

              </div>
            </div>
        </div>
        {/* right side */}
        <div className="c-right">
            <div className="image-container">
              <img src="./main4.jpg" alt="" />
            </div>
        </div>
    </div>
   </section>
  )
}

export default Contact
