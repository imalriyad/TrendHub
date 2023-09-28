import Newsletter from "../Newsletter/Newsletter";

const Brands = () => {
  return (
    <div>
      <Newsletter></Newsletter>
       <h1 className="font-semibold text-center md:text-4xl text-2xl text-mainColor my-10">
       Featured brands
      </h1>
        <div className="flex items-center flex-wrap max-w-screen-lg mx-auto justify-between">
      <img
        src="https://i.ibb.co/VNPSXVC/Dell-png.png"
        alt="" className="w-[40px] md:w-[60px] object-fill"
      />
      <img
        src="https://i.ibb.co/p0PdSMH/Symbols.png"
        alt="" className="w-[40px] md:w-[60px] object-fill"
      />
      <img
        src="https://i.ibb.co/rsdsMrb/HP-jpeg.png"
        alt="" className="w-[40px] md:w-[60px] object-fill"
      />
      <img
        src="https://i.ibb.co/xh0Dzpv/Vector.png"
        alt="" className="w-[40px] md:w-[60px] object-fill"
      />
      <img
        src="https://i.ibb.co/mtccp4N/Vector-1.png"
        alt="" className="w-[40px] md:w-[60px] object-fill"
      />
    </div>
    
    </div>
  );
};

export default Brands;
