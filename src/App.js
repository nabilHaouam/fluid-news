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
        fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=b2c4fd3f345c4aaab08be51d86e3d780').then((res)=> res.json()).then((data)=> {
          setData(data)
        }).catch((err)=> err.message)
    }    
    , [])

  return (
    <div className="App">  
        <Header /> 
        <Routes>
          <Route path="/" element={<HomePage articles={data}/>} />
          <Route path="/news" element={<NewsPage articles={data}/>} />         
        </Routes>      
      <Footer />
    </div>
  );
}

export default App;
