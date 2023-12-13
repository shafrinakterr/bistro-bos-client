import Swal from "sweetalert2";
import SectionTitle from "../../../components/sectionTilte/SectionTitle";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSicure from "../../../hooks/useAxiosSicure";

const Cart = () => {
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSicure()
    const handledeleButton = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        console.log(res);
                        if (res.data.deletedCount > 0){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                        }
                    refetch()
                })
               
            }
        });
    }
    return (
        <div>
            <SectionTitle
                hadding={"MANAGE ALL Shop"}
                subhandding={'---At a Glance!---'}
            ></SectionTitle>
            <div className="bg-[#F6F6F6]  p-10">
                <div className="flex justify-evenly white">
                    <h1 className="text-3xl font-semibold">Items: {cart?.length}</h1>
                    <h1 className="text-3xl font-semibold">Total Price: {totalPrice.toFixed(3)}</h1>
                    <button className="btn bg-[#D1A054] w-20 hover:bg-[#D1A054] text-white ">Pay</button>
                </div>
                <div className="overflow-x-auto mt-10">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#D1A054] text-white p-5 text-lg'>
                            <tr>
                                <th>No</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>{item.price}</td>
                                    <th>
                                        <button onClick={() => handledeleButton(item._id)} className="btn bg-[#B91C1C] hover:bg-[#B91C1C] text-white"><FaTrashAlt /></button>
                                    </th>
                                </tr>)
                            }
                            {/* row 1 */}


                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;