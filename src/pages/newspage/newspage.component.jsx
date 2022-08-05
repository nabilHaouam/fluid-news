import React from 'react'
import NewsCard from '../../components/newscard/newscard.component';
import './newspage.styles.css';

const NewsPage = ({articles}) => {

  return (
    <div className='articles-page'>
        <h2>All Articles :</h2> 
        <div className='articles'>
        {articles? articles.articles.map((article ,index)=><NewsCard data={article} key={index}/>) : null}
        </div>
    </div>
  )
}

export default NewsPage