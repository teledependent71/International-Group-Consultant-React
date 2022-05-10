import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>International Group Consultant</title>
        <meta property="og:title" content="International Group Consultant" />
      </Helmet>
    </div>
  )
}

export default Home
