import { useState,useEffect } from 'react';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/footer/footer.component';
import NewsPage from './pages/newspage/newspage.component';

function App() {
  const [data, setData]= useState(null);
    useEffect(() => {
        fetch('http://api.mediastack.com/v1/news?access_key=6c6b9646111c5c3071740ebafe8298f9&sources=en').then((res)=> res.json()).then((data)=> {
          console.log(data)
          setData(data)
        })
    }, [])
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header /> 
        <Routes>
          <Route path="/" element={<HomePage articles={data}/>} />
          <Route path="/news" element={<NewsPage articles={data}/>} />          
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;
