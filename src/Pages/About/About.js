import React from 'react';
import './About.css';
import { Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { Cta, Brand } from './components';

const About = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      
    </div>
  )
}

export default About