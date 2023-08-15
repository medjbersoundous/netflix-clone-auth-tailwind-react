import React from 'react'
import Main from '../components/main/Main'
import Row from '../components/row/Row'
import requests from '../Request'

const Home = () => {
  return (
    <div>
        
        <Main  />
        <Row ID='1' title='Up coming' fetchURL={requests.requestUpcoming} />
        <Row ID='2' title='Top rating' fetchURL={requests.requestTopRated} />
        <Row ID='3' title='Popular' fetchURL={requests.requestPopular} />
        <Row ID='4' title='now playing' fetchURL={requests.requestnowplaying} />
  
    </div>

  )
}

export default Home