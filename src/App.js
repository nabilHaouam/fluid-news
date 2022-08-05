import { useState,useEffect } from 'react';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import {
 
  Routes,
  Route
} from "react-router-dom";
import Footer from './components/footer/footer.component';
import NewsPage from './pages/newspage/newspage.component';

function App() {
  const [data, setData]= useState(null);
    useEffect(() => {
        fetch('https://newsdata.io/api/1/news?apikey=pub_9921d006f8d050250334493b071ec80362d8&country=us,ca&language=en').then((res)=> res.json()).then((data)=> {
          setData(data)
          console.log(data)
        }).catch((err)=> err.message)
    }    
    , [])

  return (
    <div className="App">  
        <Header /> 
        <Routes>
          <Route path="/fluid-news" element={<HomePage articles={data}/>} />
          <Route path="/fluid-news/news" element={<NewsPage articles={data}/>} />         
        </Routes>      
      <Footer />
    </div>
  );
}

export default App;
