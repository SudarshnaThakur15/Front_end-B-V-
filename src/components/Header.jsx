import React from 'react'
import './components.css'

function Header() {
  return (
    <div className="px-[100px] py-[100px] justify-between flex responsiveFlex">
      <div className={`gap-[10px] inline-block h-[481px] w-[482px] h-[515px] flex-col sm:smallHeaderH1`}>
        <h1 className='font-medium text-6xl/[100%] mt-[35px] sm:smallHeaderH1'>
          Navigating the digital landscape for success
        </h1>
        <p className='text-[20px]/[28px] font-normal text-[#191A23] mt-[35px] sm:smallHeaderH1'>
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        <button className='border-2 sm:smallHeaderH1 rounded-[14px] px-[35px] py-[20px] bg-[#191A23] gap-[10px] text-white text-2xl/[28px] font-normal border-[#191A23] mt-[35px]'>
          Book a consultation
        </button>
      </div>

      <div className={`gap-[10px] inline-block h-[515px] w-[600.4620971679688px] ml-[100px] gap-[70px] flex col sm:smallHeaderH1 responsiveImage`}>
        <img src="/Illustration.png" alt="Logo" className="mt-[0px]" />
      </div>
    </div>
  )
}

export default Header
