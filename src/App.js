import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Extra from './Components/Extra/Extra';
import Companies from './Components/Companies/Companies';
import Residencies from './Components/Residencies/Residencies';
import Value from './Components/Value/Value';
import Contact from './Components/Contact/Contact';
import GetStarted from './Components/GetStarted/GetStarted';
import Footer from './Components/Footer/Footer';
import DetailsPage from './Components/DetailsPage/DetailsPage.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for the main page */}
          <Route
            path="/"
            element={
              <>
                <div>
                  <Header />
                  <Extra />
                </div>
                <Companies />
                <div id="residencies">
                  <Residencies />
                </div>
                <div id="value">
                  <Value />
                </div>
                <div id="contact">
                  <Contact />
                </div>
                <div id="getStarted">
                  <GetStarted />
                </div>
                <Footer />
              </>
            }
          />
          
          {/* Route for the details page */}
          <Route path="/details/:key" element={<DetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;