import React from 'react';
import "./Extra.css";
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from 'react-countup';
import {motion} from 'framer-motion';

function Extra() {
  return (
    <section className="extra-wrapper">
        
        <div className="padding innerWidth flexCenter extra-container">
        <div className="flexColStart extra-left">
           <div className="extra-title">
                <motion.h1 
                initial={{y:"2rem",opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{
                    duration:4,
                    type:"ease-in"
                }}
                 >
                    The Perfect  <br/> Property <br/>Awaits on Dream Dwell!</motion.h1>
            </div>

            <div className="flexColStart extra-des">
                <span className='secondaryText'>Explore Beautiful Properties Designed to Suit Your Needs</span>
                <span className='secondaryText'>Effortlessly Discover Your Perfect Home!</span>
            </div>

            <div className="flexCenter search-bar">
                <HiLocationMarker color="#9400D3" size={25}>
                </HiLocationMarker>
                <input type="text" />
                <button className="button">Search</button>
            </div>

            <div className="flexCenter stats">
                <div className="flexColCenter stat">
                    <span>
                        <CountUp start={6500} end={7000} duration={4}/>
                        <span>+</span>
                    </span>
                    <span className='secondaryText'>
                        Premium Properties
                    </span>
                    
                </div>

                <div className="flexColCenter stat">
                    <span>
                        <CountUp start={300} end={575} duration={4}/>
                        <span>+</span>
                    </span>
                    <span className='secondaryText'>
                        Happy Customers
                    </span>
                    
                </div>

                <div className="flexColCenter stat">
                    <span>
                        <CountUp start={5} end={10} duration={4}/>
                        <span>+</span>
                    </span>
                    <span className='secondaryText'>
                        Award Winning
                    </span>
                    
                </div>
            </div>
        </div>
        <div className="flexCenter extra-right">
        <motion.div 
        initial={{x:"7rem",opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{
            duration:4,
            type:"ease-in"
        }}
        className="image-container">
                <img src="./buildings.png" alt="main-image" />
            </motion.div>
        </div>
            
        </div>
    </section>
  )
}

export default Extra;
