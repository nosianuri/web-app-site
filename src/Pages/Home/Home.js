import React from 'react';
import ToDoList from '../ToDoList/ToDoList';
import More from './More';
import ShareTask from './ShareTask';
import Workspace from './Workspace';
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