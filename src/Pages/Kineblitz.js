import React from 'react';
import register from '../Images/register.png';
import testing from '../Images/testing.png';
import access from '../Images/access.png';
import professional from '../Images/professional.png';
import select from '../Images/select-patient.png';
import evaluate from '../Images/evaluate.png';
import KINEBLITZ_Logo2 from '../Images/KINEBLITZ_Logo2.png';

export default function Kineblitz() {
  return (
    <main>
        <div className="kineblitz container">
          <h1>KINEBLITZ</h1>
          <div className="kine row">
            <div className="kineblitz-details">
              <p className="kineblitz-description right">
              “Kineblitz,” a biofeedback game-based habilitation system designed specifically 
              for children that are diagnosed with spastic cerebral palsy for the upper body. 
              The game will be structured in such a way that it employs electromyographic feedback. 
              By initially devising a microcontroller-based device capable of serving as a surface 
              electromyography (EMG) sensor, muscle activity from the surface of the upper area of 
              the body that is above the muscle on the skin shall be recorded and will serve as an 
              input to be utilized to control the game.
              </p>
            </div>
            <img src={KINEBLITZ_Logo2} alt="Kineblitz Logo2" />
          </div>
        </div>
        <div className="how-it-works column">
        <div className="how-it-works-container column">
          {/* PATIENT */}
          <h1>PATIENT PROCESS</h1>
          <div className="process-container row">
            <div className="patient-process gen-button">
              <div className="grid place-items-center">
                <img src={register} alt="register" />
              </div>
              <p className="process-name">REGISTER TO WEBAPP</p>
              {/* <p className="process-des">Process information</p> */}
            </div>
            <div className="patient-process gen-button">
              <div className="grid place-items-center">
                <img src={testing} alt="testing" />
              </div>
              <p className="process-name">TESTING PHASE</p>
              {/* <p className="process-des">Process information</p> */}
            </div>
            <div className="patient-process gen-button">
              <div className="grid place-items-center">
                <img src={access} alt="access" />
              </div>
              <p className="process-name">ACCESS ACCOUNT</p>
              {/* <p className="process-des">Process information</p> */}
            </div>
          </div>
        </div>
        <div className="how-it-works-container column">
          {/* PROFESSIONAL */}
          <h1 className="professional-h1">PROFESSIONAL PROCESS</h1>
          <div className="process-container row">
            <div className="professional-process gen-button">
              <div className="grid place-items-center">
                <img src={professional} alt="professional"/>
              </div>
              <p className="process-name">PROFESSIONAL ACCOUNT</p>
              {/* <p className="process-des">Process information</p> */}
            </div>
            <div className="professional-process gen-button">
              <div className="grid place-items-center">
                <img src={select} alt="select-patient"/>
              </div>
              <p className="process-name">SELECT PATIENT RECORD</p>
              {/* <p className="process-des">Process information</p> */}
            </div>
            <div className="professional-process gen-button">
              <div className="grid place-items-center">
                <img src={evaluate} alt="evaluate"/>
              </div>
              <p className="process-name">EVALUATE RECORD</p>
              {/* <p className="process-des">Process information</p> */}
            </div>
          </div>
        </div>
      </div>
      </main>
  )
}
