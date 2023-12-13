import { Outlet, useLocation } from "react-router-dom";
import Footer from "../page/shared/Footer";
import Navbar from "../page/shared/Navbar";


const Main = () => {
    const location = useLocation()
    console.log(location);
    const noHeaderFooter = location.pathname.includes('logIn') || location.pathname.includes('singUp')
    return (
        <div>
           
           {
            noHeaderFooter ||  <Navbar></Navbar>
           }
            <Outlet></Outlet>
        {noHeaderFooter || <Footer></Footer>}
        </div>

    );
};

export default Main;