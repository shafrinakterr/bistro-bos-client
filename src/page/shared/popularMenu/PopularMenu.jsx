import SectionTitle from "../../../components/sectionTilte/SectionTitle";
import MenuItem from "../menuItem/MenuItem";
import Button from "../button/Button";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popularMenu = menu.filter(item => item.category === 'popular')
    return (
        <div>
            <SectionTitle
                subhandding='---Check it out---'
                hadding='FROM OUR MENU'
            >

            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {

                    popularMenu.map(item =>
                        <MenuItem key={item._id}
                            item={item}
                        >
                        </MenuItem>)
                }

            </div>
            <Button text='View Full  Menu'></Button>
        </div>
    );
};

export default PopularMenu;