import React from 'react'
import ServiceCard from './ServiceCard.jsx'

function CardSection() {
  return (
    <div className='w-full max-w-[1440px] flex flex-col items-center justify-center gap-8 px-4 pt-[100px] md:flex-row md:items-start md:justify-between md:px-[100px]'>

      <ServiceCard
        titleLine1="Search engine"
        titleLine2="optimization"
        highlightColor="#b9ff66"
        illustration="illustration2.jpg"
        bg=""
      />
      <ServiceCard
        titleLine1="Pay-per-click "
        titleLine2="advertising"
        highlightColor="#f3f3f3"
        illustration="Illustration3.png"
        bg="#b9ff66"
      />

    </div>
  )
}

export default CardSection
