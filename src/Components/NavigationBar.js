import React from 'react'
import { Link } from 'react-router-dom'
import pentabytelogo from '../Images/Pentabyte_Logo.png'

export default function NavigationBar() {
  return (
    <div>
      <header className="font-['Outfit']">
        <nav className="absolute z-50 top-0 flex h-[80px] w-full justify-between text-white pl-14 bg-[#051F6A]">
          <div className="flex items-center">
            <img src={pentabytelogo} alt="pentabyte logo" className="w-[65px] h-[60px]" />
            <Link className="text-3xl font-semibold" to="/home">PENTABYTE</Link>
          </div>
          <div className="flex gap-6 items-center pr-14">
            <Link to="/kineblitz"><button className="text-base">KINEBLITZ</button></Link>
            <Link to="/aboutus"><button className="text-base">ABOUT US</button></Link>
            <Link to="/login"><button className="text-base">LOG IN</button></Link>
            <Link to="/dashboard"><button className="text-base">Dashboard (Temp)</button></Link>
            <Link to="/userdashboard"><button className="text-base">UserDashboard (Temp)</button></Link>
            <Link to="/record"><button className="text-base">Record (Temp)</button></Link>
          </div>
        </nav>
      </header>
    </div>
  )
}
