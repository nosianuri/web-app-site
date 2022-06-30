import React, { useState } from 'react';
import Input from '../About/Input';
import ToDoList from '../ToDoList/ToDoList';

const Home = () => {
    
    return (
        <div className="bg-indigo-600 w-full h-screen">
            <Input />
            <ToDoList />

        </div>
    );
};

export default Home;