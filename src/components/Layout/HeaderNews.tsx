import React from 'react'
import {FaShareAlt } from "react-icons/fa";

function HeaderNews() {
    return (
        <div>
            <div className='text-4xl text-white font-bold'>
                เกาะติดเลือกตั้งผู้ว่าฯ กรุงเทพ
            </div>
            <div className='text-1xl text-white my-4'>
                นับถอยหลังสู่การเลือกตั้งผู้ว่าฯ กรุงเทพไปพร้อมกับ workpointTODAY อัปเดตข่าวสาร นโยบาย และติดตามการนับคะแนนแบบเรียลไทม์
            </div>
            <div className='right-0 absolute mx-auto'>
                <button type='button' className='rounded-full bg-card-color h-[40px] w-[120px] text-white flex  text-center items-center pl-4'><FaShareAlt className='mr-2'/> แชร์หน้านี้</button>
            </div>
        </div>
    )
}

export default HeaderNews