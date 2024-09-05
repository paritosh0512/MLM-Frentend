// src/components/Slider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Home_product_price from './Home_product_price';

const Slider = () => {
  const slides = [
    { id: 1, image: 'https://img.freepik.com/premium-photo/ecommerce-web-banner_1281315-747.jpg?w=826' },
    { id: 2, image: 'https://img.freepik.com/free-vector/flat-design-shopping-center-twitch-background_23-2149337408.jpg?w=826&t=st=1725082000~exp=1725082600~hmac=32a6b983df714c34fbdfafcae45fb9853d6b050bbf29b547168fc1a0d084241e' },
    { id: 3, image: 'https://img.freepik.com/free-photo/shopping-trolleys-packets-gift-tags_23-2147961963.jpg?t=st=1725082191~exp=1725085791~hmac=e248b2edd6345df700c2d5aa0a0e30486948c0f1f4c014f621b93e95bd3fbe20&w=740' },
    { id: 4, image: 'https://img.freepik.com/premium-psd/poster-website-line-moving-goods_1149671-52.jpg?w=740' },
  ];

  return (
    <div className="w-full min-h-40 mx-auto ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop={true}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-96 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Home_product_price/>
    </div>
  );
};

export default Slider;
