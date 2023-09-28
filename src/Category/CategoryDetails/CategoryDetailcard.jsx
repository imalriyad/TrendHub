import { useContext } from "react";
import Rating from "react-rating";
import swal from "sweetalert";
import { Data } from "../../Layout/MainLayout";
/* eslint-disable react/prop-types */
const CategoryDetailcard = ({ item }) => {
  const localStorageHandle = useContext(Data)

  const { image, price, description, title, rating, id, category } = item;
  const addedToCart = (item) => {
    const cartItem = [];
    const storedData = JSON.parse(localStorage.getItem("cart"));
    if (!storedData) {
      cartItem.push(item);
      localStorage.setItem("cart", JSON.stringify(cartItem));
      swal("Yay!", "Succfully Add this Produc to Cart", "success");
    } else {
      const isExist = storedData.find((item) => item.id === id);
      if (!isExist) {
        cartItem.push(...storedData, item);
        localStorage.setItem("cart", JSON.stringify(cartItem));
        swal("Yay!", "Succfully Add this Product to Cart", "success");
      }
      else{
        swal("Yay!", "Already added this Product to Cart", "error");
      }
    }
  };

  return (
    <div>
      <div className="relative flex flex-col h-[600px] rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={image} className="h-full w-full object-center" />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {title?.slice(0, 66)}
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <p className="block font-sans mb-2 text-xl font-bold leading-relaxed text-blue-gray-900 antialiased">
                ${price}
              </p>
              <div className="badge bg-mainColor text-white">{category}</div>
            </div>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            {description?.slice(0, 160)}
          </p>
          <Rating className="mt-4 text-orange-400" emptySymbol={ <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" > <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /> </svg> } fullSymbol ={ <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" > <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /> </svg> } initialRating={rating?.rate} readonly />
        </div>
        <div className="p-6 pt-0">
        

          <button
           onClick={() => { addedToCart(item); localStorageHandle();}}
            className="block w-full bg-base-300 select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetailcard;
