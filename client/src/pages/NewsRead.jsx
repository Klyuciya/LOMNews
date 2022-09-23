import React from "react";
import { useEffect } from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "../utils/axios.js";
import { useLocation} from "react-router"

export const NewsRead = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [news, setNews] = useState({})
  useEffect (() => {
    const getNews = async () => {
      const res = await axios.get("/news/" + path)
      setNews(res.data)
    }
    getNews()
  },[path])
// }
  return (
  <div class="container">
    <div class="row">
      <div class="col-md-9">
        <div class="item feature_news_item"> 
           {news.image && 
           <img
          src={`http://localhost:3002/${news.image}`}
          alt=''
           className='newsReadImg'
          />}
        </div>
          <div class="item_wrapper">
						<div class="news_item_title">
							<h2>{news.title}</h2> 
            </div>
            <div class="item_meta">{news.createDate} by:{news.author} </div>
            <div class="item_content">
              <p>{news.newsText}</p>
						</div>
            <div class="category_list">
              <a href="#">{news.tags}</a>
            </div>
        </div> 
        <div class="readers_comment">
        <div class="media">
							<div class="media-left">
								<img alt="64x64" class="media-object" data-src=""
										 src="" data-holder-rendered="true"/>
							</div>
							<div class="media-body">
								<h2 class="media-heading"> </h2>
							</div>
        </div> 
        <div class="add_a_comment">
						<div class="single_media_title"><h2>Add a Comment</h2></div>
						<div class="comment_form">
              <form>
              <div class="form-group comment">
                <textarea class="form-control" id="inputComment" placeholder="Comment"></textarea>
	              </div>
	              
	            </form>
              <button type="submit" class="btn btn-submit red">Submit</button>
            </div>
					</div>
      </div>
      
     
      </div>
    </div>
  </div>
  )};
