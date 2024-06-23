import React from 'react'
import Container from '../utils/Container'
import { FaPhoneAlt  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

const Info = () => {
    const {t}=useTranslation()
  return (
    <div id='info' className='-mt-20'>
        <Container>
            <div className='flex flex-col md:flex-row items-center justify-between gap-10'>
                <div className='md:w-[33%] px-4 w-full bg-white shadow-card rounded-2xl flex flex-col items-center justify-center gap-5 h-[290px]'>
                    <div className='bg-[#f0f0f0] rounded-full w-[60px] h-[60px] grid place-items-center text-main text-2xl'>
                        <FaPhoneAlt/>
                    </div>
                    <h2 className='font-bold text-center text-[16px] sm:text-[20px] text-[#2a2a2a]'>{t('info.phone')}</h2>
                    <a className='text-main text-center' href="tel:+998999999999">+998 99 999 99 99</a>
                </div>
                <div className='md:w-[33%] px-4 w-full bg-white shadow-card rounded-2xl flex flex-col items-center justify-center gap-5 h-[290px]'>
                    <div className='bg-[#f0f0f0] rounded-full w-[60px] h-[60px] grid place-items-center text-main text-2xl'>
                        <MdEmail />
                    </div>
                    <h2 className='font-bold text-center text-[16px] sm:text-[20px] text-[#2a2a2a]'>{t('info.email')}</h2>
                    <a className='text-main text-center' href="mailto:zamontour@mail.ru">zamontour@mail.ru</a>
                </div>
                <div className='md:w-[33%] px-4 w-full bg-white shadow-card rounded-2xl flex flex-col items-center justify-center gap-5 h-[290px]'>
                    <div className='bg-[#f0f0f0] rounded-full w-[60px] h-[60px] grid place-items-center text-main text-2xl'>
                        <FaLocationDot/>
                    </div>
                    <h2 className='font-bold text-center text-[16px] sm:text-[20px] text-[#2a2a2a]'>{t('info.location')}</h2>
                    <a className='text-main text-center' href="https://www.google.com/maps/search/?api=1&query=41.31910462366305,69.29537753666203" target="_blank" rel="noopener noreferrer">{t('info.place')}</a>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Info