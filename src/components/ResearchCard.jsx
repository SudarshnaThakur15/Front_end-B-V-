const ResearchCard = () => {
  return (
    <div className="mt-[30px] w-full max-w-[1234px] h-auto rounded-[45px] border border-[#191A23] bg-[#F3f3f3] px-6 sm:px-[60px] py-[30px] sm:py-[41px] flex flex-col gap-[30px] shadow-[0px_5px_0px_#191A23]">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-start gap-4 sm:gap-6">
          <span className="text-[40px] sm:text-[60px] font-bold">02</span>
          <h2 className="text-[20px] sm:text-[28px] font-semibold leading-snug">
            Research and Strategy Development
          </h2>
        </div>

        <button className="w-[44px] h-[44px] flex items-center justify-center rounded-full border border-[#191A23] bg-[#F3F3F3] text-[32px] font-light self-end sm:self-auto">
          +
        </button>
      </div>
      
    </div>
  );
};

export default ResearchCard;
