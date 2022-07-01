import { format } from 'date-fns';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Footer from '../Shared/Footer/Footer';

const Tasks = () => {
    const [date, setDate] = useState(new Date());
    return (
        <>
        <div className='bg-indigo-600'>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h2 className='text-2xl font-bold text-white'>Welcome to our Taskboard</h2>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-58 bg-error text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li className='text-white'><Link to='/tasks'>Complete Task</Link></li>
                        <li className='text-white'><Link to='/tasks/abouttask'>About Task</Link></li>
                        <li className='text-white'><Link to='/tasks/taskhistory'>Task History</Link></li>
                        <div>
                        <DayPicker className='text-white mt-5'
                            mode='single'
                            selected={date}
                            onSelect={setDate}
                        />
                        <p className='text-white'>Selected date: {format(date, 'PP')}</p>
                    </div>
                    </ul>
                    
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default Tasks;