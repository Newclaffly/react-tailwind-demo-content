import React from 'react'

function HeaderNews() {
    return (
        <div>
            <div className='text-4xl text-white font-bold'>
                เกาะติดเลือกตั้งผู้ว่าฯ กรุงเทพ
            </div>
            <div className='text-1xl text-white my-4'>
                นับถอยหลังสู่การเลือกตั้งผู้ว่าฯ กรุงเทพไปพร้อมกับ workpointTODAY อัปเดตข่าวสาร นโยบาย และติดตามการนับคะแนนแบบเรียลไทม์
            </div>
            <div className='right-0 absolute px-4'>
                <button type='button' className='rounded-full bg-gray-500  text-white '>แชร์หน้านี้</button>
            </div>
        </div>
    )
}

export default HeaderNews