import React from 'react';

export default function Kineblitz() {
  return (
    <main>
        <div className="kineblitz container">
          <h1>KINEBLITZ</h1>
          <div className="kine row">
            <div className="kineblitz-details">
              <p className="kineblitz-title right">LOREM IPSUM</p>
              <p className="kineblitz-description right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                otam, facilis hic alias consequatur amet et optio sed 
                consequuntur quis nihil? Repudiandae amet quisquam eos error 
                magni rem sapiente perspiciatis maxime.
              </p>
            </div>
            <img src alt="device pics???" />
          </div>
        </div>
        <div className="how-it-works column">
        <div className="how-it-works-container column">
          {/* PATIENT */}
          <h1>PATIENT PROCESS</h1>
          <div className="process-container row">
            <div className="patient-process gen-button">
              <img src alt="" />
              <p className="process-name">REGISTER TO WEBAPP</p>
              <p className="process-des">Process information</p>
            </div>
            <div className="patient-process gen-button">
              <img src alt="" />
              <p className="process-name">TESTING PHASE</p>
              <p className="process-des">Process information</p>
            </div>
            <div className="patient-process gen-button">
              <img src alt="" />
              <p className="process-name">ACCESS ACCOUNT</p>
              <p className="process-des">Process information</p>
            </div>
          </div>
        </div>
        <div className="how-it-works-container column">
          {/* PROFESSIONAL */}
          <h1>PROFESSIONAL PROCESS</h1>
          <div className="process-container row">
            <div className="professional-process gen-button">
              <img src alt="" />
              <p className="process-name">PROFESSIONAL ACCOUNT</p>
              <p className="process-des">Process information</p>
            </div>
            <div className="professional-process gen-button">
              <img src alt="" />
              <p className="process-name">SELECT PATIENT RECORD</p>
              <p className="process-des">Process information</p>
            </div>
            <div className="professional-process gen-button">
              <img src alt="" />
              <p className="process-name">EVALUATE RECORD</p>
              <p className="process-des">Process information</p>
            </div>
          </div>
        </div>
      </div>
      </main>
  )
}
