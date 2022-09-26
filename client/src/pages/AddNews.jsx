import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createNews } from '../redux/features/news/singleNewsSlice';

export const AddNews = () => {

const [title, setTitle] = useState('');
const [newsText, setNewsText] = useState('');
const [image, setImage] = useState('');
const [tags, setTags] = useState('');
const [category, setCategory] = useState('');
// const [file, setFile] = useState()


const dispatch = useDispatch()
const navigate = useNavigate()

const submitHandler = () => {
  try {
      const data = new FormData()
      data.append('title', title)
      data.append('newsText', newsText)
      data.append('image', image)
      // data.append('image', file)
      data.append('tags', tags)
      data.append('category', category)
      dispatch(createNews(data))
      navigate('/')
  } catch (error) {
      console.log(error)
  }
}

// const fileSelected = event => {
//   const file = event.target.files[0]
//   setFile(file)
// }

const clearFormHandler = () => {
  setNewsText('')
  setTitle('')
  setTags('')
  setCategory('')
}


  return (
<form onSubmit={(e)=> e.preventDefault()}>

<label>Upload a picture 
{/* <input onChange={fileSelected} type="file" accept="image/*"/></label> */}
  <input type="file" onChange={(e)=>setImage(e.target.files[0])}/></label>
  <div>{image && (<img src={URL.createObjectURL(image)} alt={image.name} />)}</div>
 
<label>News Title 
  <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder = 'Title'/></label>

<label>Body 
  <textarea onChange={(e)=>setNewsText(e.target.value)}  value={newsText} placeholder = 'Body of the news'/></label>

  <label>Tags 
  <input onChange={(e)=>setTags(e.target.value)}value={tags} type="text" placeholder = 'tags'/></label>
  
  <label>Categories 
  <input onChange={(e)=>setCategory(e.target.value)} value={category} type="text" placeholder = 'category'/></label>
  {/* <input list="categories" onChange={(e)=>setCategory(e.target.value)} id="category" value={category}  name={category} type="text" placeholder = 'category'/>
  <datalist id="categories">
    <option value="politics">POLITICS</option>
    <option value="business">BUSINESS</option>
    <option value="sport">SPORT</option>
    <option value="canada">CANADA</option>
    <option value="world">WORLD</option>
    <option value="technology">TECHNOLOGY</option>
    <option value="entertainment">ENTERTAINMENT</option>
    <option value="science">SCIENCE</option>
    <option value="health">HEALTH</option>
  </datalist> */}

<div>
  <button  type='submit' onClick={submitHandler} > Add </button>
  <button onClick={clearFormHandler} > Cancel </button>
</div>

  </form>
  );
};
