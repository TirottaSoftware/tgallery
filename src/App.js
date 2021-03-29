import './App.css';
import Navbar from './components/navbar';
import Home from './components/Home'
import Gallery from './components/Gallery';
import Footer from './components/footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path = "/tgallery" exact component={Home}/>
          <Route path = {["/tgallery/gallery", "/gallery"]} exact component = {Gallery} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
