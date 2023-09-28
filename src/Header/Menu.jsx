import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <div className="flex max-w-screen-2xl mx-auto flex-wrap text-white list-none gap-6 md:gap-8 my-10 bg-mainColor p-4 md:text-base text-xs">
                <Link to={'/'}><li className="cursor-pointer">Home</li></Link>
                <li className="cursor-pointer">Features</li>
                <li className="cursor-pointer">Collections</li>
                <li className="cursor-pointer">Shop</li>
                <li className="cursor-pointer">About us</li>
                <li className="cursor-pointer">Contact us</li>
            </div>
        </div>
    );
};

export default Menu;