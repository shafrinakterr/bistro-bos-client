
import { Link } from "react-router-dom";
import MenuItem from "../menuItem/MenuItem";
import Button from "../button/Button";


const MenuCategory = ({ items, title}) => {
    return (
        <div>
           
            <div className="grid mt-16 mb-6 md:grid-cols-2 max-w-6xl mx-auto gap-10">
                {

                    items.map(item =>
                        <MenuItem key={item._id}
                            item={item}
                        >
                        </MenuItem>)
                }

            </div>
            <Link to={`/ourFood/${title}`}>
                <Button text={'ORDER YOUR FAVOURITE FOOD'}></Button>
            </Link>
        </div>
    );
};

export default MenuCategory;