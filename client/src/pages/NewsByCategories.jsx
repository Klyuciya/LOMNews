import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { EditItem } from '../components/EditItem'
import axios from '../utils/axios'
import { AiTwotoneEdit,
    AiFillDelete, } from 'react-icons/ai'

export const NewsByCategories = () => {
    const [news, setMyNews] = useState([])

    const fetchMyNews = async () => {
        try {
            const { data } = await axios.get('/news/user/my')
            setMyNews(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMyNews()
    }, [])

    return (
        <div className='w-1/2 mx-auto py-10 flex flex-col gap-10'>
            {news?.map((news, idx) => (
                <EditItem news={news} key={idx} />             
         
            ))}
        </div>
    )
}