import React, { useState } from "react";
import Container from "../utils/Container";
import { FaExpand } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import dubai from "../assets/best-dubai.jpg"
import antalya from "../assets/best-antalya.jpg"
import istanbul from "../assets/best-istanbul.jpg"
import sharm from "../assets/best-sharm.jpg"

const Best = () => {
    const {t}=useTranslation()
    const [active,setActive]=useState('1')
  return (
    <div className="mt-40 mb-20 max-w-[1599px] mx-auto px-[20px]">
      {/* <Container> */}
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-2xl md:text-3xl">{t('best.h2')}</h2>
          <p className="max-w-[632px] text-[15px] text-[#afafaf] text-center mt-7 mb-20">
            {t('best.p')}
          </p>
          <div className="flex items-center justify-center gap-8 w-[90%]">
            <div onClick={e=>setActive('1')} style={active=='1'?{backgroundImage:`url(${dubai})`,width:"70%"}:{backgroundImage:"url(https://zamontour.uz/assets/images/dubai.jpg"}} className="flex items-end justify-start rounded-3xl h-[400px] w-[9%] p-3 bg-cover bg-center cursor-pointer transition-all duration-500 ">
                <div className="flex items-center gap-4">
                    <div className="bg-white text-main h-[40px] w-[40px] rounded-full grid place-items-center">
                        <FaExpand/>
                    </div>
                    <div className={`${active!='1'&&'hidden'}`}>
                        <p className="text-white text-xl font-bold">{t('banner3.h1')}</p>
                        <p className="text-white text-[14px] font-semibold">{t('banner3.population')} 2 {t('visitCard.mil')}</p>
                    </div>
                </div>
            </div>
            <div onClick={e=>setActive('2')} style={active=='2'?{backgroundImage:`url(${antalya})`,width:"70%"}:{backgroundImage:"url(https://zamontour.uz/assets/images/antalya.jpg)"}} className="flex justify-start items-end rounded-3xl h-[400px] w-[9%] p-3 bg-cover bg-center cursor-pointer transition-all duration-500">
                <div className="flex items-center gap-4">
                    <div className="bg-white text-main h-[40px] w-[40px] rounded-full grid place-items-center">
                        <FaExpand/>
                    </div>
                    <div className={`${active!='2'&&'hidden'}`}>
                        <p className="text-white text-xl font-bold">{t('banner2.h1')}</p>
                        <p className="text-white text-[14px] font-semibold">{t('banner3.population')} 3.5 {t('visitCard.mil')}</p>
                    </div>
                </div>
            </div>
            <div onClick={e=>setActive('3')} style={active=='3'?{backgroundImage:`url(${istanbul})`,width:"70%"}:{backgroundImage:"url(https://zamontour.uz/assets/images/istanbul.jpg)"}} className="flex justify-start items-end rounded-3xl h-[400px] w-[9%] p-3 bg-cover bg-center cursor-pointer transition-all duration-500">
                <div className="flex items-center gap-4">
                    <div className="bg-white text-main h-[40px] w-[40px] rounded-full grid place-items-center">
                        <FaExpand/>
                    </div>
                    <div className={`${active!='3'&&'hidden'}`}>
                        <p className="text-white text-xl font-bold">{t('banner1.h1')}</p>
                        <p className="text-white text-[14px] font-semibold">{t('banner3.population')} 4.1 {t('visitCard.mil')}</p>
                    </div>
                </div>
            </div>
            <div onClick={e=>setActive('4')} style={active=='4'?{backgroundImage:`url(${sharm})`,width:"70%"}:{backgroundImage:"url(https://zamontour.uz/assets/images/sharm.jpg)"}} className=" justify-start items-end rounded-3xl h-[400px] w-[9%] p-3 bg-cover bg-center cursor-pointer transition-all duration-500 hidden lg:flex">
                <div className="flex items-center gap-4">
                    <div className="bg-white text-main h-[40px] w-[40px] rounded-full grid place-items-center">
                        <FaExpand/>
                    </div>
                    <div className={`${active!='4'&&'hidden'}`}>
                        <p className="text-white text-xl font-bold">{t('banner4.h1')}</p>
                        <p className="text-white text-[14px] font-semibold">{t('banner3.population')} 4 {t('visitCard.mil')}</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      {/* </Container> */}
    </div>
  );
};

export default Best;
