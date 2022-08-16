import React from 'react';
import Banner from '../Banner';
import "./HomeScreen.css";
import Nav from '../Nav';
import Requests from '../Requests';
import Row from '../Row';

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav/>{/* Nav */}

        <Banner/>{/* Banner */}

        <Row 
      title="NETFLIX ORIGINALS" 
      fetchUrl={Requests.fetchNetflixOriginals}
      isLargeRow={true}
      />
      <Row 
      title="Trending Now"
      fetchUrl={Requests.fetchTrending}
      />
      <Row 
      title="Top Rated"
      fetchUrl={Requests.fetchTopRated}
      />
      <Row 
      title="Action Movies"
      fetchUrl={Requests.fetchActionMovies}
      />
      <Row 
      title="Comedy Movies"
      fetchUrl={Requests.fetchComedyMovies}
      />
      <Row 
      title="Horror Movies"
      fetchUrl={Requests.fetchHorrorMovies}
      />
      <Row 
      title="Romance Movies"
      fetchUrl={Requests.fetchRomanceMovies}
      />
      <Row 
      title="Documentaries"
      fetchUrl={Requests.fetchDocumantaries}
      />{/* Row */}
    </div>
  )
}

export default HomeScreen