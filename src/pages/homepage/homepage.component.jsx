
import RecentArticles from '../../components/recent-articles/recent-articles.component';
import './homepage.styles.css';



const HomePage = ({articles}) => {
    
  
  return (
    
    <div className='home-page'>
      <h2>Recent Articles :</h2>
      <div className="homepage-recent-articles">
        <RecentArticles data={articles? articles.articles :''}/>
      </div>
     
      
    </div>
  )
}

export default HomePage
