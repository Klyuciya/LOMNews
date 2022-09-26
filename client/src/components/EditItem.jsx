import React from 'react'
import { AiFillEye, AiOutlineMessage, AiTwotoneEdit,
    AiFillDelete, } from 'react-icons/ai'
import Moment from 'react-moment'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { deleteMyNews } from '../redux/features/news/singleNewsSlice'
import { toast } from 'react-toastify'
import axios from '../utils/axios'

import { useDispatch, useSelector } from 'react-redux'


export const EditItem = ({ news }) => {

    const { user } = useSelector((state) => state.auth)
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()


       const removeNewsHandler = () => {
        try {
            dispatch(deleteMyNews(news._id))
            toast('Пост был удален')
            navigate('/news')
            console.log(news._id)
        } catch (error) {
            console.log(error)
        }
    }

    if (!news) {
        return (
            <div className='text-xl text-center py-10'>
                {/* Loading... */}
            </div>
        )
    }


    return (

        <Link to={`/news/${news._id}`}>
            <div className='flex flex-col basis-1/4 flex-grow'>
                <div
                    className={
                        news.image? 'flex rouded-sm h-80' : 'flex rounded-sm'
                    }
                >
                    {news.image && (
                        <img
                            src={`http://localhost:3002/${news.image}`}
                            alt='img'
                        />
                    )}
                </div>
                
                <div className='flex justify-between items-center pt-2'>
                    <div className='text-xs  opacity-50'>

                        {news.author}
                    </div>
                    <div className='text-xs  opacity-50'>
                        <Moment date={news.createdAt} format='D MMM YYYY' />
                    </div>
                </div>
                <div className=' text-xl'>{news.title}</div>
                <p className=' opacity-60 text-xs pt-4 line-clamp-4'>
                    {news.newsText}
                </p>

                <div className='flex gap-3 items-center mt-2'>
                    <button className='flex items-center justify-center gap-2 text-xs opacity-50'>
                        <AiFillEye /> <span>{news.viewsQty}</span>
                    </button>
                    <button className='flex items-center justify-center gap-2 text-xs  opacity-50'>
                        <AiOutlineMessage />{' '}
                        <span>{news.comments?.length || 0} </span>
                    </button>
                </div>
            

                {user?._id === news.author && (
                            <div className='flex gap-3 mt-4'>
                                <button className='flex items-center justify-center gap-2 text-dark opacity-50'>
                                    <Link to={`/edit/${news._id}`}>
                                        <AiTwotoneEdit />
                                    </Link>
                                </button>
                                <button
                                    onClick={removeNewsHandler}
                                    className='flex items-center justify-center gap-2  text-dark opacity-50'
                                >
                                    <AiFillDelete />
                                </button>
                            </div>
                        )} 

            </div>
        </Link>
    )
}