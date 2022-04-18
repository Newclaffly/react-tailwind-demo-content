import React from 'react'
interface ICardcontentProps {
    header: string,
    url_image: string
}
function CardContent(props: ICardcontentProps) {
    return (
        <div>
            {/* Manual topic */}
            <div className='rounded-xl  bg-card-color'>
                <div className='text-2xl text-white text-center py-5 font-bold '>
                    {props.header}
                </div>
                <img src={props.url_image} alt="/" className=' rounded-b-xl object-cover' />
            </div>
        </div>
    )
}

export default CardContent