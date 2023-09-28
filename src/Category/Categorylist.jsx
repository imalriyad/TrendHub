import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import Services from "../Feature/Services";

const Categorylist = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  return (
    <div className="mx-auto px-4 max-w-screen-2xl mt-14">
      <Services></Services>
      <h1 className="font-semibold text-center md:text-4xl text-2xl text-mainColor">
        Popular Categories
      </h1>
      <div className="grid my-4 lg:grid-cols-4 grid-cols-2 md:gap-x-20 gap-x-4">
        {categories?.map((category,indx) => (
          <CategoryCard
            key={indx}
            category={category}
          ></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Categorylist;
