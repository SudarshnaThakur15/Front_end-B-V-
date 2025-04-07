const ConsultationCard = () => {
  return (
    <div className="w-full md:w-[1234px] h-auto rounded-[45px] border border-[#191A23] bg-[#B9FF66] px-6 md:px-[60px] py-[41px] flex flex-col gap-[30px] shadow-[0px_5px_0px_#191A23]">
      
      <hr className="border-[#191A23]" />

      <p className="text-[16px] text-black hidden md:block">
        During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. 
        This will allow us to understand your needs and tailor our services to best fit your requirements.
      </p>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
        <div className="flex items-center gap-4 md:gap-6">
          <span className="text-[40px] md:text-[60px] font-bold">01</span>
          <h2 className="text-[22px] md:text-[28px] font-semibold">Consultation</h2>
        </div>
        <div className="w-full md:w-auto flex justify-end">
          <button className="w-[44px] h-[44px] flex items-center justify-center rounded-full border border-[#191A23] bg-[#F3F3F3] text-[32px] font-light">
            −
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsultationCard;
