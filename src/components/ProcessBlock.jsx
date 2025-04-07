import React from 'react';
import ConsultationCard from './ConstulCard';
import ResearchCard from './ResearchCard';

function ProcessBlock() {
  return (
    <div className="w-full max-w-[1440px] px-4 sm:px-[50px] lg:px-[100px] pt-[50px] sm:pt-[80px] lg:pt-[100px] mx-auto flex flex-col items-center gap-8">
      <ConsultationCard />
      <ResearchCard />
    </div>
  );
}

export default ProcessBlock;
