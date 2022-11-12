import React from 'react';
import './WorkSpace.css';

const Workspace = () => {
    return (
        <div className="workspace">
            <div className='container'>
                <div className="row">
                    <div className='col-sm-6'>
                        <img src="https://tasksboard.com/img/landing/tasksboard-google-workspace.jpg" className="workspace-img" alt='workspace' />
                    </div>

                    <div className='col-sm-6 workspace-text'>
                        <h1 className="text-5xl font-bold text-white">Fully integrated Workspace!</h1>
                        <p className="py-6 text-white">Export your lists to Google Sheets, attach Google Drive files and Gmail emails to your tasks.</p>
                        <button className="btn btn-light text-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Workspace;