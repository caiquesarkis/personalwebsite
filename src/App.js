import './App.css';
import { Routes, Route } from "react-router-dom";
import Blog from './Pages/Blog'
import Home from './Pages/Home'
import BlogPost from './components/BlogPost/BlogPost'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" exact element={<Blog />} />
        <Route path="/Blog/:id"  element={<BlogPost />} />
      </Routes>
    </div>
  );
}

export default App;
