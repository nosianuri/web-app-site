import React from 'react';
import './More.css';

const More = () => {
    return (
        <div className="more">
            <div className='container'>
            <div className="d-flex">
                <img src="https://tasksboard.com/img/landing/google-tasks-full-screen.jpg" alt='taskboard' className="more-img" />
                <div>
                    <h1 className="text-white">Get more things!</h1>
                    <p className="py-6 text-white">Organize your lists in full screen board to stay on top of your work.</p>
                    <button className="btn btn-light text-primary">Get Started</button>
                </div>
            </div>
            </div>
        </div>

    );
};

export default More;