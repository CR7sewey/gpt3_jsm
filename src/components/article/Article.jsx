import React from 'react'
import './article.css';
// p should be a Link to page

const Article = ({image, date, text}) => {
  return (
    <div className='gpt3__blog-container_article' id='article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={image} alt="blog_image" />
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
        <p>Read Full Article</p>
      </div>

    </div>
  )
}

export default Article
