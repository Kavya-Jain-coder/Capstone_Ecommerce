import React from 'react';
import Hero from './Hero';
import FeaturedProducts from './FeaturedProducts';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <h1>Featured Products</h1>
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default Home;