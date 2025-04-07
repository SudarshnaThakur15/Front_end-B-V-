import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './components.css';

function Navigation({ place }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`w-full px-4 sm:px-[100px] pt-6`}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <img
            src={place === 'header' ? '/logo.png' : '/Logo_footer.png'}
            alt="Logo"
            className={place === 'header' ? 'h-[36px] w-[219.54px]' : 'h-[29px] w-[180px]'}
          />
        </div>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex ${
            place === 'header'
              ? 'font-positivus text-navyBluedark p-4 text-xl font-normal ml-[50px] gap-[30px]'
              : 'font-positivus text-white p-4 text-[18px] font-[400] ml-[50px] gap-[20px] underline'
          } items-center`}
        >
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About us</NavLink></li>
          <li><NavLink to="/projects">Service</NavLink></li>
          <li><NavLink to="/blogs">Usecases</NavLink></li>
          <li><NavLink to="/contact">Pricing</NavLink></li>
          <li><NavLink to="/contact">Blog</NavLink></li>
          {place === 'header' ? (
            <li>
              <button className="border-2 py-[10px] px-[20px] rounded-[14px] border-[#191A23]">
                Request a quote
              </button>
            </li>
          ) : (
            <>
              <li><img src="/LinkedIn.png" alt="LinkedIn" className="h-[30px] w-[30px]" /></li>
              <li><img src="/facebook.png" alt="Facebook" className="h-[30px] w-[30px]" /></li>
              <li><img src="/X.png" alt="X" className="h-[30px] w-[30px]" /></li>
            </>
          )}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button className="text-3xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden fixed top-0 right-0 bg-white h-screen w-[75%] shadow-lg p-6 z-50 flex flex-col space-y-6 text-black font-medium">
          <button className="text-3xl absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
            ✕
          </button>
          <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About us</NavLink></li>
          <li><NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>Service</NavLink></li>
          <li><NavLink to="/blogs" onClick={() => setIsMenuOpen(false)}>Usecases</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Pricing</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Blog</NavLink></li>
          <li>
            <button className="mt-4 border-2 py-2 px-4 rounded-[10px] border-black">
              Request a quote
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

Navigation.propTypes = {
  place: PropTypes.string.isRequired,
};

export default Navigation;
