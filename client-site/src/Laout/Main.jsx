import React from 'react';
import Header from '../shared/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';

const Main = () => {
     const location = useLocation()
     const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('resister')
     return (
          <div>
               {noHeaderFooter || <Header></Header>}
               <Outlet></Outlet>
          </div>
     );
};

export default Main;