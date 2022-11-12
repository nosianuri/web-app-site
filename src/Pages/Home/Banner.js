import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Banner.css';

const Banner = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  return (
    <div className='banner'>
      <div className='container'>
        <div className='banner-container'>
          <div className=''>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgldowyJG3DL9RgcHTHfZu9h4brbbvkqTBg&usqp=CAU" alt="Banner" className="banner-img" />
          </div>
          <h1 class="">TasksBoard</h1>
          <p class="">A desktop app for Google Tasks. From the personal to the professional <br /> keep it all organized with TasksBoard Premium.</p>

          <button onClick={() => signInWithGoogle()} className="banner-btn">Continue with Google</button>
        </div>
      </div>
    </div>

  );
};

export default Banner;