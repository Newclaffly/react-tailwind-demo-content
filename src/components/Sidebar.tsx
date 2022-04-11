import React, { useState } from 'react'

function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <>
            <div className='fixed top-0 left-0 h-screen w-[90px] m-0
        flex flex-col
        bg-gray-800
        border-white'>
                <div className='relative items-center justify-center
             h-12 w-12 pl-2 mt-8 mb-2 mx-auto'>
                    <div className="space-y-2">
                        <div className="w-8 h-0.5 bg-white"></div>
                        <div className="w-8 h-0.5 bg-white"></div>
                        <div className="w-8 h-0.5 bg-white"></div>
                    </div>
                </div>
                <div className='absolute bottom-0 items-center justify-center
               pl-5 h-12 w-12 mb-8 mx-auto'>
                    <div className="space-y-2">
                        <div className="text-center text-white">Share</div>
                        <div className="text-center text-white">Twiter</div>
                    </div>
                </div>
            </div>

            {/* {showSidebar ? (
                <button
                    className=" fixed flex text-4xl text-black items-center cursor-pointer pl-20 right-10 top-6 z-50"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    x
                </button>
            ) : (
                <div className='bg-black'>
                    <div className="fixed z-30 flex items-center cursor -pointer right-10 top-6 border-5"
                        onClick={() => setShowSidebar(!showSidebar)}
                    >
                        <svg
                            fill="#2563EB"
                            viewBox="0 0 100 80"
                            width="40"
                            height="40"
                        >
                            <rect width="100" height="10"></rect>
                            <rect y="30" width="100" height="10"></rect>
                            <rect y="60" width="100" height="10"></rect>
                        </svg>
                    </div>
                </div>

            )}
      
          


            <div
                className={`top-0 right-0 w-[35vw] bg-blue-600
                p-10 pl-20 text-white fixed h-full z-40 ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
                    }`}>
                <h3 className="mt-20 text-4xl font-semibold text-white">
                    I am a sidebar
                </h3>
            </div> */}

        </>
    )
}

export default Sidebar