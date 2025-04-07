import React from 'react';

function BrandLogo() {
  return (
    <div className="w-full py-10 px-4 sm:px-[50px] md:px-[100px] flex flex-wrap justify-center sm:justify-between items-center gap-y-6 gap-x-10">
      <img
        src="/Amezon.png"
        alt="Amazon"
        className="h-12 w-[124px] mix-blend-luminosity"
      />
      <img
        src="/dribble.png"
        alt="Dribbble"
        className="h-12 w-[124px] mix-blend-luminosity"
      />
      <img
        src="/Hubspot.png"
        alt="Hubspot"
        className="h-12 w-[124px] mix-blend-luminosity"
      />
      <img
        src="/Notion.png"
        alt="Notion"
        className="h-12 w-[124px] mix-blend-luminosity"
      />
      <img
        src="/Netflix.png"
        alt="Netflix"
        className="h-12 w-[124px] mix-blend-luminosity"
      />
      <img
        src="/zoom.png"
        alt="Zoom"
        className="h-12 w-[124px] mix-blend-luminosity"
      />
    </div>
  );
}

export default BrandLogo;
