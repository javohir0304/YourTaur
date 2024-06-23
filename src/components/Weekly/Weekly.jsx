import React from "react";
import Container from "../../utils/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import istanbul from "../../assets/istanbul-mini.jpg"
import antalya from "../../assets/antalya-mini.jpg"
import dubai from "../../assets/dubai-mini.jpg"
import sharm from "../../assets/sharm-mini.jpg"
import usa from "../../assets/usa.jpg"
import england from "../../assets/englanda.jpg"
import europe from "../../assets/europe.jpg"
import canada from "../../assets/canada.jpg"

import 'swiper/css';
import 'swiper/css/pagination';


import { Autoplay, Pagination,FreeMode } from 'swiper/modules';
import WeeklyCard from "./WeeklyCard";
import { useTranslation } from "react-i18next";

const Weekly = () => {
  const {t} =useTranslation()

  
  return (
    <div id="weekly" className="mb-10 mt-24">
      <Container>
        <div>
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#2A2A2A]">{t('weekly.h2')}</h2>
          <p className="text-center text-[12px] sm:text-[15px] text-[#AFAFAF] max-w-[627px] mx-auto mt-6 mb-20">
            {t('weekly.p')}
          </p>
          <Swiper
            breakpoints={{
              360:{
                width:360,
                slidesPerView:1,
              },
            460:{
                width:460,
                slidesPerView:1,
            },
            560:{
                width:560,
                slidesPerView:1,
            },
            760:{
                width:760,
                slidesPerView:3,
            },
            }}
            spaceBetween={0}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={1500}
            pagination={{
              clickable: true,
            }}
            freeMode={false}
            modules={[Autoplay, Pagination, FreeMode]}
            className="h-[495px]"
          >
  <SwiperSlide className="weekly-swiper-slide">
    <div className="relative bg-contain bg-no-repeat min-h-[400px] max-h-[400px] rounded-t-2xl rounded-bl-2xl" style={{ backgroundImage: `url(${istanbul})`,width:"100%" }}>
      <WeeklyCard country={t('banner1.h1')} price={'420'} checks={'234'} />
    </div>
  </SwiperSlide>
  <SwiperSlide className="weekly-swiper-slide">
    <div className="relative bg-contain bg-no-repeat min-h-[400px] max-h-[400px] rounded-t-2xl rounded-bl-2xl" style={{ backgroundImage: `url(${antalya})`,width:"100%" }}>
      <WeeklyCard country={t('banner2.h1')} price={'800'} checks={'290'} />
    </div>
  </SwiperSlide>
  <SwiperSlide className="weekly-swiper-slide">
    <div className="relative bg-contain bg-no-repeat min-h-[400px] max-h-[400px] rounded-t-2xl rounded-bl-2xl" style={{ backgroundImage: `url(${dubai})`,width:"100%" }}>
      <WeeklyCard country={t('banner3.h1')} price={'900'} checks={'320'} />
    </div>
  </SwiperSlide>
  <SwiperSlide className="weekly-swiper-slide">
    <div className="relative bg-contain bg-no-repeat min-h-[400px] max-h-[400px] rounded-t-2xl rounded-bl-2xl" style={{ backgroundImage: `url(${sharm})`,width:"100%" }}>
      <WeeklyCard country={t('banner4.h1')} price={'940'} checks={'300'} />
    </div>
  </SwiperSlide>
  <SwiperSlide className="weekly-swiper-slide">
    <div className="relative bg-contain bg-no-repeat min-h-[400px] max-h-[400px] rounded-t-2xl rounded-bl-2xl" style={{ backgroundImage: `url(${usa})`,width:"100%" }}>
      <WeeklyCard country={t('country.usa')} price={'750'} checks={'450'} />
    </div>
  </SwiperSlide>
  <SwiperSlide className="weekly-swiper-slide">
    <div className="relative bg-contain bg-no-repeat min-h-[400px] max-h-[400px] rounded-t-2xl rounded-bl-2xl" style={{ backgroundImage: `url(${england})`,width:"100%" }}>
      <WeeklyCard country={t('country.england')} price={'770'} checks={'20'} />
    </div>
  </SwiperSlide>
  <SwiperSlide className="weekly-swiper-slide">
    <div className="relative bg-contain bg-no-repeat min-h-[400px] max-h-[400px] rounded-t-2xl rounded-bl-2xl" style={{ backgroundImage: `url(${canada})`,width:"100%" }}>
      <WeeklyCard country={t('country.canada')} price={'570'} checks={'120'} />
    </div>
  </SwiperSlide>
  <SwiperSlide className="weekly-swiper-slide">
    <div className="relative bg-contain bg-no-repeat min-h-[400px] max-h-[400px] rounded-t-2xl rounded-bl-2xl" style={{ backgroundImage: `url(${europe})`,width:"100%" }}>
      <WeeklyCard country={t('country.europe')} price={'990'} checks={'340'} />
    </div>
  </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Weekly;
