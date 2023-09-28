import { useLoaderData } from "react-router-dom";
import CategoryDetailcard from "./CategoryDetailcard";

const CategoryDetails = () => {
    const categoriesData = useLoaderData()

    return (
        <div>
            <h1 className="text-center text-4xl font-medium uppercase">{categoriesData[0].category}</h1>
            <div className="grid mt-24 gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                {
                    categoriesData?.map(item => <CategoryDetailcard key={item.id} item={item}></CategoryDetailcard>)
                }
            </div>
        </div>
    );
};

export default CategoryDetails;