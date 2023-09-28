import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import CategoryDetails from "../Category/CategoryDetails/CategoryDetails";
import Cart from "../Pages/Cart/Cart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    loader: ()=> fetch("https://fakestoreapi.com/products"),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/category/:category",
        element: <CategoryDetails></CategoryDetails>,
        loader: ({ params }) =>
          fetch(
            `https://fakestoreapi.com/products/category/${params.category}`
          ),
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
        loader: ()=> fetch('https://fakestoreapi.com/products')
      },
    ],
  },
]);

export default router;
