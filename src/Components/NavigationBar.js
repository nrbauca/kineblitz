import React from 'react'
import { Link } from 'react-router-dom'
import pentabytelogo from '../Images/Pentabyte_Logo.png'

export default function NavigationBar() {
  return (
    <div>
      <header className="font-['Outfit']">
        <nav className="absolute z-50 top-0 w-full justify-between text-white pl-14 bg-[#051F6A] lg:flex lg:h-[80px]">
          <div className="flex items-center">
            <img src={pentabytelogo} alt="pentabyte logo" className="w-[65px] h-[60px]" />
            <Link className="text-3xl font-semibold" to="/home">PENTABYTE</Link>
          </div>
          <div className="items-center text-xs sm:pr-14 sm:text-base sm:flex md:gap-6">
            <Link to="/kineblitz"><button className="pr-6 py-1">KINEBLITZ</button></Link>
            <Link to="/aboutus"><button className="pr-6 py-1">ABOUT US</button></Link>
            <Link to="/login"><button className="pr-6 py-1">LOG IN</button></Link>
            <Link to="/dashboard"><button className="pr-6 py-1">Dashboard (Temp)</button></Link>
            <Link to="/userdashboard"><button className="pr-6 py-1">UserDashboard (Temp)</button></Link>
            <Link to="/record"><button>Record (Temp)</button></Link>
          </div>
        </nav>
      </header>
    </div>
  )
}
