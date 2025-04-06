import React from 'react'
import './components.css'
import { NavLink } from "react-router-dom";
let Ncolor="#191A23"
function Navigation() {
  return (
    <div className=" ">
        <div className={`inline-block ml-[100px] gap-[10px]`} to="/">
          <img src="/logo.png" alt="Logo" className="h-[36px] w-[219.54px]  inline" />
          {/* <span className='text-4xl pt-[3px]'>Positivius</span> */}
          </div>
      <ul className="nav font-positivus text-navyBluedark inline-block   p-4 text-xl font-normal ml-[200px] gap-[40px]">
        
        <li className='inline-block ml-[40px] '>
          <NavLink className={``} to="/">Home</NavLink>
        </li>
        <li className='inline-block ml-[40px]'>
          <NavLink to="/about">
            About us
          </NavLink>
        </li>
        <li className='inline-block ml-[40px]' >
          <NavLink to="/projects">
            Service
          </NavLink>
        </li>
        <li className='inline-block ml-[40px]'>
          <NavLink to="/blogs">
            Usecases
          </NavLink>
        </li>
        <li className='inline-block ml-[40px]'>
          <NavLink to="/contact">
            Pricing
          </NavLink>
        </li>
        <li className='inline-block ml-[40px]'>
          <NavLink to="/contact">
            Blog
          </NavLink>
        </li>
        <li className='inline-block ml-[40px] '>
          <button className={`border-2 py-[20px] px-[35px] rounded-[14px] border-[${Ncolor}] `}>
            Request a quote
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Navigation;