import { Parallax } from 'react-parallax';

const Cover = ({ img, title, description }) => {
    return (

        <Parallax
            blur={{ min: -50, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div>
                <div className="hero min-h-screen bg-black" style={{ backgroundImage: `url("${img}")` }}>
                    <div className=" bg-opacity-60"></div>
                    <div className="w-[80%] h-[230px] flex justify-center items-center font-raleway bg-[#0000008b]  text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                            <p className="mb-5 px-16 mx-auto text-white">{description}</p>
                            

                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;