import React, { useState } from 'react'
import Container from '../utils/Container'
import {useForm} from "react-hook-form"
import axios from 'axios'
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import spinner from "../assets/spinner.svg"
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

const Form = () => {
    const scheme=z.object({
        name:z.string().min(3,{message:"Please enter name"}),
        number:z.string().refine((value)=>/^\+?[0-9]{12}$/.test(value??""),"Please enter number"),
        guests: z.string().min(1,{message:"Please select number of guests"}),
        date: z.string().min(1, { message: "Please select date" }),
        destination: z.string().min(1, { message: "Please select a destination" }),
        visa: z.string().min(1, { message: "Please select a visa support" })
    })
    const {t} = useTranslation()
    const {handleSubmit,register,setError,clearErrors,reset, formState: { errors,isDirty, isSubmitting }}=useForm({
        resolver: zodResolver(scheme)
    })
    const [selectGuests,setSelectGuests]=useState("")
    const [selectDestination,setSelectDestination]=useState("")
    const [selectVisa,setSelectVisa]=useState("")


    const onSubmit=async ({name,number,guests,date,destination,visa})=>{
        try{
            const token='7077947189:AAEDmVpN8vR8mE3cRR59vdhIaXXFRYizOok'
            const chat_id='6514231707'
            const url=`https://api.telegram.org/bot${token}/sendMessage`
            const message=`Ismi:${name}\n Telefon:${number}\n Necha kishi:${guests}\n Sanasi:${date}\n Qayerga:${destination}\n Viza:${visa}`
            const res=await axios({url:url,method:"POST",data:{'chat_id':chat_id,'text':message}})
            reset()
            setSelectDestination("")
            setSelectGuests("")
            setSelectVisa("")
            toast.success(t('formsent.success'))
        }
        catch{
            // setError("root",{
            //     message:"Xatolik beryapti qayta urinib ko'ring"
            // })
            toast.error(t('formsent.error'))
        }
    }
  return (
    <div className='mb-28'>
        <Container>
            <div className='bg-[#f9f9f9] p-6 rounded-b-3xl shadow-card flex flex-col items-center pb-16'>
                <h2 className='font-bold sm:text-3xl text-xl my-12 text-center'>{t('form.h2.f')} <span className='text-main'>{t('form.h2.s')}</span> {t('form.h2.t')} <span className='text-main'>{t('form.h2.fo')}</span></h2>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6 w-[80%]'>
                    <div className='flex min-[1000px]:flex-row flex-col justify-between gap-10'>
                        <div className='w-full flex flex-col gap-2'>
                            <label htmlFor="name">{t('form.name')}</label>
                            <input style={errors.name&&{border:"1px solid red"}} {...register('name')} id='name'  className={`w-full sm:text-lg text-[12px]  bg-none rounded-2xl p-2 outline-none border-[1px] border-[#AFAFAF] placeholder:text-black`} type="text" placeholder={t('form.nameex')} />
                            <small className='-mt-2 ml-2 text-red-500'>{errors.name&&errors.name.message}</small>
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <label htmlFor="number">{t('form.phone')}</label>
                            <input style={errors.name&&{border:"1px solid red"}}  {...register('number')} id='number'  className={`w-full sm:text-lg text-[12px]  bg-none rounded-2xl p-2 outline-none border-[1px] border-[#AFAFAF] placeholder:text-black`} type="text" placeholder={t('form.phoneex')} />
                            <small className='-mt-2 ml-2 text-red-500'>{errors.number&&errors.number.message}</small>
                        </div>
                    </div>

                    <div className='flex min-[1000px]:flex-row flex-col justify-between gap-10'>
                        <div className='w-full flex flex-col gap-2'>
                            <label htmlFor="guests">{t('form.guests')}</label>
                            <select {...register('guests')} value={selectGuests} onChange={e=>{setSelectGuests(e.target.value);clearErrors('guests')}} className={`w-full sm:text-lg text-[12px] cursor-pointer bg-none rounded-2xl p-2 outline-none border-[1px] ${errors.guests?'border-red-500':'border-[#AFAFAF]'}`} id='guests'>
                                <option disabled hidden defaultValue={true} value="">{t('form.guestsex')}</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4+</option>
                            </select>
                            <small className='-mt-2 ml-2 text-red-500'>{errors.guests&&errors.guests.message}</small>
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <label htmlFor="date">{t('form.date')}</label>
                            <input style={errors.date&&{border:"1px solid red"}} {...register('date')} className='w-full sm:text-lg text-[12px] bg-none rounded-2xl cursor-pointer p-2 outline-none border-[1px] border-[#AFAFAF]' id='date' type="date" />
                            <small className='-mt-2 ml-2 text-red-500'>{errors.date&&errors.date.message}</small>
                        </div>
                        
                    <div className='w-full flex flex-col gap-2 '>
                        <label htmlFor="destination">{t('form.destination')}</label>
                        <select {...register('destination')}  id="destination" value={selectDestination} onChange={e=>{setSelectDestination(e.target.value);clearErrors("destination")}} className={`w-full sm:text-lg text-[12px] cursor-pointer bg-none rounded-2xl p-2 outline-none border-[1px] ${errors.destination?'border-red-500':'border-[#AFAFAF]'}`} >
                            <option disabled hidden defaultValue={true} value="">{t('form.destinationex')}</option>
                            <option value="Antalya">{t('banner2.h1')}</option>
                            <option value="Istanbul">{t('banner1.h1')}</option>
                            <option value="Dubai">{t('banner3.h1')}</option>
                            <option value="Sharm-El-Sheikh">{t('banner4.h1')}</option>
                            <option value="Kuala Lampur">{t('country.kuala')}</option>
                            <option value="Canada">{t('country.canada')}</option>
                            <option value="England">{t('country.england')}</option>
                        </select>
                        <small className='-mt-2 ml-2 text-red-500'>{errors.destination&&errors.destination.message}</small>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="visa">{t('form.visa')}</label>
                        <select {...register("visa")} id="visa" value={selectVisa} onChange={e=>{setSelectVisa(e.target.value);clearErrors("visa")}} className={`w-full sm:text-lg text-[12px] cursor-pointer bg-none rounded-2xl p-2 outline-none border-[1px] ${errors.visa?'border-red-500':'border-[#AFAFAF]'}`} >
                            <option disabled hidden defaultValue={true} value="">{t('form.visaex')}</option>
                            <option value="USA">{t('country.usa')}</option>
                            <option value="Europe">{t('country.europe')}</option>
                            <option value="England">{t('country.england')}</option>
                            <option value="Japan">{t('country.japan')}</option>
                            <option value="Oman">{t('country.oman')}</option>
                            <option value="Saudia Arabia">{t('country.saudia')}</option>
                            <option value="India">{t('country.india')}</option>
                            <option value="China">{t('country.china')}</option>
                            <option value="Hong Kong">{t('country.hong')}</option>
                        </select>
                        <small className='-mt-2 ml-2 text-red-500'>{errors.visa&&errors.visa.message}</small>
                    </div>
                    </div>

                    <button type='submit' disabled={!isDirty||isSubmitting}  className='bg-main h-12 text-white sm:text-lg text-sm rounded-3xl mt-4 hover:bg-white hover:border-main border-[1px] hover:text-main transition-colors duration-500 flex items-center justify-center'>
                        {
                            isSubmitting?
                            <img width={25} src={spinner} alt="" />
                            :
                            t('button.reservation.2')
                        }
                    </button>
                </form>
            </div>
        </Container>
    </div>
  )
}

export default Form