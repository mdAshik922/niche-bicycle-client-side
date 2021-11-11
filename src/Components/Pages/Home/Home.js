import React from 'react';
import Banner from '../../HomeBanner/Banner';
import HomePageProductShow from '../Product/HomePageProductShow';
import Reviews from '../Reviews/Reviews';
import bicycle1 from './img/Screenshot_4.png';
import bicycle2 from './img/Screenshot_7.png';
import './Home.css';
const Home = () => {
   
    return (
        
       <>
           <Banner></Banner>
          
<h2>Our Product</h2>
<HomePageProductShow></HomePageProductShow>



<div >
<img src={bicycle1} alt=""/>
<img src={bicycle2} alt=""/>
</div>

   
           <Reviews></Reviews>
       </>
    );
};

export default Home;