import React from 'react'

import BasicButton from '../BasicButton'

const IntroPage = () => (
  <section id="intro-page">
    <article>
      <h1>How can we help?</h1>
        
      <div>
        <img src="https://www.datocms-assets.com/6524/1542276865-robot.svg" alt="little robot"/>
        
        <div className="options">
          <a href="https://www.voorhoede.nl/en/" className="basic-button">I need your services</a>
          <BasicButton link="/cases" text="I need a job" />
        </div>
      </div>
    </article>
    <div className="yellow-bg"></div>
  </section>
)

export default IntroPage
