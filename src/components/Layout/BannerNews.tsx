import React from 'react'
import { FaHotjar } from "react-icons/fa";

function BannerNews() {
  return (
    <>
      <div className='absolute top-4 right-5 mx-auto  '>
        <button className='text-center items-center text-black rounded-full bg-orange-300 w-[138px] h-[40px] flex pl-2'>ผลการเลือกตั้ง <FaHotjar className='ml-2' /></button>
      </div>
      <div className='px-90 flex pt-16 flex-row'>
        <img src="https://bkk2022.pages.dev/logo/logoBkk.png" alt="/" className='w-[100px]' />
        <img src="https://bkk2022.pages.dev/logo/logo-TODAY-new.png" alt="/" className='w-[100px]' />
      </div>
    </>
  )
}

export default BannerNews