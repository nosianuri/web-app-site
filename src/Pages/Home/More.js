import React from 'react';

const More = () => {
    return (
        <div className="hero min-h-screen bg-indigo-600">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://tasksboard.com/img/landing/google-tasks-full-screen.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-white">Get more things!</h1>
                    <p className="py-6 text-white">Organize your lists in full screen board to stay on top of your work.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default More;