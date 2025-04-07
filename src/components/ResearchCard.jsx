const ResearchCard = () => {
    return (
      <div className="mt-[30px] w-[1234px] h-auto rounded-[45px] border border-[#191A23] bg-[#F3f3f3] px-[60px] py-[41px] flex flex-col gap-[30px] border-[#191A23] shadow-[0px_5px_0px_#191A23]">
         <div className="flex justify-between items-start">
          <div className="flex items-center gap-6">
            <span className="text-[60px] font-bold">02</span>
            <h2 className="text-[28px] font-semibold">Research and Strategy Development</h2>
          </div>
          <button className="w-[44px] h-[44px] flex items-center justify-center rounded-full border border-[#191A23] bg-[#F3F3F3] text-[32px] font-light">+</button>
        </div>
      </div>
    );
  };
  
  export default ResearchCard;
  