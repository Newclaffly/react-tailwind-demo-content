import React from 'react'
import CardContentNewsUpdate from '../Content/CardContentNewsUpdate'
import ContentTopic from '../Content/ContentTopic'
import BannerNews from './BannerNews'
import HeaderNews from './HeaderNews'

function Layout() {
    return (
        <div>
            <div className="bg-layout-color h-full w-full">
                <div className='pl-36 pr-12'>
                    <BannerNews />
                    <div className='my-0 relative'>
                        <HeaderNews />
                        {/* Manual topic */}
                        <ContentTopic />
                        {/* Content news */}
                        <CardContentNewsUpdate />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout