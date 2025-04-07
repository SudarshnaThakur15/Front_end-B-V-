import React from 'react'
import ConsultationCard from './ConstulCard'
import ResearchCard from './ResearchCard'

function ProcessBlock() {
  return (
    <div className='px-[100px] pt-[100px] w-full max-w-[1440px] gap-4 md: justify-between'>
    <ConsultationCard/>
    <ResearchCard/>
    </div>
  )
}

export default ProcessBlock