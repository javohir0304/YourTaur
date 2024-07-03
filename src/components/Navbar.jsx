import React, { useState } from 'react'
import Container from '../utils/Container'
import logo from "../assets/yourLogo.png"
import { FaTelegram,FaInstagram  } from "react-icons/fa";
import i18next from '../i18next/i18next';
import { useTranslation } from 'react-i18next';
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCancelCircle } from "react-icons/im";

const Navbar = () => {
    const {t}=useTranslation()
    function changeLang(lang){
        i18next.changeLanguage(lang)
    }
    const [open,setOpen]=useState(false)
  return (
    <div className={`py-6 bg-main sticky top-0 left-0 z-50 ${open?'overflow-visible':'overflow-hidden'}`}>
        <Container>
            <div className='flex items-center h-full'>
                <div className='flex-1'>
                    <a href="#">
                        <img style={{width:"60px", height:"40px"}} src={logo} alt="" />
                    </a>
                </div>
                <div className='lg:flex lg:gap-x-36 hidden'>
                    <ul className='flex gap-x-8'>
                        <li><a className='text-white hover:text-black transition-colors duration-300 text-lg' href="#">{t("nav.home")}</a></li>
                        <li><a className='text-white hover:text-black transition-colors duration-300 text-lg' href="#destination">{t("nav.about")}</a></li>
                        <li><a className='text-white hover:text-black transition-colors duration-300 text-lg' href="#weekly">{t("nav.tours")}</a></li>
                        <li><a className='text-white hover:text-black transition-colors duration-300 text-lg' href="#info">{t("nav.contact")}</a></li>
                    </ul>
                    <div className='flex gap-x-3 items-center'>
                        <button onClick={e=>{changeLang("uz")}} className='text-white hover:text-black transition-colors duration-300'>UZ</button>
                        <button onClick={e=>{changeLang("en")}} className='text-white hover:text-black transition-colors duration-300'>ENG</button>
                        <button onClick={e=>{changeLang("ru")}} className='text-white hover:text-black transition-colors duration-300'>RU</button>
                        <a className='text-white text-xl hover:text-black transition-colors duration-300' href="https://t.me/tourcompany"><FaTelegram /></a>
                        <a className='text-white text-xl hover:text-black transition-colors duration-300' href="https://www.instagram.com/tourcompany/"><FaInstagram /></a>
                    </div>
                </div>

                <div className='block lg:hidden'>
                    {
                        !open?
                        <RxHamburgerMenu onClick={e=>setOpen(true)} className='text-4xl text-white'/>
                        :
                        <ImCancelCircle onClick={e=>setOpen(false)} className='text-4xl text-white'/>
                    }
                </div>

                <div className={`lg:hidden bg-[#f7f7f7] w-[70%] py-8 absolute top-[100%] left-[65%] ${!open?'translate-x-[120%]':'translate-x-[-50%]'} transition-transform duration-500`}>
                    <ul className='flex flex-col gap-4 items-center'>
                        <li onClick={e=>setOpen(false)} className='border-b-[1px] border-[#afafaf] w-full text-center pb-4'><a className='text-black hover:text-black transition-colors duration-300 text-lg' href="#">{t("nav.home")}</a></li>
                        <li onClick={e=>setOpen(false)} className='border-b-[1px] border-[#afafaf] w-full text-center pb-4'><a className='text-black hover:text-black transition-colors duration-300 text-lg' href="#destination">{t("nav.about")}</a></li>
                        <li onClick={e=>setOpen(false)} className='border-b-[1px] border-[#afafaf] w-full text-center pb-4'><a className='text-black hover:text-black transition-colors duration-300 text-lg' href="#weekly">{t("nav.tours")}</a></li>
                        <li onClick={e=>setOpen(false)} className='border-b-[1px] border-[#afafaf] w-full text-center pb-4'><a className='text-black hover:text-black transition-colors duration-300 text-lg' href="#info">{t("nav.contact")}</a></li>
                        <li onClick={e=>setOpen(false)} className='border-b-[1px] border-[#afafaf] w-full text-center pb-4'><button onClick={e=>{changeLang("uz")}} className='text-black hover:text-black transition-colors duration-300'>UZ</button></li>
                        <li onClick={e=>setOpen(false)} className='border-b-[1px] border-[#afafaf] w-full text-center pb-4'><button onClick={e=>{changeLang("en")}} className='text-black hover:text-black transition-colors duration-300'>ENG</button></li>
                        <li onClick={e=>setOpen(false)} className='border-b-[1px] border-[#afafaf] w-full text-center pb-4'><button onClick={e=>{changeLang("ru")}} className='text-black hover:text-black transition-colors duration-300'>RU</button></li>
                        <li onClick={e=>setOpen(false)} className='border-b-[1px] border-[#afafaf] w-full text-center pb-4'><a className='text-black text-xl hover:text-black transition-colors duration-300 flex justify-center' href="https://t.me/tourcompany"><FaTelegram /></a></li>
                        <li onClick={e=>setOpen(false)} ><a className='text-black text-xl hover:text-black transition-colors duration-300' href="https://www.instagram.com/tourcompany/"><FaInstagram /></a></li>
                    </ul>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Navbar