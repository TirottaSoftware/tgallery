import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Navbar = () =>{ 
    return <nav>
        <h1><Link className = "link" to = "/">TGallery</Link></h1>
        <div className = "nav-links">
          <li><Link className = "link" to = "/">About</Link></li>
          <li><Link className = "link" to = "/gallery">Gallery</Link></li>
        </div>
    </nav>
}

export default Navbar