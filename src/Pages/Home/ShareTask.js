import React from 'react';
import './ShareTask.css';

const ShareTask = () => {
  return (
    <div className="sharetask">
      <div className='container'>
      <div className="d-flex">
        <img src="https://tasksboard.com/img/landing/share-google-tasks.jpg" className="sharetask-img" alt='shareTask' />
        <div>
          <h1 className="text-5xl font-bold text-white">Share your tasks!</h1>
          <p className="py-6 text-white">Share your Google Tasks lists in real-time with your team with one link.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ShareTask;