import React, {useState} from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Calender from './Pages/Calender/Calender';
import ToDoList from './Pages/ToDoList/ToDoList';
import Tasks from './Pages/Tasks/Tasks';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/todo' element={<ToDoList></ToDoList>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
        <Route path='/tasks' element={<Tasks></Tasks>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>

      </Routes>
      <Footer />
    </>
  );
}

export default App;
