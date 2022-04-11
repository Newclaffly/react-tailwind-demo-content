import React from 'react'

function Layout() {
    return (
        <div className="w-screen h-full bg-gray-800">
            <div className='absolute top-1 right-0'>
                <button className='border border-slate-300 text-center text-black rounded-full'>ผลการเลือกตั้ง</button>
            </div>
            <h1 className='text-2xl w-screen text-center text-white'>Main content</h1>
        </div>
    )
}

export default Layout