import React from 'react';

const Banner = () => {
    return (
        <div className="bg-indigo-600 shadow-xl mt-5 pt-5">
  {/* <figure className="px-10 pt-10 mt-5 place-items-center">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgldowyJG3DL9RgcHTHfZu9h4brbbvkqTBg&usqp=CAU" alt="Shoes" className="rounded-xl" />
  </figure> */}
  <div className="card-body items-center text-center">
    <h1 className="card-title font-large text-white">TasksBoard</h1>
    <p className='text-white'>A desktop app for Google Tasks</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Banner;