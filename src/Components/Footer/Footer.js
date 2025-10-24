import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section >
        <div className="paddings innerWidth ">

            <div className="flexColStart f-center">
                <img src="./logo.jpg" alt="Logo" width={120}/>
                <span className="secondaryText f-center ">
                    Our Vision is to providing you the best properties

                </span>
                <span className="secondaryText f-center ">
                    &copy; 2025 DreamDwell 

                </span>
            </div>
           
        </div>
    </section>
  )
}

export default Footer;
