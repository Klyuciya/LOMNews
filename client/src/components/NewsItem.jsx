import React from 'react'
import { AiFillEye, AiOutlineMessage } from 'react-icons/ai'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

export const NewsItem = ({ news }) => {
    if (!news) {
        return (
            <div className='text-xl text-center text-white py-10'>
                Loading...
            </div>
        )
    }
    return (
        <Link to={`/${news._id}`}>
            <div className='flex flex-col basis-1/4 flex-grow'>
                <div
                    className={
                        news.imgUrl ? 'flex rouded-sm h-80' : 'flex rounded-sm'
                    }
                >
                    {news.imgUrl && (
                        <img
                            src={`http://localhost:3002/${news.imgUrl}`}
                            alt='img'
                            className='object-cover w-full'
                        />
                    )}
                </div>
                <div className='flex justify-between items-center pt-2'>
                    <div className='text-xs text-white opacity-50'>
                        {news.author}
                    </div>
                    <div className='text-xs text-white opacity-50'>
                        <Moment date={news.createdAt} format='D MMM YYYY' />
                    </div>
                </div>
                <div className='text-white text-xl'>{news.title}</div>
                <p className='text-white opacity-60 text-xs pt-4 line-clamp-4'>
                    {news.newsText}
                </p>

                <div className='flex gap-3 items-center mt-2'>
                    <button className='flex items-center justify-center gap-2 text-xs text-white opacity-50'>
                        <AiFillEye /> <span>{news.viewsQty}</span>
                    </button>
                    <button className='flex items-center justify-center gap-2 text-xs text-white opacity-50'>
                        <AiOutlineMessage />{' '}
                        <span>{news.comments?.length || 0} </span>
                    </button>
                </div>
            </div>
        </Link>
    )
}