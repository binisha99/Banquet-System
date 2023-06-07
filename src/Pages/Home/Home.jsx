import React from 'react';
import Header from '../../Component/Header/Header';
import Navbar from '../../Component/Navbar/Navbar';
import './Home.css';
import Team from '../../Component/Body/Team';
import Footer from '../../Component/Footer/Footer';
const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Header />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
