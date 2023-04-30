import React from 'react'
import { Link } from 'react-router-dom'
import pentabytelogo from '../Images/Pentabyte_Logo.png'
import kineblitzlogout from '../Images/Kineblitz_Logout.png'
import { logout } from '../FirebaseSetup/firebase';
import arrow from '../Images/Arrow.png'

export default function NavigationBar() {
  return (
    <div>
      <header>
        <nav className="absolute z-50 top-0 w-full lg:flex lg:justify-between text-white pl-9 sm:pl-14 lg:h-[75px] bg-[#051F6A]">
          
          <div className="flex items-center">
            <Link to="/home"><button><img src={pentabytelogo} alt="pentabyte logo" className="w-[65px] h-[60px]" /></button></Link>
            <p className="text-3xl font-semibold">PENTABYTE</p>
          </div>

          <div className="sm:flex sm:gap-6 items-center pr-14 text-xs md:text-base">
            <Link to="/kineblitz"><button className="pr-6 py-1 hover:underline">KINEBLITZ</button></Link>
            <Link to="/aboutus"><button className="pr-6 py-1 hover:underline">ABOUT US</button></Link>
            <Link to="/userdashboard"><button className="pr-6 py-1 hover:underline">DASHBOARD</button></Link>
            {/* <Link to="/dashboard"><button className="w-[45px] md:w-[55px] pr-6 py-1"><img src={kineblitzlock} alt="lock logo" /></button></Link> */}
            <div className="dropdown relative inline-block">
              <button className="drop-button rounded-md border-2 border-[#eab150] px-1 sm:px-4 py-1 sm:py-2">
                <div className="flex gap-2 items-center">
                  <h5>LOGIN AS</h5>
                  <img src={arrow} alt="arrow" className="w-[13px]" />
                </div>
              </button>
              <div className="dropdown-content hidden absolute bg-white bg-opacity-80 rounded-md w-[128px] text-[#2F2F2F]">
                <button className="w-[128px]"><Link to="/userdashboard" className="py-2 block">Patient</Link></button>
                <button className="w-[128px]"><Link to="/dashboard" className="py-2 block">Physician</Link></button>
              </div>
            </div>
            <button onClick={logout} className="w-[45px] md:w-[55px] pr-6 py-1"><img src={kineblitzlogout} alt="logout logo" /></button>
          </div>

        </nav>
      </header>
    </div>
  )
}
