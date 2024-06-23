import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import istanbul from "../../assets/ISTAMBUL.jpg"
import antalya from "../../assets/antalya.jpg"
import dubai from "../../assets/dubai.jpg"
import sharm from "../../assets/sharm-el-sheikh.jpg"
import 'swiper/css';
import 'swiper/css/pagination';


import { Autoplay, Pagination,FreeMode } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import BannerContent from './BannerContent';

const Banner = () => {

  const {t}=useTranslation()
  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={20}
        pagination={{
          clickable: true,
        }}
        freeMode={false}
        modules={[Autoplay, Pagination,FreeMode]}
        className="h-[89vh] w-full max-w-[1900px]"
      >
        <SwiperSlide style={{backgroundImage:`url(${istanbul})`}} className='flex flex-col items-center justify-center w-full h-full bg-slate-600 bg-cover bg-center bg-no-repeat'>
        <BannerContent h1_text={t('banner1.h1')} h2_text={t('banner1.h2')} population={'44.48'} territory={'77.8'} avgPrice={'700'}/>
        </SwiperSlide>

        <SwiperSlide style={{backgroundImage:`url(${antalya})`}} className='flex flex-col items-center justify-center w-full h-full bg-slate-600 bg-cover bg-center bg-no-repeat'>
        <BannerContent h1_text={t('banner2.h1')} h2_text={t('banner2.h2')} population={'90'} territory={'41.290'} avgPrice={"1090"}/>
        </SwiperSlide> 
        <SwiperSlide style={{backgroundImage:`url(${dubai})`}} className='flex flex-col items-center justify-center w-full h-full bg-slate-600 bg-cover bg-center bg-no-repeat'>
        <BannerContent h1_text={t('banner3.h1')} h2_text={t('banner3.h2')} population={'55.58'} territory={'98.90'} avgPrice={'900.85'}/>
        </SwiperSlide>
        <SwiperSlide style={{backgroundImage:`url(${sharm})`}} className='flex flex-col items-center justify-center w-full h-full bg-slate-600 bg-cover bg-center bg-no-repeat'>
        <BannerContent h1_text={t('banner4.h1')} h2_text={t('banner4.h2')} population={'85.58'} territory={'87.88'} avgPrice={'870.90'}/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner