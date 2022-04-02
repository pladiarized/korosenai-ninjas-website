import React from 'react';
import Header from '../components/header/Header';
import Slider01 from '../components/slider/Slider01';
import dataSlider from '../assets/fake-data/dataSlider';
import BestSeller from '../components/layouts/home/BestSeller';
import dataBestSeller from '../assets/fake-data/dataBestSeller'
import dataCreate from '../assets/fake-data/dataCreate'
import Category from '../components/layouts/home/Category';
import Create from '../components/Create';
import FooterStyle2 from '../components/footer/FooterStyle2';

const Home01 = () => {
  return <div className='home-1'>
      <Header />
      <Slider01 id='Home' data={dataSlider} />
      <section id='Lore' className='tf-section'>
      <Category />
      </section>
      <Create id='Roadmap' data={dataCreate} />
      <BestSeller id='Team' data={dataBestSeller} />
      <FooterStyle2 />
  </div>;
};

export default Home01;
