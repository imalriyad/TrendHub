import Categorylist from "../../Category/Categorylist";
import Carosel from "../../Carosel/Carosel";
import Brands from "../../Feature/Brands";
import { Helmet, HelmetProvider } from "react-helmet-async";
import HomeCard from "./HomeCard";

const Home = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>TrendHub | Home</title>
            </Helmet>
            <div>
            <Carosel></Carosel>
            <Categorylist></Categorylist>
            <HomeCard></HomeCard>
            <Brands></Brands>
        </div>
        </HelmetProvider>
    );
};

export default Home;