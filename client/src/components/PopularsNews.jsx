import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillEye, AiOutlineMessage } from 'react-icons/ai'
import Moment from 'react-moment'


export const PopularsNews = ({ news }) => {
    return (
        <Link to={`news/${news._id}`} style={{textDecoration: 'none'}}> 
        <div className='d-flex flex-row pop_news'>
            
            <div className='col-4'> {news.image && (
                        <img width="50px" src={`http://localhost:3002/${news.image}`}
                            alt='img'
                        />)}
                {/* <div  className={
                        news.image? 'flex rouded-sm h-80' : 'col-9'
                    }
                >
                    
                    )}
                </div> */}
                </div>
                <div className='col-8'>
                    <p class="text-body fs-6">{news.title}</p>
                <p class="text-muted">{news.authorName}</p>
                
                </div>
                    {/* <div className='text-xs  opacity-50'>


                        {news.author}
                    </div> */}
    
                    {/* <div className=' text-xl'>{news.title}</div>
                        <Moment date={news.createdAt} format='D MMM YYYY' />
                    </div>
               */}
                
                {/* <p className=' opacity-60 text-xs pt-4 line-clamp-4'>
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
                </div> */}
   
        </div>
        </Link>
    )
}