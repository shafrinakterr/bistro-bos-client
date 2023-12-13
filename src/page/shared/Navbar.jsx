import { useContext } from "react";
import {  NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart();
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }
    const navbar = <>


        <div className=" font-bold uppercase ml-5">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-yellow-400" : "text-white"
                }
            >
                Home
            </NavLink>
        </div>

        <div className=" font-bold uppercase ml-5">
            <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-yellow-400" : "text-white"
                }
            >
                DASHBOARD
            </NavLink>
        </div>
        <div className=" font-bold uppercase ml-5">
            <NavLink
                to="/ourMenu"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-yellow-400" : " text-white"
                }
            >
                Our Menu
            </NavLink>
        </div>
        <div className="font-bold uppercase ml-5">
            <NavLink
                to="/ourFood/pizza"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-yellow-400" : "text-white"
                }
            >
                Our Food
            </NavLink>
        </div>
        <div className=" font-bold uppercase ml-5">
            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-yellow-400" : "text-white"
                }
            >
                CONTACT us
            </NavLink>
        </div>
        <div className=" font-bold uppercase ml-5">
            <NavLink
                to="/dashboard/cart"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-yellow-400" : "text-white"
                }
            >

                <div className="flex ">
                    <FaShoppingCart className="bg-green-600 text-4xl -mt-2 rounded-full p-2 text-white"></FaShoppingCart>
                    <p className="-mt-2 p-1 -ml-3 w-7 h-7 bg-red-600 rounded-full">+{cart?.length}</p>
                </div>
            </NavLink>
        </div>

        <div className=" font-bold uppercase ml-5">
            {
                user ? <div className="flex">
                    <button onClick={handleLogOut}
                        to="/logIn"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-yellow-400" : "text-white text-lg"
                        }
                    >
                        <p>{user.name}</p>
                        Sing Out
                    </button>
                </div> :
                    <NavLink
                        to="/logIn"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-yellow-400" : "text-white"
                        }
                    >
                        Login
                    </NavLink>
            }
        </div>


    </>
    return (
        <div className="bg-black fixed z-50 opacity-70">
            <div className="navbar px-8 fixed z-50  w-full  text-white bg-black">
                <div className="navbar-start text-white">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu items-center menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navbar}
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-3xl font-semibold ">BISTRO BOSS</h1>
                        <p className="tracking-[5px] text-[24px] uppercase">Restaurant</p>
                    </div>
                </div>
                <div className="navbar-end hidden items-center lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navbar}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;