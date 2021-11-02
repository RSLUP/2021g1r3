import React from 'react';
import '../../App.css';
import HeroSection from '../../Components/HeroSection';
import {homeObjOne} from './Data'


function Home() {
  return (
    <>
    <HeroSection {...homeObjOne}/> 
    </>
  );
}

export default Home;