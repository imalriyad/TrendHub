import { useContext, useState } from "react";
import { AllData } from "../../Layout/MainLayout";
import CategoryDetailcard from "../../Category/CategoryDetails/CategoryDetailcard";
const HomeCard = () => {
  const allData = useContext(AllData);
  const [isShowMore,setShowMore] = useState(false)
  
  return (
    <div>
      <h1 className=" font-semibold text-center md:text-4xl mt-20 text-2xl text-mainColor">
      Top Picks: Hot Deals & New Arrivals
      </h1>
      
      <div className="grid mt-24 gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        { isShowMore ? allData?.map(item => <CategoryDetailcard key={item.id} item={item}></CategoryDetailcard>):
        allData?.slice(0,8).map(item => <CategoryDetailcard key={item.id} item={item}></CategoryDetailcard>)
        }
      </div>
      <div className={`mx-auto ${allData?.length < 8 && 'hidden'} text-center my-8`}><button onClick={()=> setShowMore(!isShowMore)} className="btn btn-info">{isShowMore? 'Show Less': 'Show More'}</button></div>
    </div>
  );
};

export default HomeCard;
