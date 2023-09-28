import { useLoaderData } from "react-router-dom";
import CartCard from "./CartCard";
import { useContext, useEffect, useState } from "react";
import swal from 'sweetalert';
import { Data } from "../../Layout/MainLayout";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Cart = () => {
  const data = useLoaderData();
  const [filterData, setFilterData] = useState([]);
  const isclickd = useContext(Data)
 
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("cart"));

    if (storedData) {
      const dataFromLs = [];
      for (const obj of storedData) {
        const dataFilter = data?.filter((item) => item.id === obj.id);
        dataFromLs.push(...dataFilter)
      }
      setFilterData(dataFromLs)
    }
  }, [data]);

  const handleBuy = (card) =>{
    swal("Yay!", "You have Succfully Bought this Product", "success");
    const storedData = JSON.parse(localStorage.getItem("cart"));
    const remainingCard = storedData.filter(item => item.id !== card.id )
    setFilterData(remainingCard)
    localStorage.setItem('cart',JSON.stringify(remainingCard))
    isclickd(!isclickd)
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>TrendHub | Cart</title>
      </Helmet>
      <div>
      {
        filterData.length <= 0 ? <h1 className="text-4xl font-bold text-center">You Have Nothing On Your Cart!</h1> : <div className="grid mt-24 gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {filterData?.map((card) => (
          <CartCard key={card.id} card={card} handleBuy={handleBuy}></CartCard>
        ))}
      </div>
      }
    </div>
    </HelmetProvider>
  );
};

export default Cart;
