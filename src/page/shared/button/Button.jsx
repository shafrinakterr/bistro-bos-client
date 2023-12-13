
const Button = ({text}) => {
    return (
        <div className="flex justify-center mb-16" >
            <button className=" border-b-4 py-3 px-8 border-[#1F2937] rounded-b-xl uppercase font-semibold mt-12">{text}</button>
        </div>
    );
};

export default Button;