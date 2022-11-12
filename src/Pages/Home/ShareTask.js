import React from 'react';
import './ShareTask.css';

const ShareTask = () => {
  return (
    <div className="sharetask">
      <div className='container'>
        <div className="row">

        <div className='col-sm-6 sharetask-text'>
            <h1 className="text-5xl font-bold text-white">Share your tasks!</h1>
            <p className="py-6 text-white">Share your Google Tasks lists in real-time with your team with one link.</p>
            <button className="btn btn-light text-primary">Get Started</button>
          </div>

          <div className='col-sm-6 simg'>
            <img src="https://tasksboard.com/img/landing/share-google-tasks.jpg" className="sharetask-img" alt='shareTask' />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ShareTask;