import React from 'react'
import { Link } from 'react-router-dom'
import pentabytelogo from '../Images/Pentabyte_Logo.png'
import kineblitzhome from '../Images/Kineblitz_Home.png'
import kineblitzlock from '../Images/Kineblitz_Lock.png'
export default function NavigationBar() {
  return (
    <div>
      <header>
        <nav className="absolute z-50 top-0 w-full lg:flex lg:justify-between text-white pl-9 sm:pl-14 lg:h-[75px] bg-[#051F6A]">
          {/* <button> */}
            {/* <Link to="/aboutus"> */}
              <div className="flex items-center">
                <Link to="/home"><button><img src={pentabytelogo} alt="pentabyte logo" className="w-[65px] h-[60px]" /></button></Link>
                <p className="text-3xl font-semibold">PENTABYTE</p>
              </div>
            {/* </Link> */}
          {/* </button> */}

          <div className="sm:flex sm:gap-6 items-center pr-14 text-xs md:text-base">
            <Link to="/kineblitz"><button className="pr-6 py-1">KINEBLITZ</button></Link>
            <Link to="/aboutus"><button className="pr-6 py-1">ABOUT US</button></Link>
            <Link to="/userdashboard"><button className="pr-6 py-1">DASHBOARD</button></Link>
            <Link to="/login"><button className="pr-6 py-1">LOG IN</button></Link>
            <Link to="/dashboard"><button className="w-[45px] md:w-[55px] pr-6 py-1"><img src={kineblitzlock} alt="lock logo" /></button></Link>
          </div>
        </nav>
      </header>
    </div>
  )
}
