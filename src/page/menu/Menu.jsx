import { Helmet } from "react-helmet-async";
import Cover from "../shared/cover/Cover";
import menuBg from '../../assets/menu/banner3.jpg'
import dessertBg from '../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../assets/menu/pizza-bg.jpg'
import saladBg from '../../assets/menu/salad-bg.jpg'
import soupBg from '../../assets/menu/soup-bg.jpg'
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/sectionTilte/SectionTitle";
import MenuCategory from "../shared/menucategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');

    return (
        <div>
            <Helmet>
                <title>Bistro | menu</title>
            </Helmet>
            {/* offered menu */}
            <Cover
                img={menuBg}
                title={'OUR MENU'}
                description={'Would you like to try a dish?'}
            ></Cover>
            <SectionTitle subhandding='---Dont miss---' hadding={'TODAYS OFFER'}></SectionTitle>
            <MenuCategory items={offered} title={'offered'}></MenuCategory>
            

            {/* dessert menu */}
            <Cover
                img={dessertBg}
                title={'desserts'}
                description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></Cover>

            <MenuCategory items={dessert} title={'dessert'}></MenuCategory>
            

            {/* pizza menu */}
            <Cover
                img={pizzaBg}
                title='pizza'
                description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            ></Cover>
            <MenuCategory items={pizza} title={'pizza'} ></MenuCategory>
            
            {/* salad menu */}
            <Cover
                img={saladBg}
                title='salads'
                description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            ></Cover>
            <MenuCategory items={salad} title={'salad'}></MenuCategory>
            
            {/* soups menu */}
            <Cover
                img={soupBg}
                title='soups'
                description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            ></Cover>
            <MenuCategory items={soup} title={'soups'}></MenuCategory>
            
        </div>
    );
};

export default Menu;