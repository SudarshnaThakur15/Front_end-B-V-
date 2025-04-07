import React from 'react'
import './components.css'

function HeadingAndSubheading(prop) {
  return (
    <div className="px-[100px] pt-[100px] rounded-[7px] gap-[40px] responsiveHeadingContainer">
      <h1 className="text-[40px]/[100%] font-medium text-navyBluedark inline-block bg-lightlime-200 px-[7px] py-[7px] rounded-[7px] gap-10px responsiveHeading">
        {prop.heading}
      </h1>

      <p
        className="ml-[40px] text-navyBluedark text-[18px]/[100%] font-[400] inline-block responsiveSubheading"
        style={{ width: prop.width }}
      >
        {console.log(prop.width)}
        {prop.subheading}
      </p>
    </div>
  )
}

export default HeadingAndSubheading
