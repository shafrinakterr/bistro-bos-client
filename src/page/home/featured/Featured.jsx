import SectionTitle from "../../../components/sectionTilte/SectionTitle";

const Featured = () => {
    return (
        <div className="hero bg-fixed mb-16 h-[848px]" style={{ backgroundImage: 'url(https://i.ibb.co/dG7nfYZ/featured.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div  className="text-white">
                <SectionTitle 
                    subhandding='---Check it out---'
                    hadding={`FROM OUR MENU`}
                ></SectionTitle>
                <div className="hero-content text-center text-neutral-content">
                    <img className="w-[648px] h-[400px" src="https://i.ibb.co/dG7nfYZ/featured.jpg" alt="" />
                    <div className="text-start ml-10">
                        <h1 className="mb-3 text-2xl ">March 20, 2023</h1>
                        <h1 className="mb-3 text-2xl ">WHERE CAN I GET SOME?</h1>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className=" rounded-b font-semibold text-lg border-b-2 capitalize p-3">Read More</button>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;