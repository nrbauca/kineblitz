import React from 'react'
import { Link } from 'react-router-dom'
import Rectangle1 from '../Images/Rectangle 1.png'

export default function NavigationBar() {
  return (
    <div>
      <header className="font-['Outfit']">
        <nav className="absolute z-50 top-0 w-full flex justify-between pl-20 py-6 bg-[#1d3578] text-white">
          <div className="flex items-center">
            <img src={Rectangle1} alt="pentabyte logo" className="w-[43px] h-[38px]" />
            <Link className="text-2xl font-semibold" to="/home">PENTABYTE</Link>
          </div>
          <div className="flex gap-16 items-center pr-20">
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
