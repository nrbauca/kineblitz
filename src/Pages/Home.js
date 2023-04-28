import React from 'react';
import { Link } from 'react-router-dom';
import kineblitzlogo from '../Images/KINEBLITZ_Logo.png';
import homepage from '../Images/homepage.png';

export default function Home() {
  return (
    <div>
      
      <img src={homepage} alt="home background" className="fixed top-[20px] w-[1550px] h-full bg-cover blur-[0px]" />
      <main className="home">
        <section className="home-container">
          <div className="home-headline">
            <p className="home-subtitle">TRACKING PROGRESS, IMPROVING LIVES</p>
            <h1 className="home-title">KINEBLITZ</h1>
            <p className="home-description">Assisting physicians and patients through a centralized system 
              for patient tracking and incorporating surface Electromyography (sEMG)
              technology to enhance therapy and habilitation of Cerebral Palsy patients 
              through a biofeedback game and data-driven insights.</p>
  
              <Link to="/login"><button className="gen-button">LOG IN</button></Link>
  
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
                Lorem ipsum dolor sit amet consectetur. 
                Cras rhoncus interdum aliquam turpis ac imperdiet et. 
                Dapibus metus aliquam velit in amet quam egestas augue. 
                Habitant iaculis blandit faucibus nibh lobortis rutrum massa.
              </p>
            </div>
          </div>
          <div className="feature-2 row">
            <div className="feature-details column">
              <h3 className="right">lorem ipsum</h3>
              <p className="detail2 right">
                Lorem ipsum dolor sit amet consectetur. 
                Cras rhoncus interdum aliquam turpis ac imperdiet et. 
                Dapibus metus aliquam velit in amet quam egestas augue. 
                Habitant iaculis blandit faucibus nibh lobortis rutrum massa.
              </p>
            </div>
            <img src alt="" className="feature2-img" />
          </div>
        </section>
      </main>
    </div>
    );
}
