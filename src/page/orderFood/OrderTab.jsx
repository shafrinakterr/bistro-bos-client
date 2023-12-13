import FoodCard from "../../components/foodCard/FoodCard";


const OrderTab = ({ items}) => {
    return (
        <div>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default OrderTab;