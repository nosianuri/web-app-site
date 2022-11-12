import React from 'react';
import './WorkSpace.css';

const Workspace = () => {
    return (
        <div className="workspace">
            <div className='container'>
            <div className="d-flex">
                <img src="https://tasksboard.com/img/landing/tasksboard-google-workspace.jpg" className="workspace-img" alt='workspace' />
                <div>
                    <h1 className="text-5xl font-bold text-white">Fully integrated Workspace!</h1>
                    <p className="py-6 text-white">Export your lists to Google Sheets, attach Google Drive files and Gmail emails to your tasks.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Workspace;