import React from 'react';
import plm from '../Images/PLMBackground.png';
import plmlogo from '../Images/PLM_Logo.png';
import pentabytelogo2 from '../Images/Pentabyte_Logo2.png';
import bauca from '../Images/bauca.jpeg';
import francisco from '../Images/francisco.jpg';
import nacario from '../Images/nacario.jpg';
import omura from '../Images/omura.jpg';
import ramos from '../Images/ramos.jpg';

export default function AboutUs() {
  return (
    <div>
      <img src={plm} alt="plm background" className="fixed top-[20px] w-[1550px] h-full bg-cover" />
      <main>
        <div className="au container">
          <h1>ABOUT US</h1>
          <div className="plm row">
            <img src={plmlogo} alt="PLM Logo" className="object-scale-down" />
            <div className="plm-details">
              <p className="plm-title">PAMANTASAN NG LUNGSOD NG MAYNILA</p>
              <p className="plm-description">
                Pamantasan ng Lungsod ng Maynila (PLM) is the first and only chartered 
                and autonomous university funded by a city government. It was created 
                by the Congress of the Philippines by virtue of Republic Act No. 4196 
                or “An Act Authorizing the City of Manila to Establish and Operate the
                University of City of Manila” on June 19, 1965. PLM is the first local 
                government-funded tertiary institution that offered tuition-free 
                education. PLM also carries the distinction of being the first tertiary 
                institution to have a Filipino official name, which is why people use 
                “Pamantasan” to refer to PLM. The word “pamantasan” was derived from the 
                Filipino term “pantas” or wise person. The university stands on historic 
                grounds.
              </p>
            </div>
          </div>
          <div className="penta row">
            <div className="penta-details">
              <p className="penta-title right">PENTABYTE</p>
              <p className="penta-description right">
                Pentabyte is a scholastic group, composed of five fourth-year college 
                students of block two from the Computer Engineering department of the 
                Pamantasan ng Lungsod ng Maynila. Devoted to providing high-quality services 
                and products for clients, the team is committed to create solutions that 
                aim to provide useful means to their target market.
              </p>
            </div>
            <img src={pentabytelogo2} alt="Pentabyte Logo" className="object-scale-down" />
          </div>
        </div>
        <div className="theTeam column">
          <div className="theTeam-container column">
            <h1>THE TEAM</h1>
            <div className="member-container row">
              <div className="member gen-button column">
                <img src={bauca} alt="Nathalie" />
                <p className="member-name">NATHALIE<br/>BAUCA</p>
                <p className="member-pos">PROJECT MANAGER</p>
                <p className="member-des">She is responsible for planning, 
                  organizing, and directing the project. 
                  She handles the repository.</p>
              </div>
              <div className="member gen-button column">
                <img src={francisco} alt="Mark" />
                <p className="member-name">MARK<br/>FRANCISCO</p>
                <p className="member-pos">PROJECT ANALYST</p>
                <p className="member-des">He oversees defining and developing 
                  the contents needed for the project and raise solutions.</p>
              </div>
              <div className="member gen-button column">
                <img src={nacario} alt="Jella" />
                <p className="member-name">JELLA<br/>NACARIO</p>
                <p className="member-pos">PROJECT COORDINATOR</p>
                <p className="member-des">She manages the deliverables according to 
                  the decided plan and establishes the project schedule.</p>
              </div>
              <div className="member gen-button column">
                <img src={omura} alt="Nozomi" />
                <p className="member-name">NOZOMI<br/>OMURA</p>
                <p className="member-pos">PROJECT SPONSOR</p>
                <p className="member-des">She ensures the availability of resources for 
                  the team and helps in communicating the project's goals.</p>
              </div>
              <div className="member gen-button column">
                <img src={ramos} alt="Ralph" />
                <p className="member-name">RALPH<br />RAMOS</p>
                <p className="member-pos">PROJECT SPONSOR</p>
                <p className="member-des">He works closely with the Project Manager in
                  making key business decisions and in the approval of the 
                  project budget.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
