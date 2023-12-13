
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSicure from "../../hooks/useAxiosSicure";
import useCart from "../../hooks/useCart";



const FoodCard = ({ item }) => {
    const { name, recipe, image, price, _id } = item;
    const navigate = useNavigate();
    const location = useLocation()
    const useAxiosSecure = useAxiosSicure()
    const {user}= useAuth();
    const[, refetch]= useCart()
    const handleAddToFood = ()=> {
        if(user && user.email){
            const cartItem = {
                menuId: _id,
                email: user?.email,
                name,
                recipe,
                image,
                price
            }
            useAxiosSecure.post('/carts', cartItem)
            .then(res=>{
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })
        }
        else{
            Swal.fire({
                title: "You are not logged in",
                text: "Please login and then add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, LogIn!"
                
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/logIn', {state: {from:location}})
                }
              });
        }
    }
    return (
        <div>
            <div className="card mt-10  h-[500px] bg-base-100 shadow-xl">
                <figure><img className="  " src={image} alt="Shoes" /></figure>
                <p className="absolute mt-3 right-3 px-3 py-1 rounded-lg bg-black text-yellow-500 font-bold font-raleway">${price}</p>
                <div className="p-5 space-y-5">
                    <h2 className="text-2xl font-semibold text-center">{name}</h2>
                    <p className="text-start">{recipe}</p>
                    <div className=" justify-center">
                        <button onClick={() => handleAddToFood(item)}
                            className="btn border-b-[#BB8506] text-[#BB8506] hover:border-b-[#BB8506] border-b-4 px-5 rounded-lg focus:bg-[#111827]">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;