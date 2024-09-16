
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import TvShowDetail from './components/tvshowdetail/TvShowDetail';
import TvShowList from './components/tvshowlist/TvShowList';
import {BASE_URL, API_KEY_PARAM} from './config'
import { TvShowAPI } from './services/tv_shows';


function App() {


  const [currentTvShow, setcurrentTvShow] = useState({})


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


  return (
    <div className="main">
      <Header/>
      <TvShowDetail/>
      <TvShowList/>
    </div>
  );
}

export default App;
