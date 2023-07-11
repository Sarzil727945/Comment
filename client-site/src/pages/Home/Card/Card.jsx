import React, { useEffect, useState } from 'react';
import SubCard from './SubCard/SubCard';
// import useTitle from '../../hooks/useTitle';
const Card = () => {
     const [isLoading, setIsLoading] = useState(true);
     const [dataInformation, setDataInformation] = useState([]);
     useEffect(() => {
          fetch('cardData.json')
               .then(res => res.json())
               .then(data => {
                    setDataInformation(data);
                    setIsLoading(false);
               })
     }, [])
     return (
          <div className=' mt-5 pt-5 container'>
               <div className=' grid lg:grid-cols-3 gap-8'>
                    {
                         dataInformation.map((data, index) => <SubCard
                              key={data._id}
                              data={data}
                         ></SubCard>
                         )
                    }
               </div>
               {
                    isLoading && <div className="text-center my-5">
                         <span className="loading loading-spinner text-accent w-10"></span>
                    </div>
               }
          </div>
     );
};

export default Card;