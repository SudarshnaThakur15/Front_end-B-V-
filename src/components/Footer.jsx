import React from 'react';
import Navigation from './Navigation.jsx';

function Footer() {
  return (
    <footer className="mt-[100px] mx-4 sm:mx-[50px] md:mx-[100px] bg-[#191A23] text-white px-4 sm:px-8 md:px-16 py-12 rounded-t-[30px] md:rounded-t-[45px]">
      <div className="mb-8 flex justify-center sm:justify-start">
        <Navigation place="footer" />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-white text-center md:text-left">
        <div className="space-y-4 md:w-1/2">
          <span className="inline-block bg-[#B9FF66] text-black px-3 py-1 rounded-md text-[18px] md:text-[20px] font-semibold">
            Contact us:
          </span>
          <p>Email: <a href="mailto:info@positivus.com" className="hover:underline">info@positivus.com</a></p>
          <p>Phone: 555-567-8901</p>
          <p>
            Address: 1234 Main St<br />
            Moonstone City, Stardust State 12345
          </p>
        </div>

        <div className="bg-[#292A32] py-8 px-6 rounded-xl flex flex-col sm:flex-row items-center gap-4 w-full md:w-1/2">
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border border-white rounded-md px-4 py-3 text-white w-full sm:w-[285px] h-[67px] placeholder:text-white text-center sm:text-left"
          />
          <button className="bg-[#B9FF66] text-black px-6 py-3 rounded-md font-semibold w-full sm:w-[249px] h-[68px]">
            Subscribe to news
          </button>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center text-[16px] md:text-[18px] text-gray-400 gap-2 mt-[30px] text-center sm:text-left">
        <span>© 2023 Positivus. All Rights Reserved.</span>
        <a href="/privacy-policy" className="sm:ml-[50px] underline">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
