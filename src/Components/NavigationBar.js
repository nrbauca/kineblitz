import React from 'react'
import { Link } from 'react-router-dom'
import pentabytelogo from '../Images/Pentabyte_Logo.png'

export default function NavigationBar() {
  return (
    <div>
      <header className="font-['Outfit']">
        <nav className="absolute z-50 top-0 w-full lg:flex lg:justify-between text-white pl-9 sm:pl-14 lg:h-[80px] bg-[#051F6A]">
          <div className="flex items-center">
            <img src={pentabytelogo} alt="pentabyte logo" className="w-[65px] h-[60px]" />
            <Link className="text-3xl font-semibold" to="/home">PENTABYTE</Link>
          </div>
          <div className="sm:flex sm:gap-6 items-center pr-14 text-xs md:text-base">
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
