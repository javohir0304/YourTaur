import React from 'react'
import Container from '../utils/Container'
import DestinationCard from './Destination/DestinationCard'
import dubai from "../assets/dubai2.jpg"
import antalya from "../assets/antalya2.jpg"
import istanbul from "../assets/istanbul2.jpg"
import sharm from "../assets/sharm2.jpg"
import { useTranslation } from 'react-i18next';

const Visit = () => {
  const {t}=useTranslation()
  return (
    <div className='mt-28'>
        <Container>
            <div>
                <h2 className='font-bold text-2xl md:text-3xl text-[#2a2a2a]'>{t('visit.h2')}</h2>
                <p className='text-[15px] text-[#AFAFAF] max-w-[455px] leading-7 my-5'>{t('visit.p')}</p>
                <DestinationCard img={dubai} title={t('banner3.h1')} subtitle={t('visitCard.1.subtitle')} parag={t('visitCard.1.parag')} population={'8.66'} territory={'41.290'} price={'1.100.200'}/>
                <div className='w-full h-[1px] bg-[#eeeeee] mb-10'></div>
                <DestinationCard img={antalya} title={t('banner2.h1')} subtitle={t('visitCard.2.subtitle')} parag={t('visitCard.2.parag')} population={'44.48'} territory={'275.400'} price={'946.000'}/>
                <div className='w-full h-[1px] bg-[#eeeeee] mb-10'></div>
                <DestinationCard img={sharm} title={t('banner4.h1')} subtitle={t('visitCard.3.subtitle')} parag={t('visitCard.3.parag')} population={'67.41'} territory={'551.500'} price={'425.600'}/>
                <div className='w-full h-[1px] bg-[#eeeeee] mb-10'></div>
                <DestinationCard img={istanbul} title={t('banner1.h1')} subtitle={t('visitCard.4.subtitle')} parag={t('visitCard.4.parag')} population={'44.48'} territory={'275.400'} price={'946.000'}/>
            </div>
        </Container>
    </div>
  )
}

export default Visit