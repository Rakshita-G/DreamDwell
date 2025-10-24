import React, { useState } from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler';
import {Link} from 'react-scroll'

function Header() {

  const[menuOpened,setMenuOpened]=useState(false);

  const handleScroll=(id)=>{
    const section = document.getElementById(id);
    if(section){
      section.scrollIntoView({behavior:'smooth'})
    }
  };

  const getMenuStyles=(menuOpened)=>{
    if(document.documentElement.clientWidth <= 800){
      return{right: !menuOpened && "-100%"}
    }
  }

  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">

            <img className='logo' src=".\logo.jpg" alt="logo" width={100} />

            <OutsideClickHandler
            onOutsideClick={()=>{
              setMenuOpened(false);
            }}>
            <div className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
            >

                <Link to="/residencies" onClick={()=> handleScroll('residencies')}>Residencies </Link>
                <Link to="/value" onClick={()=> handleScroll('value')}>Our Value </Link>
                <Link to="/contact" onClick={()=> handleScroll('contact')}>Contact Us </Link>
                <Link to="/getStarted" onClick={()=> handleScroll('getStarted')}>Get Started </Link>
                <button className='button'>
                 <a href="mailto:hariraaj786@gmail.com">Contact</a>
                  </button>
                
            </div>
            </OutsideClickHandler>


            <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
          <BiMenuAltRight size={30}/>
        </div>
        </div>

        
    </section>
  )
}

export default Header
