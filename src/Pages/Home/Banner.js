import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Banner = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    return (
        <div class="hero min-h-screen bg-indigo-600">
  <div class="hero-content text-center">
    <div class="max-w-md">
    <figure className="px-10 place-items-center place-items-center">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgldowyJG3DL9RgcHTHfZu9h4brbbvkqTBg&usqp=CAU" alt="Shoes" className="rounded-xl" />
  </figure>
      <h1 class="text-5xl font-bold mt-5 text-white">TasksBoard</h1>
      <p class="py-6 text-white">A desktop app for Google Tasks. From the personal to the professional keep it all organized with TasksBoard Premium.</p>
      
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline text-white">Continue with Google</button>
    </div>
  </div>
</div>
//         <div className="bg-indigo-600 shadow-xl">
//   <figure className="px-10 place-items-center">
//     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgldowyJG3DL9RgcHTHfZu9h4brbbvkqTBg&usqp=CAU" alt="Shoes" className="rounded-xl" />
//   </figure>
//   <div className="card-body items-center text-center">
//     <h1 className="card-title font-large text-white">TasksBoard</h1>
//     <p className='text-white'>A desktop app for Google Tasks</p>
//     <div className="card-actions">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>
    );
};

export default Banner;