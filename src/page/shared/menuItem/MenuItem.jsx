


const MenuItem = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="flex justify-center gap-3 items-center">
            <img className="h-[118px] w-[100]" style={{ borderRadius: '0px 200px 200px 200px' }} src={image} alt="" />
            <div className="space-y-2">
                <div className="flex justify-between mb-3">
                    <h1 className="text-xl">{name}</h1>
                    <h1 className="text-yellow-500 text-lg font-bold">${price}</h1>
                </div>
                <p>{recipe}</p>
            </div>
            
        </div>
    );
};

export default MenuItem;