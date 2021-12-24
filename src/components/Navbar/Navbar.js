import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {

    return (
      <div className='navbar'>
        <Link className='navbar-item' id="home-icon" to="/">
          <i className="material-icons">home</i>
        </Link>
        <Link className='navbar-item' id="blog-button" to="/blog">Blog</Link>
      </div>
    );
  }
  
  export default Navbar;