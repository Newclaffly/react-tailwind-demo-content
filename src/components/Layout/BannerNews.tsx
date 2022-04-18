import React from 'react'

function BannerNews() {
  return (
    <>
      <div className='absolute top-4 right-5'>
        <button className='text-center text-black rounded-full bg-orange-300 '>ผลการเลือกตั้ง</button>
      </div>
      <div className='px-90 flex pt-16 flex-row'>
        <img src="https://bkk2022.pages.dev/logo/logoBkk.png" alt="/" className='w-[100px]' />
        <img src="https://bkk2022.pages.dev/logo/logo-TODAY-new.png" alt="/" className='w-[100px]' />
      </div>
    </>
  )
}

export default BannerNews