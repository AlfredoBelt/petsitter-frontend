import { Swiper, SwiperSlide } from "swiper/react";


import 'swiper/css';
import 'swiper/css/pagination';
import Image from "next/image";

export const SliderComponent = () => {
  return (
    <>
      <Swiper
        spaceBetween={3}
        pagination={{
          clickable: true,
        }}
      
        className="mySwiper"
      >
        <SwiperSlide><Image src={'/sliderimg_00.svg'} width={600} height={400} alt="slider img 1" /></SwiperSlide>
        <SwiperSlide><Image src={'/sliderimg_01.svg'} width={600} height={400} alt="slider img 2"/></SwiperSlide>
        <SwiperSlide><Image src={'/sliderimg_02.svg'} width={600} height={400} alt="slider img 3"/></SwiperSlide>
      </Swiper>
    </>
  )
}