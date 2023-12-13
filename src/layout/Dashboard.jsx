import { FaList, FaShoppingCart } from "react-icons/fa";
import { Link,Outlet } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { FaUtensils, FaBook } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import { IoCalendar } from "react-icons/io5";


// import useCart from "../hooks/useCart";

const Dashboard = () => {
    // TODO: get admin isAdmin value from the database
    const isAdmin = true;
    return (
        <div className="flex">
            <div className="w-64 p-4 max-h-full bg-[#D1A054]">
                <div>
                    <h1 className="text-3xl font-bold font-cinzel ">BISTRO BOSS</h1>
                    <p className="tracking-[5px] font-cinzel font-bold text-[24px] uppercase">Restaurant</p>
                </div>
                <ul className="mt-10 uppercase space-y-5 font-cinzel font-bold">
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <Link to='/dashboard/adminHome'>
                                        <button className="focus:text-white flex items-center gap-5 uppercase">
                                            <GoHomeFill className="w-6 h-6"></GoHomeFill> Admin Home
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/addItems'>
                                        <button className="focus:text-white flex items-center gap-5 uppercase">
                                            <FaUtensils className="w-6 h-6"></FaUtensils> add items
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/manageItems'>
                                        <button className="focus:text-white flex items-center gap-5 uppercase">
                                        <FaList  className="w-6 h-6"/> manage items
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/booking'>
                                        <button className="focus:text-white flex items-center gap-5 uppercase">
                                            <FaBook className="w-6 h-6"></FaBook> Manage bookings
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/users'>
                                        <button className="focus:text-white flex items-center gap-5 uppercase">
                                            <PiUsersThreeFill className="w-6 h-6"></PiUsersThreeFill> all users
                                        </button>
                                    </Link>
                                </li>
                            </>
                            : <>
                                <li>
                                    <Link to='/dashboard'>
                                        <button className="focus:text-white flex items-center gap-5 uppercase">
                                            <GoHomeFill className="w-6 h-6"></GoHomeFill> userHome
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/reservation'>
                                        <button className="focus:text-white flex items-center gap-5 uppercase">
                                             <IoCalendar  className="w-6 h-6"/> Reservation
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/cart'>
                                        <button className="focus:text-white flex items-center gap-5 uppercase">
                                            <FaShoppingCart className="w-6 h-6"></FaShoppingCart> Shop
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/contact'>
                                        <button className="focus:text-white flex items-center gap-5 uppercase">
                                            <GoHomeFill className="w-6 h-6"></GoHomeFill> Contact
                                        </button>
                                    </Link>
                                </li>
                            </>
                    }

                    <div className="divider"></div>
                    <li>
                        <Link to='/'>
                            <button className="focus:text-white flex items-center gap-5 uppercase">
                                <GoHomeFill className="w-6 h-6"></GoHomeFill> Home
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/ourMenu'>
                            <button className="focus:text-white flex items-center gap-5 uppercase">
                                < IoMenu className="w-6 h-6"></ IoMenu > Menu
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/dashboard/cart'>
                            <button className="focus:text-white flex items-center gap-5 uppercase">
                                <FaShoppingCart className="w-6 h-6"></FaShoppingCart> Shop
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact'>
                            <button className="focus:text-white flex items-center gap-5 uppercase">
                                <GoHomeFill className="w-6 h-6"></GoHomeFill> Contact
                            </button>
                        </Link>
                    </li>

                </ul>


            </div>
            <div className="flex-1  p-10 mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;