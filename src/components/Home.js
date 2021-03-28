import React from 'react'
import selfie from '../img/selfie.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Home = () => {
    return <>
    <div className="hero">
        <div className="hero-text">
            <h2>Looking for a picture?</h2>
            <h2>We've got you covered</h2>
            <p>An Online Gallery with 100.000+ images</p>
            <Link className = "link" to = "/gallery">Browse</Link>
        </div>
    </div>
        <h1 class = "section-heading">About us</h1>
    <div className = "about-us">
    <img src={selfie} />
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
  </div>
  </>
}

export default Home;