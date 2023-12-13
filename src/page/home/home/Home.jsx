import Banner from "../Banner";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Category from "../cetegory/Category";
import ChefService from "../chef-service/ChefService";
import PopularMenu from "../../shared/popularMenu/PopularMenu";
import CallUs from "../../../callUs/CallUs";
import Featured from "../featured/Featured";
import Testimonial from "../testimonial/Testimonial";
import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Bistro | home</title>
                
            </Helmet>
            <div>
                <Banner></Banner>
            </div>
            <div className="max-w-6xl mx-auto font-inter ">

                <Category></Category>
                <ChefService></ChefService>
                <PopularMenu></PopularMenu>
                <CallUs></CallUs>
            </div>
            <div className="w-full">
                <Featured></Featured>
            </div>
            <div className="max-w-6xl mx-auto font-inter ">
                <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;