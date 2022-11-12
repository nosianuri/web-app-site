import React, { useState } from 'react';
import Input from '../About/Input';
import ToDoList from '../ToDoList/ToDoList';
import More from './More';
import ShareTask from './ShareTask';
import Workspace from './Workspace';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Banner from './Banner';


const Home = () => {

    return (
        <div>
            <Banner />
            <ToDoList />
            <More />
            <ShareTask />
            <Workspace />
        </div>
    );
};

export default Home;