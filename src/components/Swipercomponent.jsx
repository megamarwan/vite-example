import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
//import { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const SwiperComponent = () => {
  return (
    <Swiper
      //modules={[Navigation]} // Include Navigation module
      spaceBetween={50} // Space between slides
      slidesPerView={1} // Number of slides to show
      navigation // Enable navigation buttons
    >
      <SwiperSlide style={{ backgroundColor: '#ffcccc' }}>Slide 1</SwiperSlide>
      <SwiperSlide style={{ backgroundColor: '#ccffcc' }}>Slide 2</SwiperSlide>
      <SwiperSlide style={{ backgroundColor: '#ccccff' }}>Slide 3</SwiperSlide>
      <SwiperSlide style={{ backgroundColor: '#ffffcc' }}>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;