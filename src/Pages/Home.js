import React from 'react';
import { Link } from 'react-router-dom';
import kineblitzlogo from '../Images/KINEBLITZ_Logo.png';
import homepage from '../Images/Homepage.png';
import objective from '../Images/objective.png';
import significance from '../Images/significance.png';

export default function Home() {
  return (
    <div>
      <img src={homepage} alt="home background" className="fixed top-[20px] w-[1550px] h-full bg-cover" />
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
                <button className="headline-button droplog-button gen-button">LOGIN</button>
                <div className="droplog-content hidden absolute bg-[#051F6A] bg-opacity-50 rounded-md w-[220px] text-white">
                  <button className="w-[220px]"><Link to="/userdashboard" className="py-2 block">As Patient</Link></button>
                  <button className="w-[220px]"><Link to="/dashboard" className="py-2 block">As Physician</Link></button>
                </div>
              </div>

          </div>
          <div className="home-logo">
            <Link to="/kineblitz"><button><img src={kineblitzlogo} alt="" /></button></Link>
          </div>
        </section>
        <section className="feature-container">
          <div className="feature-1 row">
            <img src={objective} alt="objective" className="feature1-img" />
            <div className="feature-details column">
              <h3>OBJECTIVE</h3>
              <p className="detail1">
              Develop a low-cost microcontroller-based system that performs surface electromyography (EMG) 
              functions by measuring the voltage amplitude of muscle activation via the electric potential 
              of the upper body, and include a biofeedback-driven game that takes into consideration the 
              circumstances present in children with spastic cerebral palsy.  
              </p>
            </div>
          </div>
          <div className="feature-2 row">
            <div className="feature-details column">
              <h3 className="right"></h3>
              <p className="detail2 right">
              The project can also be used to improve the patient's retention and motivation during the first 
              phase of habilitation, and it can be incorporated in physical therapy exercise programs to improve 
              the patient's "follow-through" in their habilitation. The outcome of this project may help particular 
              groups, including the community, pediatric patients with cerebral palsy, rehabilitation centers, 
              government and non-government health organizations, and future researchers.
              </p>
            </div>
            <img src={significance} alt="significance" className="feature2-img" />
          </div>
        </section>
      </main>
    </div>
    );
}
