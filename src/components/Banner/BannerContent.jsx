import React from 'react'
import { FaUser,FaGlobe,FaHouse   } from "react-icons/fa6";
import Container from '../../utils/Container';
import { useTranslation } from 'react-i18next';

const BannerContent = ({h2_text,h1_text,population,territory,avgPrice}) => {
  const {t}=useTranslation()
  return (
    <>
    <h2 className='text-white text-[17px] md:text-[20px]'>{h2_text}</h2>
    <h1 className='text-white text-[32px] sm:text-[40px] md:text-[60px] font-bold my-3'>{h1_text}</h1>
    <button className='bg-main rounded-3xl text-white text-[14px] h-[47px] px-10 font-semibold mb-14 md:mb-28 hover:bg-white hover:text-main hover:border-main hover:border-[1px] transition-colors duration-500'><a href="#info">{t('button.go')}</a></button>
    <Container>
    <div className='flex flex-col  xl:flex-row xl:items-center bg-white rounded-lg md:rounded-[60px] w-full px-[40px] sm:px-[40px] xl:px-[70px] py-3 sm:py-8 xl:py-5 gap-y-3 sm:gap-y-10  gap-x-28'>
      <div className='flex sm:flex-row flex-col sm:items-center items-start w-full gap-y-3 gap-x-12 sm:gap-x-52 md:gap-x-60 xl:gap-x-28'>
        <div className='flex items-center gap-x-5'>
          <div className='md:w-[60px] md:h-[60px] w-[35px] h-[35px] rounded-full border-main border-2 flex items-center justify-center'>
            <FaUser className='text-lg md:text-2xl text-main'/>
          </div>
          <div className='flex items-center gap-12 sm:block'>
            <p className='text-[13px] md:text-[15px] text-gray-500'>{t('banner1.population')}</p>
            <strong className='text-main font-bold text-md sm:text-lg md:text-[20px]'>{population} {t('visitCard.mil')}</strong>
          </div>
        </div>
        <div className='flex items-center gap-x-5'>
          <div className='md:w-[60px] md:h-[60px] w-[35px] h-[35px] rounded-full border-main border-2 flex items-center justify-center'>
            <FaGlobe className='text-2xl text-main' />
          </div>
          <div className='flex items-center gap-[63px] sm:block'>
            <p className='text-[13px] md:text-[15px] text-gray-500'>{t('banner1.territory')}</p>
            <strong className='text-main font-bold text-sm sm:text-[15px] md:text-[20px]'>{territory} {t('visitCard.km')}<sup>2</sup></strong>
          </div>
        </div>
      </div>
      <div className='flex sm:flex-row flex-col sm:items-center gap-y-4 gap-x-[40px] sm:gap-x-[190px] md:gap-x-[214px] xl:gap-x-44'>
        <div className='flex items-center gap-x-5'>
          <div className='md:w-[60px] md:h-[60px] w-[35px] h-[35px] rounded-full border-main border-2 flex items-center justify-center'>
            <FaHouse className='text-2xl text-main'/>
          </div>
          <div className='flex items-center gap-14 sm:block'>
            <p className='text-[13px] md:text-[13px] text-gray-500'>{t('banner1.avgPrice')}</p>
            <strong className='text-main font-bold text-md sm:text-lg md:text-[20px]'>${avgPrice}</strong>
          </div>
        </div>
        <button className='bg-main rounded-3xl text-white text-[10px] sm:text-[12px] md:text-[14px] h-[47px] px-3 md:px-10 font-semibold hover:bg-white hover:text-main hover:border-main border-[1px] transition-colors duration-500'><a href="#info">{t('button.explore')}</a></button>
      </div>
    </div>
    </Container>
    </>
  )
}

export default BannerContent