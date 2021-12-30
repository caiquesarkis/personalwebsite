import './App.css';
import { Routes, Route } from "react-router-dom";
import Blog from './Pages/Blog'
import BlogPost from './components/BlogPost/BlogPost'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/Blog/:id" element={<BlogPost/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
