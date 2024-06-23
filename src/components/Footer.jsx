import React from 'react'
import footerImg from "../assets/footer.jpg"
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const {t}=useTranslation()
  return (
    <div>
        <div className='bg-cover bg-center bg-no-repeat h-[240px] flex items-center' style={{backgroundImage:`url(${footerImg})`}}>
                <div className='flex flex-col lg:flex-row gap-y-10 items-center justify-between w-full max-w-[1320px] mx-auto px-5'>
                    <div className='text-center lg:text-left'>
                        <h2 className='text-white sm:text-3xl text-2xl lg:text-[40px] font-bold'>{t('footer.h2')}</h2>
                        <p className='text-white text-sm sm:text-md lg:text-xl font-semibold mt-3 lg:mt-2'>{t('footer.p')}</p>
                    </div>
                    <button className='border-[1px] sm:text-lg text-sm border-white text-white bg-main rounded-3xl h-[40px] lg:h-[47px] px-8 hover:bg-white hover:text-main transition-colors duration-300'><a href="#info">{t('button.book')}</a></button>
                </div>
        </div>
        <div className='text-center bg-main text-[12px] sm:text-[15px] px-[20px] text-white h-[80px] flex items-center justify-center'>
            <strong>Copyright &copy; 2024 Zamon Tour. All rights reserved.</strong>
        </div>
    </div>
  )
}

export default Footer