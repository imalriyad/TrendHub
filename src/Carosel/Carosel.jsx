import { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Carosel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderImg = [
    {
      url: "https://icms-image.slatic.net/images/ims-web/d3495645-451f-40fc-94e9-3bae6e83aab3.jpg",
    },
    {
      url: "https://icms-image.slatic.net/images/ims-web/3c834b41-643c-4d8d-95ba-c7686e0957a1.jpg",
    },
    {
      url: "https://icms-image.slatic.net/images/ims-web/8edd75ea-629e-4b70-b8ad-5e3a935d18c0.jpg",
    },
    {
      url: "https://icms-image.slatic.net/images/ims-web/16b2459b-12eb-429f-bb13-65ab6f905a9c.jpg",
    },
    {
      url: "https://icms-image.slatic.net/images/ims-web/5491b52c-7746-41c4-8d20-d7e26de3adc9.jpg",
    },
  ];
  const handalePrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = Math.abs(
      isFirstSlide ? sliderImg.length - 1 : currentIndex - 1
    );
    console.log(newIndex);
    setCurrentIndex(newIndex);
  };

  const handaleNext = () => {
    const isLast = currentIndex === sliderImg.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    console.log(newIndex);
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto md:h-[650px] ">
        <div
          className="flex justify-between md:h-[650px] h-[330px] relative group object-cover"
          style={{
            backgroundImage: `url(${sliderImg[currentIndex].url})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "10px",
          }}
        >
          <MdOutlineKeyboardArrowLeft
            onClick={handalePrevious}
            className=" my-auto group-hover:block hidden text-5xl cursor-pointer absolute left-0 top-[50%] bg-mainColor text-white rounded-full -translate-x-0 translate-y-[-50%]"
          ></MdOutlineKeyboardArrowLeft>
          <MdOutlineKeyboardArrowRight
            onClick={handaleNext}
            className=" my-auto group-hover:block hidden text-5xl cursor-pointer absolute right-0 top-[50%] bg-mainColor text-white rounded-full -translate-x-0 translate-y-[-50%]"
          ></MdOutlineKeyboardArrowRight>
        </div>
      </div>
    </div>
  );
};

export default Carosel;
