
import React from 'react'
import Campaigns from "../../components/Campaigns";
import Carousel from "../../components/Carousel";
import Customers from "../../components/customers/Customers";
import MenuWrapper from '@/components/product/MenuWrapper';
import About from '@/components/About';
import Reservation from '@/components/Reservation';


const Home = () => {
  return (
    <React.Fragment>
   
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About/>
      <Reservation/>
      <Customers />
    </React.Fragment>
  );
}

export default Home;
