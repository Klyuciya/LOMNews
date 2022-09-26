import React from "react";
import { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editMyNews } from '../redux/features/news/singleNewsSlice'

import axios from '../utils/axios'

export const EditNews = () => {

const [title, setTitle] = useState('');
const [newsText, setNewsText] = useState('');
const [oldImage, setOldImage] = useState('')
const [newImage, setNewImage] = useState('');
const [tags, setTags] = useState('');


  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()

  const fetchNews = useCallback(async () => {
      const { data } = await axios.get(`/news/${params.id}`)
      setTitle(data.title)
      setNewsText(data.newsText)
      setOldImage(data.image)
      setTags(data.tags)
  }, [params.id])

  const submitHandler = () => {
      try {
          const updatedNews = new FormData()
          updatedNews.append('id', params.id)
          updatedNews.append('title', title)
          updatedNews.append('newsText', newsText)
          updatedNews.append('image', newImage)
          updatedNews.append('tags', tags)
          dispatch(editMyNews(updatedNews))
          navigate('/news/user/my')
//         //   console.log("params.id" + params.id)
//         // console.log("updateNws:" + updatedNews)
      } catch (error) {
          console.log(error)
      }
  }

  const clearFormHandler = () => {
      setTitle('')
      setNewsText('')
      setTags('')
  }

  useEffect(() => {
      fetchNews()
  }, [fetchNews])

  return (
    <form onSubmit={(e)=> e.preventDefault()}>
<label className='text-gray-300 py-2 bg-gray-600 text-xs mt-2 flex items-center justify-center border-2 border-dotted cursor-pointer'>
                Прикрепить изорбажение:
    {/* <label>Upload a picture  */}
      <input 
      type='file' 
      className='hidden'
      onChange={(e)=>{
        setNewImage(e.target.files[0])
        setOldImage('')
        }}/>
        </label>
      {/* <div> */}
      <div className='flex object-cover py-2'>
                {oldImage && (
                    <img
                        src={`http://localhost:3002/${oldImage}`}
                        alt={oldImage.name}
                    />
                )}
                {newImage && (
                    <img
                        src={URL.createObjectURL(newImage)}
                        alt={newImage.name}
                    />
                )}
            </div>
     {/* {oldImage && (
        <img
            src={`http://localhost:3002/${oldImage}`}
            alt={oldImage.name}
        />
        )}
        {newImage && (
        <img 
            src={URL.createObjectURL(newImage)} 
            alt={newImage.name} />
        )}
        </div> */}
    <label>News Title 
      <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder = 'Title'/></label>
    
    <label>Body 
      <textarea onChange={(e)=>setNewsText(e.target.value)}  value={newsText} placeholder = 'Body of the news'/></label>
    
      <label>Tags 
      <input onChange={(e)=>setTags(e.target.value)}value={tags} type="text" placeholder = 'tags'/></label>
      
    <div>
      <button  type='submit' onClick={submitHandler} > Add </button>
      <button onClick={clearFormHandler} > Cancel </button>
    </div>
    
      </form>
  )
}