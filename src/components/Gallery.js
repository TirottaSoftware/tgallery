import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

const Gallery = () =>{
    const [userInput, setInput] = useState("");
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [modalImage, setModalImage] = useState("");
    const [modalState, setModalState] = useState(false);
    const clientId = "slBxOLv-AbX4DVYTU9QWCpEzjku3TjyKHR1K11KRMn0";
    
    useEffect(() => {
        let url = "https://api.unsplash.com/search/photos?page=1&query=images&client_id="+ clientId;
        axios.get(url).then(response =>{
            setResults(response.data.results);
        });
        setInput("");
    }, [])

    useEffect(() => {
        const close = (e) => {
          if(e.keyCode === 27){
            setModalState(false);
          }
        }
        window.addEventListener('keydown', close)
      return () => window.removeEventListener('keydown', close)
    },[])

    const handleModalClick = () => {
        setModalState(!modalState);
    }
    const handleImageClick = (id) => {
        let url = "https://api.unsplash.com/photos/"+id+"?client_id=" + clientId;
        axios.get(url).then(response =>{
            setModalImage(response.data.urls.small);    
        })
        setModalState(!modalState);
    }

    const prevPage = () => {
        let prev = page - 1;
        setPage(prev);
        let url = "https://api.unsplash.com/search/photos?page="+prev+"&query="+userInput+"&client_id="+ clientId;
        axios.get(url).then(response =>{
            setResults(response.data.results);
        });
    }
    const nextPage = () => {
        let next = page + 1;
        setPage(next);
        let url = "https://api.unsplash.com/search/photos?page="+next+"&query="+userInput+"&client_id="+ clientId;
        axios.get(url).then(response =>{
            setResults(response.data.results);
        });

    }
    const handleChange = (event) => {
        event.preventDefault();
        setInput(event.target.value);
    }
    const handleSubmit = (event) =>{
        setPage(1);
        event.preventDefault();
        let url = "https://api.unsplash.com/search/photos?page="+page+"&query="+userInput+"&client_id="+ clientId;
        axios.get(url).then(response =>{
            setResults(response.data.results);
        });
    }

    return <div>
        <div className = "gallery-hero"></div>
        <form onSubmit = {handleSubmit}>
        <p className = "search-text">Search for your favourite photos</p>
        <input className="search-bar" onChange = {handleChange} value = {userInput} type = "text" />    
    </form>
    {
    userInput != ""?
        <div className = "page-nav">
        <button className = "btn-nav" onClick = {prevPage}><FontAwesomeIcon icon={faArrowCircleLeft} /></button>
        <h2>{page}</h2>
        <button className = "btn-nav" onClick = {nextPage}><FontAwesomeIcon icon={faArrowCircleRight} /></button>
        </div>:null
    }
   
        <div onClick = {handleModalClick} className={'modal modal-' + modalState}>
            <img src = {modalImage} />
        </div>
        <div className="img-container">
            {results.map(result => {
                return <img onClick = {() => handleImageClick(result.id)} key = {result.id} src = {result.urls.small} />
            })}
        </div>
    </div>
}

export default Gallery;