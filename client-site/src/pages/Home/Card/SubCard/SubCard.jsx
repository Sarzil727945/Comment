import React from 'react';

const SubCard = ({ data, index }) => {
     console.log(data);
     return (
          <div>
               <div className="card card-compact  w-100 bg-base-100 shadow-xl mb-3">
                    <figure><img src={data.img} alt="Shoes" className=' lg:h-60 w-full'/></figure>
                    <div className="card-body">
                         <h2 className="card-title">Shoes!</h2>
                         <p>If a dog chews shoes whose shoes does he choose?</p>
                         <div className="card-actions justify-end">
                              <button className="btn btn-primary">Buy Now</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SubCard;