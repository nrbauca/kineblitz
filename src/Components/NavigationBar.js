import React from 'react'
import { Link } from 'react-router-dom'

export default function NavigationBar() {
  return (
    <div>
      <header>
        <nav className="absolute z-50 top-0 w-full flex justify-between pl-20 py-6 bg-[#1d3578] text-white">
          <Link className="text-2xl font-semibold" to="/home">PENTABYTE</Link>
          <div className="flex gap-16 items-center pr-20">
            <Link to="/kineblitz"><button className="text-base">KINEBLITZ</button></Link>
            <Link to="/aboutus"><button className="text-base">ABOUT US</button></Link>
            <Link to="/login"><button className="text-base">LOG IN</button></Link>
          </div>
        </nav>
      </header>
    </div>
  )
}
