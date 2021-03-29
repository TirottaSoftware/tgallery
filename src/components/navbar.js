import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Navbar = () =>{ 
    return <nav>
        <h1><Link className = "link" to = "/tgallery">TGallery</Link></h1>
        <div className = "nav-links">
          <li><Link className = "link" to = "/tgallery">About</Link></li>
          <li><Link className = "link" to = "/tgallery/gallery">Gallery</Link></li>
        </div>
    </nav>
}

export default Navbar