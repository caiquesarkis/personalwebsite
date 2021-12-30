import './App.css';
import { Routes, Route } from "react-router-dom";
import Blog from './Pages/Blog'
import BlogPost from './components/BlogPost/BlogPost'
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/Blog/:id" element={<BlogPost/>} />
      </Routes>
    </div>
  );
}

export default App;
