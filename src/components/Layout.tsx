import React from 'react'

function Layout() {
    return (
        <>
            <div className="px-3 bg-gray-800 max-h-full max-w-full">
                <div className='absolute top-4 right-3'>
                    <button className='text-center text-black rounded-full bg-orange-300 '>ผลการเลือกตั้ง</button>
                </div>
                <div className='mx-32 px-90 flex pt-16 flex-row'>
                    <img src="https://bkk2022.pages.dev/logo/logoBkk.png" alt="/" className='w-[100px]' />
                    <img src="https://bkk2022.pages.dev/logo/logo-TODAY-new.png" alt="/" className='w-[100px]' />
                </div>
                <div className='mx-32 my-4 relative'>
                    <div className='text-4xl text-white font-bold'>
                        เกาะติดเลือกตั้งผู้ว่าฯ กรุงเทพ
                    </div>
                    <div className='text-1xl text-white my-4'>
                        นับถอยหลังสู่การเลือกตั้งผู้ว่าฯ กรุงเทพไปพร้อมกับ workpointTODAY อัปเดตข่าวสาร นโยบาย และติดตามการนับคะแนนแบบเรียลไทม์
                    </div>
                    <div className='right-0  px-4'>
                        <button type='button' className='rounded-full bg-gray-500  text-white '>แชร์หน้านี้</button>
                    </div>

                    {/* Manual topic */}
                    <div className='grid grid-cols-3 gap-4 py-16  w-full'>
                        <div className='rounded-xl  bg-gray-700'>
                            <div className='text-1xl text-white text-center py-5 '>
                                คู่มือการเลือกตั้ง
                            </div>
                            <img src="https://bkk2022.pages.dev/contents/feature_1.png" alt="/" className=' rounded-b-xl object-cover' />
                        </div>
                        <div className='rounded-xl   bg-gray-700'>
                            <div className='text-1xl text-white text-center py-5 '>
                                สารพัดปัญหากรุงเทพ
                            </div>
                            <img src="https://bkk2022.pages.dev/contents/feature_2.png" alt="/" className=' rounded-b-xl object-cover' />
                        </div>
                        <div className='rounded-xl   bg-gray-700'>
                            <div className='text-1xl text-white text-center py-5 '>
                                เกมโชว์วิสัยทัศน์
                            </div>
                            <img src="https://bkk2022.pages.dev/contents/feature_3.png" alt="/" className=' rounded-b-xl object-cover' />
                        </div>
                    </div>

                    {/* Content news */}
                    <div className='text-4xl text-white font-bold'>
                        ข่าวอัพเดต
                    </div>
                    <div className='grid grid-cols-3 gap-4 py-10 w-full'>
                        <div className='rounded-xl  bg-gray-700'>
                            <img src="https://images.workpointnews.com/workpointnews/2022/04/09204105/1649511662_75575_11111.jpg" alt="/" className=' rounded-t-xl object-cover' />
                            <div className='text-1xl text-white text-left px-3 py-5 '>
                                ซูเปอร์โพล เผยผลสำรวจสเปคผู้ว่าฯ กทม. ในฝัน กลุ่มตัวอย่าง 48.7% ยังไม่ตัดสินใจเลือกใคร
                            </div>
                        </div>
                        <div className='rounded-xl  bg-gray-700'>
                            <img src="https://images.workpointnews.com/workpointnews/2022/04/09125413/1649483650_77847_web22.jpg" alt="/" className=' rounded-t-xl object-cover' />
                            <div className='text-1xl text-white text-left px-3 py-5 '>
                                ชัชชาติ จับมือ ปวีณา หาเสียงบนรถ EV ในวันที่ PM2.5 พุ่งสูง ย้ำ อากาศบริสุทธิ์เป็นสิทธิขั้นพื้นฐานของทุกคน
                            </div>
                        </div>
                        <div className='rounded-xl  bg-gray-700'>
                            <img src="https://images.workpointnews.com/workpointnews/2022/04/08214359/1649429036_52687_.jpg" alt="/" className=' rounded-t-xl object-cover' />
                            <div className='text-1xl text-white text-left px-3 py-5 '>
                                กทม.แจงแผนการจัดการเลือกตั้ง ขอแจ้งเพิ่ม – ถอนชื่อ ถึงวันที่ 11 พ.ค.65
                            </div>
                        </div>
                        <div className='rounded-xl  bg-gray-700'>
                            <img src="https://bkk2022.pages.dev/contents/feature_1.png" alt="/" className=' rounded-t-xl object-cover' />
                            <div className='text-1xl text-white text-left px-3 py-5 '>
                                คู่มือการเลือกตั้ง
                            </div>
                        </div>
                        <div className='rounded-xl  bg-gray-700'>
                            <img src="https://bkk2022.pages.dev/contents/feature_1.png" alt="/" className=' rounded-t-xl object-cover' />
                            <div className='text-1xl text-white text-left px-3 py-5 '>
                                คู่มือการเลือกตั้ง
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>


    )
}

export default Layout