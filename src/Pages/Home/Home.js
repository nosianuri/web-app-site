import React from 'react';
import ToDoList from '../ToDoList/ToDoList';
import More from './More';
import ShareTask from './ShareTask';
import Workspace from './Workspace';
import Banner from './Banner';
import './home.css';
import { Cta } from '../About/components';

const Home = () => {

    return (
        <div className='home'>
            <Banner />     
            <ToDoList />
            <More />
            <Cta />
            <ShareTask />
            <Workspace />
        </div>
    );
};

export default Home;