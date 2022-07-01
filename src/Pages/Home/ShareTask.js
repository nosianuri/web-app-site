import React from 'react';

const ShareTask = () => {
  return (
    <div className="hero min-h-screen bg-indigo-600">
      <div className="hero-content flex-col lg:flex-row">
        <img src="https://tasksboard.com/img/landing/share-google-tasks.jpg" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold text-white">Share your tasks!</h1>
          <p className="py-6 text-white">Share your Google Tasks lists in real-time with your team with one link.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default ShareTask;