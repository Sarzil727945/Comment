import React, { useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Card from './Card/Card';

const Home = () => {
     useTitle('Home')
     return (
          <div className=' pt-16 lg:mx-20'>
              <Card></Card>
          </div>
     );
};

export default Home;