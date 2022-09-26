import React, {useState,  useEffect} from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createNews } from '../redux/features/news/singleNewsSlice';
import axios from "../utils/axios.js";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

export const AddNews = () => {

const [title, setTitle] = useState('');
const [newsText, setNewsText] = useState('');
const [image, setImage] = useState('');
const [tags, setTags] = useState('');
const [category, setCategory] = useState([]);
// const [value, setValue]= useState('');



  // useEffect(() => {
  //   const getCats = async () => {
  //     const res = await axios.get("/categories");
  //     setCategory(res.data);
  //     // console.log(setCats);
  //   };
  //   getCats();
  // }, []);

// const options = Array.from(category).map((name, _id)=>{
// return <option key={_id} value={_id}>{name}</option> 
// }
// )


// const fileSelected = event => {
//   const file = event.target.files[0]
//   setFile(file)
// }

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
  
  <input type="checkbox" id="canada" onChange={(e)=>setCategory(e.target.value)} value="6331d6e4d2ef306f243daaa5"/>
  <label for="canada">Canada</label>

  <input type="checkbox" id="world" onChange={(e)=>setCategory(e.target.value)} value="6331d6d2d2ef306f243daaa3"/>
  <label for="world">World</label>
  
  <input type="checkbox" id="business" onChange={(e)=>setCategory(e.target.value)} value="6331d6bdd2ef306f243daaa1"/>
  <label for="business">Business</label>
  
  <input type="checkbox" id="health" onChange={(e)=>setCategory(e.target.value)} value="6331d6a3d2ef306f243daa9f"/>
  <label for="health">Health</label>
  
  <input type="checkbox" id="science" onChange={(e)=>setCategory(e.target.value)} value="6331d68dd2ef306f243daa9d"/>
  <label for="science">Science</label>
  
  <input type="checkbox" id="technology" onChange={(e)=>setCategory(e.target.value)} value="6331d673d2ef306f243daa9b"/>
  <label for="technology">Technology</label>
  
  <input type="checkbox" id="politics" onChange={(e)=>setCategory(e.target.value)} value="6331d659d2ef306f243daa99"/>
  <label for="politics">Politics</label>

  <input type="checkbox" id="sport" onChange={(e)=>setCategory(e.target.value)} value="6331d5e637feccc826630085"/>
  <label for="sport">Sport</label>

  <input type="checkbox" id="entertainment" onChange={(e)=>setCategory(e.target.value)} value="6331cc3da76829cd3e80f7e6"/>
  <label for="entertainment">Entertainment</label>

  
  {/* <label>Categories  */}
    
  {/* <input onChange={(e)=>setCategory(e.target.value)} value={category} type="text" placeholder = 'category'/></label> */}
  {/* <select type="text" placeholder = 'category'> */}
  {/* <input list="categories" type="text" /> */}

{/* {options} */}

  {/* <datalist id="categories"> */}
  {/* <option value="633148ed7c42798b6c32f2d7"  onChange={(e)=>setCategory(e.target.value)} >CANADA</option> */}
    {/* <option value="world">WORLD</option> */}
  {/* {category.map((c) => (
    
    <option value={category}  onChange={(e)=>setCategory(e.target.value)}>{c.name}</option>
     ))}  */}
    {/* // <option value="business">BUSINESS</option>
    // <option value="sport">SPORT</option>
    <option value="canada">CANADA</option>
    <option value="world">WORLD</option>
    // <option value="technology">TECHNOLOGY</option>
    // <option value="entertainment">ENTERTAINMENT</option>
    // <option value="science">SCIENCE</option>
    // <option value="health">HEALTH</option> */}
  {/* </datalist> */}
  {/* </select> */}
{/* </label> */}


<div>
  <button  type='button' onClick={submitHandler} > Add </button>
  <button onClick={clearFormHandler} > Cancel </button>
</div>

  </form>
  );
};
