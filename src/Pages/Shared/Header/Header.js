import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };

  const menuItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/todo">To-Do</Link></li>
    <li><Link to="/calender">Calender</Link></li>
    <li><Link to="/tasks">Tasks</Link></li>
    <li><Link to="/about">About</Link></li>
    {
      user && <li><Link to="/dashboard">Dashboard</Link></li>
    }
    <li>{user ? <button className="btn btn-ghost" onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}</li>
  </>

    // let Links =[
    //     {name:"HOME",link:"/"},
    //     {name:"To-Do",link:"/todo"},
    //     {name:"Calender",link:"/calender"},
    //     {name:"Tasks",link:"/tasks"},
    //   ];
    //   let [open,setOpen]=useState(false);
    
    return (
      <div className="navbar bg-white shadow-md">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl text-gray-800"><span className='text-3xl text-indigo-600 mr-1 pt-2'><ion-icon name="logo-ionic"></ion-icon></span>WebApp</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-gray-800 ">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
      </div>
    </div>


    //     <div className='shadow-md w-full top-0 left-0'>
    //   <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
    //   <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    //   text-gray-800'>
    //     <span className='text-3xl text-indigo-600 mr-1 pt-2'>
    //     <ion-icon name="logo-ionic"></ion-icon>
    //     </span>
    //     WebApp
    //   </div>
      
    //   <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
    //   <ion-icon name={open ? 'close':'menu'}></ion-icon>
    //   </div>

    //   <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
    //     {
    //       Links.map((link)=>(
    //         <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
    //           <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
    //         </li>
    //       ))
    //     }
    //     <Button>
    //       Get Started
    //     </Button>
    //   </ul>
    //   </div>
    // </div>
    );
};

export default Header;