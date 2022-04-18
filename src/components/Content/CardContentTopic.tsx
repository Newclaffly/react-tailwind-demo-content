import React from 'react'

function CardContent() {
  return (
    <div>
      {/* Manual topic */}
      <div className='grid grid-cols-3 gap-4 py-16 w-full'>
        <div className='rounded-xl  bg-card-color'>
          <div className='text-2xl text-white text-center py-5 font-bold '>
            คู่มือการเลือกตั้ง
          </div>
          <img src="https://bkk2022.pages.dev/contents/feature_1.png" alt="/" className=' rounded-b-xl object-cover' />
        </div>
        <div className='rounded-xl bg-card-color'>
          <div className='text-2xl text-white text-center py-5 font-bold'>
            สารพัดปัญหากรุงเทพ
          </div>
          <img src="https://bkk2022.pages.dev/contents/feature_2.png" alt="/" className=' rounded-b-xl object-cover' />
        </div>
        <div className='rounded-xl   bg-card-color'>
          <div className='text-2xl text-white text-center py-5 font-bold'>
            เกมโชว์วิสัยทัศน์
          </div>
          <img src="https://bkk2022.pages.dev/contents/feature_3.png" alt="/" className=' rounded-b-xl object-cover' />
        </div>
      </div>
    </div>
  )
}

export default CardContent