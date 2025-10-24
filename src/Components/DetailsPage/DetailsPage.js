import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import data from '../../utils/slider.json'; // Adjust path if necessary
import './DetailsPage.css'; // Create and style this file if needed

const DetailsPage = () => {
    const { key } = useParams(); // Retrieve the key from the URL
    const { state } = useLocation(); // Retrieve state (if any)
    const residencyKey = key || state?.key; // Use key from URL or state
    
    // Make sure the key is a valid index
    const residency = data[parseInt(residencyKey)]; // Parse key as integer for array indexing
  
    if (!residency) {
      return <div>Residency not found</div>;
    }
  
    return (
      <div className="details-wrapper">
        <h1>{residency.name}</h1>
    
        <img className='resimg' src={`../${residency.image}`} alt={residency.name} />
    
        <p className="details-price">
          <span style={{ color: "orange" }}>&#8377;</span> {residency.price}
        </p>
    
        <p><strong>Location:</strong> {residency.location}</p>
    
        
        
      </div>
    );
    
  };
  

export default DetailsPage;