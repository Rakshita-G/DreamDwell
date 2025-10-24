import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './Residencies.css';
import { useNavigate } from 'react-router-dom';
import data from '../../utils/slider.json';
import { sliderSettings } from '../../utils/common';

const Residencies = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  const handleCardClick = (id) => {
    navigate(`/details/${id}`); // Navigate to the details page with the residency's ID
  };

  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        {/* Header Section */}
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        {/* Swiper Section */}
        <Swiper {...sliderSettings}>
          {/* Custom Slider Buttons */}
          <SliderButtons />
          {/* Dynamic Card Rendering */}
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div
                className="flexColStart r-card"
                onClick={() => handleCardClick(i)} // Add click handler
                style={{ cursor: 'pointer' }} // Indicate it's clickable
              >
                <img src={card.image} alt="Home" />
                
                <span className="primaryText">{card.name}</span>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

// Slider Buttons Component
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};