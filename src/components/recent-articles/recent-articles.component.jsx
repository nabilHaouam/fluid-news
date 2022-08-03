import React from 'react'
import NewsCard from '../../components/newscard/newscard.component';

const RecentArticles = ({data}) => {
  return (
    <div className='recent-articles'>
        <div className="recent-articles-wrapper">
            {data? data.slice(0, 5).map((article ,index)=> <NewsCard data={article} key={index} />) : null}
        </div>
       
    </div>
  )
}

export default RecentArticles