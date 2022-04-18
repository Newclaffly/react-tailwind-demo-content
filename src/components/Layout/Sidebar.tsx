import React, { useState } from 'react'

function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <div>
            {showSidebar ? (
                <div>
                    <button
                        className="fixed flex text-4xl text-white items-center cursor-pointer left-80 top-5 z-50"
                        onClick={() => setShowSidebar(!showSidebar)}
                    >
                        x
                    </button>

                    <div
                        className={`top-0 left-0 w-[34vw] bg-blue-mid 
                p-10 pl-auto text-white fixed h-full z-40 ease-in-out duration-300  translate-x-0 ${showSidebar ? "translate-x-0 " : "translate-x-full"}`}>
                        <div className="px-auto py-16 text-2xl font-semibold text-white text-center leading-8">
                            <div>
                                เช็คผล realtime
                            </div>
                            <div>
                                เปรียบเทียบผู้สมัคร
                            </div>
                            <div>
                                บทความ
                            </div>
                            <div>
                                workpoint today
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='fixed z-30 h-screen w-[90px] my-0 flex flex-col bg-layout-color
                border-2 border-solid  border-layout-color border-r-gray-500'>
                    <div className='relative items-center justify-center my-8 mt-8 mb-2 mx-auto cursor-pointer'
                        onClick={() => setShowSidebar(!showSidebar)}>
                        <div className="space-y-2">
                            <div className="w-8 h-0.5 bg-white"></div>
                            <div className="w-8 h-0.5 bg-white"></div>
                            <div className="w-8 h-0.5 bg-white"></div>
                        </div>
                    </div>
                    <div className='absolute bottom-0 items-center justify-center
                     pl-5 my-2 mb-8 mx-auto cursor-pointer'>
                        <div className="space-y-2">
                            <div className="text-center text-white">Share</div>
                            <div className="text-center text-white">Twiter</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Sidebar