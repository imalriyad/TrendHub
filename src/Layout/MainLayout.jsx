import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Menu from "../Header/Menu";
import { createContext, useEffect, useState } from "react";
import Footer from "../Pages/Footer";
export const Data = createContext([]);
export const AllData = createContext([]);
export const Categories = createContext([]);
const MainLayout = () => {
  const data = useLoaderData();
  const [categories, setCategories] = useState([]);
  const [isClicked, setClickd] = useState(false);
  const [inputText, setInputText] = useState("");
  const [searchFieldData, setSearchFieldData] = useState(data);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);


  const inputFieldHandler = (e) => {
    setInputText(e.target.value);
  };

  const searchBtnHandler = () => {
    const searchData = data?.filter((item) =>
      item.title.toLowerCase().includes(inputText.toLowerCase())
    );
    if(searchData){
      setSearchFieldData(searchData);
     setClickd(!isClicked)
    }
  };

  const loc = useLocation();
  if (loc.pathname === "/") {
    document.title = "TrendHub | Home";
  } else {
    document.title = `TrendHub | ${loc.pathname.replace("/", "")}`;
  }

  const localStorageHandle = () => {
    setClickd(!isClicked);
  };

  return (
    <div>
      <div>
        <Data.Provider value={localStorageHandle}>
          <Categories.Provider value={categories}>
            <AllData.Provider value={searchFieldData}>
              <div className="px-2 max-w-screen-2xl mx-auto">
                <Navbar
                  searchBtnHandler={searchBtnHandler}
                  inputFieldHandler={inputFieldHandler}
                />
                <Menu />
                <Outlet></Outlet>
              </div>
              <Footer></Footer>
            </AllData.Provider>
          </Categories.Provider>
        </Data.Provider>
      </div>
    </div>
  );
};

export default MainLayout;
