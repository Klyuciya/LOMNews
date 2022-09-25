import React from "react";
import { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editMyNews } from '../redux/features/news/singleNewsSlice'

import axios from '../utils/axios'

export const EditNews = () => {
  const [title, setTitle] = useState('')
  const [newsText, setNewsText] = useState('')
  const [image, setImage] = useState('')
  const [newImage, setNewImage] = useState('')
  const [tags, setTags] = useState('')


  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()

  const fetchNews = useCallback(async () => {
      const { data } = await axios.get(`/news/${params.id}`)
      setTitle(data.title)
      setNewsText(data.newsText)
      setImage(data.image)
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
          dispatch(editMyNews(updatedNews, params.id))
          navigate('/news/user/my')
        //   console.log("params.id" + params.id)
        // console.log("updateNws:" + updatedNews)
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
      <form
          className='w-1/3 mx-auto py-10'
          onSubmit={(e) => e.preventDefault()}
      >
          <label className='text-gray-300 py-2 bg-gray-600 text-xs mt-2 flex items-center justify-center border-2 border-dotted cursor-pointer'>
              Upload a new image:
              <input
                  type='file'
                  className='hidden'
                  onChange={(e) => {
                      setNewImage(e.target.files[0])
                      setImage('')
                  }}
              />
          </label> 
          <div className='flex object-cover py-2'>
              {image && (
                  <img
                      src={`http://localhost:3002/${image}`}
                      alt={image.name}
                  />
              )}
              {newImage && (
                  <img
                      src={URL.createObjectURL(newImage)}
                      alt={newImage.name}
                  />
              )}
          </div>

          <label className='text-xs text-white opacity-70'>
              Title:
              <input
                  type='text'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder='title'
                  className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700'
              />
          </label>

          <label className='text-xs text-white opacity-70'>
              Body:
              <textarea
                  onChange={(e) => setNewsText(e.target.value)}
                  value={newsText}
                  placeholder='Text of the news'
                  className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none resize-none h-40 placeholder:text-gray-700'
              />
          </label>

          <label className='text-xs text-white opacity-70'>
              Tags 
              <input 
              type="text" 
              value={tags}
              onChange={(e)=>setTags(e.target.value)}
              placeholder = 'tags'
              className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700'/>
          </label>


          <div className='flex gap-8 items-center justify-center mt-4'>
              <button type="button"
                  onClick={submitHandler}
                  className='flex justify-center items-center bg-gray-600 text-xs rounded-sm py-2 px-4'
              >
                  Update
              </button>

              <button
                  onClick={clearFormHandler}
                  className='flex justify-center items-center bg-red-500 text-xs rounded-sm py-2 px-4'
              >
                  Cancel
              </button>
          </div>
      </form>
  )
}