import React from 'react'
import { Link } from 'react-router-dom'

export const PopularNews = ({ news }) => {
    return (
        <div className='bg-gray-600 my-1'>
            <Link
                to={`${news._id}`}
                className='flex text-xs p-2 text-gray-300 hover:bg-gray-800 hover:text-black'
            >
                {news.title}
            </Link>
        </div>
    )
}