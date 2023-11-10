import './App.css';
import Home from './pages/Home';
import { Navbar } from './comps/Navbar';
import {  Route, Routes  } from 'react-router-dom';
import About from './pages/About';
import Post from './pages/Post';
import Head from './comps/Head';
import Category from './pages/Category';
import Search from './pages/Search';
import Footer from './comps/Footer';
import { Helmet } from 'react-helmet';
import PageNotFound from './pages/PageNotFound';
import Popup from './comps/Popup';
import Chatbot from './comps/Chatbot';
import Newsletter from './pages/NewsLetter';

          
function App() {
  return (
    <>
    <div className="App">
      <Head/>
      <Popup/>
      <Navbar/>
      <Routes>
      <Route path="/:title" element={<Post/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/author" element={<About/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/weekly-digest" element={<Newsletter/>} />
        <Route  path="/category/:id/" element={<Category/>}/>
        <Route  path="/search/:keyword" element={<Search/>}/>
        <Route path="*"  element={<PageNotFound/>} />
        <Route path="404"  element={<PageNotFound/>} />
      </Routes>
     
     <Chatbot/>
     <Footer/>
    </div>
    </>

  );
}

export default App;
