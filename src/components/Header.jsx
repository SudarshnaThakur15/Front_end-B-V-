import React from 'react'

function Header() {
  return (
    <div className="px-[100px] py[100px] justify-between ">
          <div className={`ml-[100px] gap-[10px] inline-block h-[481px] w-[482px] h-[515px]  `} to="/">
          <h1 className=' font-medium text-6xl/[100%] mt-[35px]'>Navigating the digital landscape for success</h1>
          <p className='  text-2xl/[28px] font-normal text-[#191A23] mt-[35px]'>
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <button className={`border-2   rounded-[14px] px-[35px] py-[20px] bg-[#191A23] gap-[10px] text-white text-2xl/[28px] font-normal border-[#191A23] mt-[35px]`}>
           Book a consultation
          </button>
          </div>
          <div className={` gap-[10px] inline-block h-[515px] w-[600.4620971679688px]  ml-[100px] gap-[70px]   `} to="/">
          {
             <img src="/Illustration.png" alt="Logo" className=" h-[385px] w-[446.4626159667969px]  mt-[100px] " /> 
          }

          </div>
    </div>
  )
}

export default Header