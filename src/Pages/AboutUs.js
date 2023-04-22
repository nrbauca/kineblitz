import React from 'react';

export default function AboutUs() {
  return (
    <div>'
        <main>
        <div className="au container">
          <h1>ABOUT US</h1>
          <div className="plm row">
            <img src alt="PLM Logo" />
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
            <img src alt="Pentabyte Logo" />
          </div>
        </div>
        <div className="theTeam column">
          <div className="theTeam-container column">
            <h1>THE TEAM</h1>
            <div className="member-container row">
              <div className="member gen-button">
                <img src alt="" />
                <p>Name</p>
                <p>Position</p>
              </div>
              <div className="member gen-button">
                <img src alt="" />
                <p>Name</p>
                <p>Position</p>
              </div>
              <div className="member gen-button">
                <img src alt="" />
                <p>Name</p>
                <p>Position</p>
              </div>
              <div className="member gen-button">
                <img src alt="" />
                <p>Name</p>
                <p>Position</p>
              </div>
              <div className="member gen-button">
                <img src alt="" />
                <p>Name</p>
                <p>Position</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
