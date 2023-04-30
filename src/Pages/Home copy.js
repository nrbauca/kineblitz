import React from 'react';
import { Link } from 'react-router-dom';
import kineblitzlogo from '../Images/KINEBLITZ_Logo.png';
import homepage from '../Images/Homepage.png';

export default function Home() {
  return (
    <div>
      
      <img src={homepage} alt="home background" className="fixed top-[20px] w-[1550px] h-full bg-cover blur-[0px]" />
      <main className="home">
        <section className="home-container">
          <div className="home-headline">
            <h1 className="home-title">KINEBLITZ</h1>
            <p className="home-subtitle">TRACKING PROGRESS, IMPROVING LIVES</p>
            <p className="home-description">
              Assisting physicians and patients through a centralized system for patient 
              tracking and incorporating surface Electromyography (sEMG) technology 
              to enhance therapy and habilitation of Cerebral Palsy patients through a 
              biofeedback game and data-driven insights.</p>
              
              <div className="droplog relative inline-block">
                <Link to="/login"><button className="headline-button droplog-button gen-button">LOG IN</button></Link>
                <div className="droplog-content hidden absolute bg-[#CBD8F8] bg-opacity-80 rounded-md w-[220px] text-[#2F2F2F]">
                  <button className="w-[220px]"><Link to="/userdashboard" className="py-2 block">As Patient</Link></button>
                  <button className="w-[220px]"><Link to="/dashboard" className="py-2 block">As Physician</Link></button>
                </div>
              </div>

              {/* <Link to="/login"><button className="headline-button gen-button">LOG IN</button></Link> */}

          </div>
          <div className="home-logo">
            <Link to="/kineblitz"><button><img src={kineblitzlogo} alt="" /></button></Link>
          </div>
        </section>
        <section className="feature-container">
          <div className="feature-1 row">
            <img src alt="" className="feature1-img" />
            <div className="feature-details column">
              <h3>LOREM IPSUM</h3>
              <p className="detail1">
                One of our goals at Kineblitz is to help physicians through the use of 
                tech, specifically through surface Electromyography (sEMG) monitoring 
                and game-based therapy. By providing tracking and progress monitoring 
                of muscle activity, we aim to enhance the effectiveness of therapy and 
                help patients achieve their goals.
              </p>
            </div>
          </div>
          <div className="feature-2 row">
            <div className="feature-details column">
              <h3 className="right">lorem ipsum</h3>
              <p className="detail2 right">
                We are dedicated to working closely with patients, families, and 
                physicians to provide personalized and effective care that improves 
                patient outcomes.
              </p>
            </div>
            <img src alt="" className="feature2-img" />
          </div>
        </section>
      </main>
    </div>
    );
}
