/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { TbLogin2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Categories, Data } from "../Layout/MainLayout";
const Navbar = ({ searchBtnHandler, inputFieldHandler }) => {
  const clickd = useContext(Data);
  const categories = useContext(Categories);
  const [cartData, setCartData] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("cart")) || [];
    if (storedData) {
      setCartData(storedData);
    }
  }, [clickd]);

  useEffect(() => {
    const totalCartExpense = cartData?.reduce(
      (prev, current) => prev + current.price,
      0
    );

    setTotalExpense(totalCartExpense);
  }, [cartData]);

  return (
    <div className="mt-4 px-4 mx-auto max-w-screen-2xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-mainColor md:text-3xl text-lg font-bold">
            Trendhub
          </h1>
        </div>
        <div className="w-6/12 relative lg:block hidden text-center">
          <input
            onChange={inputFieldHandler}
            type="text"
            placeholder="Search product"
            className="input input-bordered focus:border-mainColor border-mainColor input-md rounded-xl focus:outline-none max-w-xl -mt-[10px] w-[80%]"
          />

          <div className="dropdown flex -mt-12">
            <button className="absolute flex items-center right-36 top-3  text-mainColor">
              All categories{" "}
              <BiSolidDownArrow className="ml-2 text-mainColor" />
            </button>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              {categories.map((category) => (
                <li className="text-base text-left uppercase" key={category}>
                  <Link to={`/category/${category}`}>
                    <a>{category}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={searchBtnHandler}
            className="px-7 rounded-r-md absolute right-4 py-3 text-white hover:bg-mainColor  bg-mainColor"
          >
            Search
          </button>
        </div>

        <div className="flex items-center gap-x-2">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn text-mainColor btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cartData?.length}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">
                  {cartData?.length} Items
                </span>
                <span className="text-base">
                  Total: ${totalExpense?.toFixed(2)}
                </span>
                <div className="card-actions">
                  <Link to={"/cart"}>
                    <button className="btn text-white bg-mainColor hover:bg-mainColor">
                      View cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link to={"/login"}>
            <button className="flex btn btn-ghost items-center md:text-lg font-semibold text-mainColor">
              <TbLogin2 className="mr-1 text-xl" />
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
