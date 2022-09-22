import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PopularNews } from '../components/PopularNews'
import { NewsItem } from '../components/NewsItem'
import { getAllNews } from '../redux/features/news/singleNewsSlice'


export const Home = () => {

  const dispatch = useDispatch()
  const { news, popularNews} = useSelector((state) =>state.news)

  // console.log(state.news)
  console.log(news)
//   console.log(popularNews)S

  useEffect(() => {
      dispatch(getAllNews())
  }, [dispatch])

  if (!news.length) {
      return (
          <div className='text-xl text-center py-10'>
              No news yet.
          </div>
      )
  }

  return (
      <div className='max-w-[900px] mx-auto py-10'>
           <div className='flex justify-between gap-8'>
               <div className='flex flex-col gap-10 basis-4/5'>
                  {news?.map((news, idx) => ( 
                        <NewsItem key={idx} news={news} />
                   ))}
              </div>
              <div className='basis-1/5'>
                  <div className='text-xs uppercase'>
                      Popular:
                  </div>

                  {popularNews?.map((news, idx) => (
                      <PopularNews key={idx} news={news} />
                  ))}
              </div>
          </div>
      </div>
  )
}