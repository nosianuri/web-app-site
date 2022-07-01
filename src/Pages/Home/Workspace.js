import React from 'react';

const Workspace = () => {
    return (
        <div className="hero min-h-screen bg-indigo-600">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://tasksboard.com/img/landing/tasksboard-google-workspace.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-white">Fully integrated Workspace!</h1>
                    <p className="py-6 text-white">Export your lists to Google Sheets, attach Google Drive files and Gmail emails to your tasks.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Workspace;