const SectionTitle = ({hadding, subhandding}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center mt-10 mb-10">
            <p className="text-[#D99904] text-lg">{subhandding}</p>
            <h2 className="text-4xl uppercase border-t-4 border-b-4 mt-3 py-3">{hadding}</h2>
        </div>
    );
};

export default SectionTitle;