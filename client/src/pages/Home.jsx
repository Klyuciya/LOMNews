import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PopularNews } from '../components/PopularNews'
import { NewsItem } from '../components/NewsItem'
import {  getAllNews } from '../redux/features/news/singleNewsSlice'
// import { getMe } from '../redux/features/auth/authSlice'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const Home = () => {

  const dispatch = useDispatch()
  const { news, popularNews} = useSelector((state) =>state.news)
 
//   console.log(news)
//   console.log(popularNews)
// const {data} = useSelector((state) =>state.auth.data)

// const {data} = useSelector((state) =>state.auth)

// const isMatching = "Matching!";
// if (data?._id === news.author){
// console.log(isMatching);
// }else{
//   console.log(notMatching)
// }

  useEffect(() => {
      dispatch(getAllNews())
  }, [dispatch])

  if (!news.length) {
      return (
          <div className='text-center py-10'>
              No news yet.
          </div>
      )
  }

  return (
    <Container>
        <Row>
   
      <Col lg={8} md={10} sm={12} >
               <div className='flex flex-col gap-10 basis-4/5'>
                  {news?.map((news, idx) => ( 
                        <NewsItem key={idx} news={news} />
                   ))}
              </div>
            </Col>

              <Col sm={4} md={2}>
                  <div className='flex fs-5 fw-bold offset-2 '>
                      Popular:
                  </div>
                  {popularNews?.map((news, idx) => (
                      <PopularNews key={idx} news={news} />
                  ))}
              </Col>
         
      </Row>
      </Container>
  )
}