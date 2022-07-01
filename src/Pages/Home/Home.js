import React, { useState } from 'react';
import Input from '../About/Input';
import ToDoList from '../ToDoList/ToDoList';
import More from './More';
import ShareTask from './ShareTask';
import Workspace from './Workspace';
import Footer from '../Shared/Footer/Footer';


const Home = () => {
    
    return (
        <div className="w-full h-screen">
            <Input />
            <ToDoList />
            <More />
            <ShareTask />
            <Workspace />
            <Footer />
        </div>
    );
};

export default Home;