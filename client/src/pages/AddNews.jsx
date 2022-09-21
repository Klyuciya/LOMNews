import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createNews } from '../redux/features/news/singleNewsSlice';

export const AddNews = () => {

const [title, setTitle] = useState('');
const [newsText, setNewsText] = useState('');
const [image, setImage] = useState('');
const [tags, setTags] = useState('');
// const [category, setCategory] = useState('');

const dispatch = useDispatch()
const navigate = useNavigate()

const submitHandler = () => {
  try {
      const data = new FormData()
      data.append('title', title)
      data.append('newsText', newsText)
      data.append('image', image)
      data.append('tags', tags)
      // data.append('category', category)
      dispatch(createNews(data))
      navigate('/')
  } catch (error) {
      console.log(error)
  }
}
const clearFormHandler = () => {
  setNewsText('')
  setTitle('')
  setTags('')
  // setCategory('')
}


  return (
<form onSubmit={(e)=> e.preventDefault()}>

<label>Upload a picture 
  <input type="file" onChange={(e)=>setImage(e.target.files[0])}/></label>
  {/* <input type="url" onChange={(e)=>setImage(e.target.value)}/></label> */}

  <div>{image && (<img src={URL.createObjectURL(image)} alt={image.name} />)}</div>
 
<label>News Title 
  <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder = 'Title'/></label>

<label>Body 
  <textarea onChange={(e)=>setNewsText(e.target.value)}  value={newsText} placeholder = 'Body of the news'/></label>

  <label>Tags 
  <input onChange={(e)=>setTags(e.target.value)}value={tags} type="text" placeholder = 'tags'/></label>

  {/* <label>Category 
  <input onChange={(e)=>setCategory(e.target.value)} list="categories" />
  <datalist id="categories">
    <option value="politics"/>
    <option value="economy"/>
    <option value="fashion"/>
    <option value="nature"/>
    <option value="food"/>
  </datalist>
  </label> */}
  
<div>
  <button  type='submit' onClick={submitHandler} > Add </button>
  <button onClick={clearFormHandler} > Cancel </button>
</div>

  </form>
  );
};
