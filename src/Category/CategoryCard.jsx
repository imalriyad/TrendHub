import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CategoryCard = ({ category }) => {
  const imageByCategories = () => {
    if (category === "jewelery") {
      return "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80";
    } else if (category === "electronics") {
      return "https://img.freepik.com/free-vector/mobile-phone-accessories-cartoon-illustration-set-vr-glasses-3d-model-cellphones-case-charger-battery-headphones-smart-watch-memory-card-selfie-stick-technology-smartphone-concept_74855-23119.jpg?w=1380&t=st=1695711443~exp=1695712043~hmac=797b54a09df9904510efa7cd5c77e2b9e214eb3f91b05b093dea89a2b42df489";
    } else if (category === "men's clothing") {
      return "https://time.com/shopping/static/068f53b41b3df206b10db593f54f5c26/4febf/best-mens-clothing-brands.webp";
    } else if (category === "women's clothing") {
      return "https://media.istockphoto.com/id/1208148708/photo/polka-dot-summer-brown-dress-suede-wedge-sandals-eco-straw-tote-bag-cosmetics-on-a-light.jpg?s=612x612&w=0&k=20&c=9Y135GYKHLlPotGIfynBbMPhXNbYeuDuFzreL_nfDE8=";
    }
  };
  return (
    <Link to={`/category/${category}`}>
    <div>
      <div className="rounded-md cursor-pointer mt-12 border shadow-md">
        <img
          src={imageByCategories()}
          alt=""
          className="object-fill rounded-md md:h-[210px] h-[100px] w-full"
        />
      </div>
      <h1 className="md:text-2xl text-sm text-center mt-3 font-medium capitalize">
        {category}
      </h1>
    </div>
    </Link>
  );
};

export default CategoryCard;
