
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import TvShowDetail from './components/tvshowdetail/TvShowDetail';
import TvShowList from './components/tvshowlist/TvShowList';
import {BASE_URL, API_KEY_PARAM, BACKDROP_BASE_URL} from './config'
import { TvShowAPI } from './services/tv_shows';
import axios from 'axios';


function App() {


  const [currentTvShow, setcurrentTvShow] = useState([])
  const [tvRecommendations, setTvRecommendations] = useState([])

  // console.log(currentTvShow)


  async function fetchData() {

    try{

    const response = await TvShowAPI.fetchPopular()
    setcurrentTvShow(response)

    }catch(error){
      console.log(error)

    }
    
    
  }

  useEffect(()=>{
    fetchData()

  },[])

async function fetchRecommendations(id) {

  try{
    const response = await TvShowAPI.fetchRecommendations(id)
    setTvRecommendations(response.data.results)

  }catch(error){
    console.log(error.message)
  }
  
}

useEffect(()=>{
  fetchRecommendations(currentTvShow.id)
},[currentTvShow.id])


function update_current_show(idshow){
  setcurrentTvShow(idshow)
}

  return (
    <div className="main" style={{backgroundImage: `url('${BACKDROP_BASE_URL}${currentTvShow.backdrop_path}')`}}>
      <Header/>
      <TvShowDetail tvshow={currentTvShow}/>
      <TvShowList tvRecommendations={tvRecommendations} onClickItem={update_current_show}/>
    </div>
  );
}




export default App;
