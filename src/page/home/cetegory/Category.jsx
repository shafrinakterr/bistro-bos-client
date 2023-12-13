import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/sectionTilte/SectionTitle';

const Category = () => {
    return (
        <div className='mb-16'>
            <SectionTitle
                 subhandding={'---From 11:00am to 10:00pm---'}
                 hadding={'ORDER ONLINE'}
            >
               
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h1 className='text-white font-cinzel -mt-16  text-3xl drop-shadow-2xl text-center uppercase '>SALADS</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h1 className='text-white font-cinzel -mt-16  text-3xl drop-shadow-2xl text-center uppercase '>pizzas</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h1 className='text-white font-cinzel -mt-16  text-3xl drop-shadow-2xl text-center uppercase '>Soups</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h1 className='text-white font-cinzel -mt-16  text-3xl drop-shadow-2xl text-center uppercase '>desserts</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h1 className='text-white font-cinzel -mt-16  text-3xl drop-shadow-2xl text-center uppercase '>SALADS</h1>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Category;